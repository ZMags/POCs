<?php
set_time_limit(5400);
include('library/simple_html_dom.php');

$html = file_get_html('http://www.inwear.com/');

foreach($html->find('#menu li a') as $a)
{	
	$link=$a->href;
	$parametros=explode('&',end(explode('?',$link)));
	$category=explode('=',$parametros[0]);
	$section=explode('=',$parametros[1]);	
	if($category[0]!='f_category')
	{			
		$children[]=array('child_section_url'=>$category[0],'child_section_name'=>$category[1],'child_section_id'=>$section[1],'parent_section_id'=>$parent_id);				
	}
	else
	{		
		$parent[]=array('parent_section_name'=>urldecode($category[1]),'parent_section_id'=>$section[1]);
		$parent_id=$section[1];
	}
}
$html->clear();
unset($html);

foreach($children as $ch)
{
	$json = json_decode(file_get_contents('http://www.inwear.com/v1/search.json?'.$ch['child_section_url'].'='.$ch['child_section_name'].'&page_size=180&secid='.$ch['child_section_id']));
	$json_productos=$json->response->docs;	
	
	foreach($json_productos as $prod)
	{								
		$features='features-fabric_care';
		$tmp='SIZE';
		$tmp_color='COLOR';
				
		$size=(isset($prod->$tmp))?implode(',',$prod->$tmp):'';
		
		$productos[]=array(
						'product_id'=>$prod->manufacturer_sku,
						'child_section_id'=>$ch['child_section_id'],
						'name'=>utf8_encode($prod->name),
						'price'=>$prod->price,
						'description'=>'Description: '.$prod->shortdesc.'.<br> More: '.implode(',',$prod->desc_long_features).'. <br> Other features: '.implode(',',$prod->$features),
						'short_description'=>$prod->shortdesc,
						'url'=>$prod->url,
						'image_main_large'=>implode(',',$prod->image_main_large),
						'color'=>implode(',',$prod->$tmp_color),
						'size'=>$size
						);							
	}
}

unset($json);
unset($json_productos);


$mysqli = new mysqli("localhost", "magento", "magento", "magento");
//$mysqli = new mysqli("localhost", "root", "root", "magento");

foreach($parent as $p)
{
	$mysqli->query("select scrap_categories_id from scrap_categories where scrap_categories_id='".$p['parent_section_id']."'");
	if($mysqli->affected_rows==0)
	{
		$cat_id=$mysqli->real_escape_string($p['parent_section_id']);
		$cat_name=$mysqli->real_escape_string(urldecode($p['parent_section_name']));
		$mysqli->query("insert into scrap_categories(scrap_categories_id,scrap_categories_name) values('".$cat_id."','".$cat_name."')");
	}	
}
unset($parent);
foreach($children as $c)
{
	$mysqli->query("select scrap_subcategories_id from scrap_subcategories where scrap_subcategories_id='".$c['child_section_id']."'");
	if($mysqli->affected_rows==0)
	{
		$sub_id=$mysqli->real_escape_string($c['child_section_id']);
		$sub_name=$mysqli->real_escape_string(urldecode($c['child_section_name']));
		$sub_cat_id=$mysqli->real_escape_string($c['parent_section_id']);
		$mysqli->query("insert into scrap_subcategories(scrap_subcategories_id,scrap_subcategories_name,scrap_categories_id) values('".$sub_id."','".$sub_name."','".$sub_cat_id."')");
	}		
}
unset($children);

$mysqli->query("update scrap_products set scrap_subcategories_id='' ");
foreach($productos as $prod)
{
	$rs=$mysqli->query("select scrap_products_id,scrap_subcategories_id from scrap_products where scrap_products_id='".$prod['product_id']."' limit 1");
	if($rs->num_rows==0)
	{
		$mysqli->query("insert into scrap_products
		(scrap_products_id,
		scrap_subcategories_id,
		scrap_products_name,
		scrap_products_price,
		scrap_products_description,
		scrap_products_short_description,
		scrap_products_image_main_large,
		scrap_products_url,
		scrap_products_color,
		scrap_products_size) 
		values(
		'".$mysqli->real_escape_string($prod['product_id'])."',
		'".$mysqli->real_escape_string($prod['child_section_id'])."',
		'".$mysqli->real_escape_string($prod['name'])."',
		'".$mysqli->real_escape_string($prod['price'])."',
		'".$mysqli->real_escape_string($prod['description'])."',
		'".$mysqli->real_escape_string($prod['short_description'])."',
		'".$mysqli->real_escape_string($prod['image_main_large'])."',
		'".$mysqli->real_escape_string($prod['url'])."',
		'".$mysqli->real_escape_string($prod['color'])."',
		'".$mysqli->real_escape_string($prod['size'])."')"
		);
	}
	else
	{
		$row = $rs->fetch_row();
		if(array_search($prod['child_section_id'],explode(',',$row[1]))===FALSE)
		{
			$sub=$row[1].','.$prod['child_section_id'];
			$mysqli->query("update scrap_products set scrap_subcategories_id='".$sub."' where scrap_products_id='".$prod['product_id']."' ");			
		}		
	}	
}

unset($productos);


$proxy = new SoapClient('http://ps.zmags.com/poc/inwear/magento/api/soap/?wsdl');
$sessionId = $proxy->login('alvarov', '13012008');

$rsCat=$mysqli->query("select * from scrap_categories where scrap_categories_sku=''");
if($rsCat->num_rows>0)
{
	while($cat = $rsCat->fetch_object()) 
	{		
    	$cat_id=$proxy->call($sessionId,'category.create',array(2,array('name'=>$cat->scrap_categories_name,'available_sort_by'=>'price','default_sort_by'=>'price','include_in_menu'=>1,'is_active'=>1,'display_mode'=> 'PAGE')));
    	$mysqli->query("UPDATE scrap_categories set scrap_categories_sku='".$cat_id."' WHERE scrap_categories_id='".$cat->scrap_categories_id."'"); 						   
    }
}

$rsSub=$mysqli->query("select * from scrap_subcategories where scrap_subcategories_sku=''");
if($rsSub->num_rows>0)
{
    while($sub = $rsSub->fetch_object()) 
	{
		$tmpCat=$mysqli->query("SELECT scrap_categories_sku FROM scrap_categories WHERE scrap_categories_id='".$sub->scrap_categories_id."'");
		if($tmpCat->num_rows==1)
		{			
	    	$sub_id=$proxy->call($sessionId, 'category.create',array($tmpCat->fetch_object()->scrap_categories_sku,array('name'=>utf8_encode($sub->scrap_subcategories_name),'available_sort_by'=>'price','default_sort_by'=>'price','include_in_menu'=>1,'is_active'=>1,'display_mode'=> 'PRODUCTS')));
	    	$mysqli->query("UPDATE scrap_subcategories set scrap_subcategories_sku='".$sub_id."' WHERE scrap_subcategories_id='".$sub->scrap_subcategories_id."'");
		}
	}
}



$attributeSets = $proxy->call($sessionId, 'product_attribute_set.list');
$set = current($attributeSets);

$rsProd=$mysqli->query("select * from scrap_products where scrap_products_sku=''");
if($rsProd->num_rows>0)
{
	while($prod = $rsProd->fetch_object())
	{
		$newProductData = array(
		    'name'=>$prod->scrap_products_name,
		    'status'=>1,
		    'price'=>$prod->scrap_products_price,
		    'weight'=>1,
		    'description'=>$prod->scrap_products_description,
		    'short_description'=>$prod->scrap_products_short_description,
		    "tax_class_id" =>'tax_class_id',
		    "websites" =>array('1')
		); 
		
		$product_id=$proxy->call($sessionId, 'product.create', array('simple', $set['set_id'],$prod->scrap_products_id, $newProductData));

		$images=explode(',',$prod->scrap_products_image_main_large);
		
		foreach($images as $i)
		{
			$newImage = array(
			    'file' => array(
			        'name' => 'file_name',
			        'content' => base64_encode(file_get_contents('http://static.inwear.com/static/img/catalog/INWEAR/large/'.$i)),
			        'mime'    => 'image/png'
			    ),
			    //'label'    => 'Image from InWear',
				'label'    => $i,
			    'position' => 2,
			    'types'    => array('image','small_image','thumbnail'),
			    'exclude'  => 0
			);
			 
			$imageFilename = $proxy->call($sessionId, 'product_media.create', array($product_id, $newImage));	
		}
		$mysqli->query("UPDATE scrap_products set scrap_products_sku='".$product_id."' WHERE scrap_products_id='".$prod->scrap_products_id."'");
		$sub_prod=explode(',',$prod->scrap_subcategories_id);
		foreach($sub_prod as $s)
		{
			$tmpSub=$mysqli->query("select scrap_subcategories_sku from scrap_subcategories where scrap_subcategories_id='".$s."'");
			if($tmpSub->num_rows==1)
			{
				$proxy->call($sessionId, 'category.assignProduct', array($tmpSub->fetch_object()->scrap_subcategories_sku, $product_id));
			}	
		}
		
	}	
}
$mysqli->close();