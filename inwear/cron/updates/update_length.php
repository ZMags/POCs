<?php
set_time_limit(5400);
$mysqli = new mysqli("localhost", "magento", "magento", "magento");

$proxy = new SoapClient('http://ps.zmags.com/poc/inwear/magento/api/soap/?wsdl');
$sessionId = $proxy->login('alvarov', '13012008');
$length = $proxy->call($sessionId, 'product_attribute.options', array('attribute_id'=>'length_inwear'));

$result_products=$mysqli->query("select scrap_products_sku from scrap_products where scrap_products_sku!=''");


while($row=$result_products->fetch_object())
{	
	$result_option=$mysqli->query("select option_id from catalog_product_option where product_id='".$row->scrap_products_sku."'");
	$tmp_length=0;
	
	if($result_option->num_rows>0)
	{
		while($row_ins=$result_option->fetch_object())
		{
			$titles=$mysqli->query("select title from catalog_product_option_type_value inner join catalog_product_option_type_title on catalog_product_option_type_value.option_type_id=catalog_product_option_type_title.option_type_id where option_id='".$row_ins->option_id."'");
			while($ti=$titles->fetch_object())
			{
				$tmp=end(explode('-',$ti->title));
				if($tmp!=0)
				{
					$tmp_length=$tmp;
				}								
			}
		}
	}
	if($tmp_length!=0)
	{
		foreach($length as $l)
		{
			if(trim($l['label'])==trim($tmp_length))
			{			
				$proxy->call($sessionId,'product.update',array($row->scrap_products_sku,array('length_inwear'=>$l['value'])));
			}
		}
	}
}

/*  
  select * from catalog_product_option where product_id='712';
 
  select title from catalog_product_option_type_value inner join catalog_product_option_type_title 
  on catalog_product_option_type_value.option_type_id=catalog_product_option_type_title.option_type_id 
  where option_id='427';  
  */ 
?>
