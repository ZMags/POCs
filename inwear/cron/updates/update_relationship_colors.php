<?php
set_time_limit(5400);
$mysqli = new mysqli("localhost", "magento", "magento", "magento");

$proxy = new SoapClient('http://ps.zmags.com/poc/inwear/magento/api/soap/?wsdl');
$sessionId = $proxy->login('alvarov', '13012008');

$products=$mysqli->query("select * from scrap_products where scrap_products_sku!=''");

$attribute_options = $proxy->call($sessionId, 'product_attribute.options', array('attribute_id'=>'color_inwear'));
$attribute_options_size_letter = $proxy->call($sessionId, 'product_attribute.options', array('attribute_id'=>'size_inwear_xxl'));
$attribute_options_size_num = $proxy->call($sessionId, 'product_attribute.options', array('attribute_id'=>'size_inwear_44'));


if($products->num_rows>0)
{
	while($row=$products->fetch_object())
	{
		$colors=explode(',',$row->scrap_products_color);
		$color_inwear='';
		foreach($colors as $color)
		{
			foreach($attribute_options as $opt)
			{
				if(trim($opt['label'])==trim($color))
				{
					if($color_inwear!=''){$opt['value']=','.$opt['value'];}
					$color_inwear.=$opt['value'];
					break;
				}
			}
		}
		
		$sizes=explode(',',$row->scrap_products_size);
		$size_inwear_num='';
		$size_inwear_letter='';
		$size_inwear='';
		foreach($sizes as $size)
		{
			$attr=is_numeric($size)?$attribute_options_size_num:$attribute_options_size_letter;
			foreach($attr as $at)
			{
				if(trim($at['label'])==trim($size))
				{
					if($size_inwear!=''){$at['value']=','.$at['value'];}
					$size_inwear.=$at['value'];
					if(is_numeric($size)){$size_inwear_num=$size_inwear;}else{$size_inwear_letter=$size_inwear;}					
					break;
				}
			}
		}
		$array_update=array('color_inwear'=>$color_inwear);
		$array_update=array_merge($array_update,array('size_inwear_44'=>$size_inwear_num));
		$array_update=array_merge($array_update,array('size_inwear_xxl'=>$size_inwear_letter));
		$proxy->call($sessionId, 'product.update',array($row->scrap_products_sku,$array_update));
	}
}
$mysqli->close();



