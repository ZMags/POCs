<?php 
set_time_limit(5400);
include('../library/simple_html_dom.php');

$proxy = new SoapClient('http://ps.zmags.com/poc/inwear/magento/api/soap/?wsdl');
$sessionId = $proxy->login('alvarov', '13012008');


$mysqli = new mysqli("localhost", "magento", "magento", "magento");

$result=$mysqli->query("select * from scrap_products where scrap_products_sku!=''");

while($prod=$result->fetch_object())
{
	$html = file_get_html('http://www.inwear.com/DK/item/'.$prod->scrap_products_id.'/?partner=5343');
	foreach($html->find('script') as $script)
	{
		$texto=$script->innertext;		
		if(substr_count($texto,'iData')>0)
		{			
			preg_match("/(iData)(\\s+)(=)(\\s+)(\\{.*?\\n)/is",$texto,$match);
			preg_match("/(\\{.*?\\n)/is",$match[0],$final);			
			$tmp=json_decode(trim(substr(strtolower($final[0]), 0, -2)));
			$mysqli->query("update catalog_product_entity set has_options=1,required_options=1 where entity_id='".$prod->scrap_products_sku."'");
			if($mysqli->query("select * from catalog_product_option where product_id='".$prod->scrap_products_sku."'")->num_rows==0)
			{
				$mysqli->query("insert into catalog_product_option(product_id,type) values('".$prod->scrap_products_sku."','radio')");
			}
								
			$option_id=$mysqli->insert_id;
			foreach($tmp->options as $opt)
			{
				$result_opt=$mysqli->query("select * from catalog_product_option_type_value where sku='".$opt->sku."'");
				if($result_opt->num_rows==0)
				{		
					$mysqli->query("insert into catalog_product_option_title(option_id,title) values('".$option_id."','color-size-length')");
					$mysqli->query("insert into catalog_product_option_type_value(option_id,sku) values('".$option_id."','".$opt->sku."')");
					$option_type_id=$mysqli->insert_id;
					$color=isset($opt->properties->color)?$opt->properties->color:0;
					$size=isset($opt->properties->size)?$opt->properties->size:0;
					$fit=isset($opt->properties->fit)?rtrim($opt->properties->fit,'"'):0;
					$title_opt=strtoupper($color.'-'.$size.'-'.$fit);
					$mysqli->query("insert into catalog_product_option_type_title(option_type_id,title) values('".$option_type_id."','".$title_opt."')");
					$mysqli->query("insert into catalog_product_option_type_price(option_type_id) values('".$option_type_id."')");
					

					
				}								
			}
		}
		
	}	
	$html->clear();
	unset($html);
}

$mysqli->close();
