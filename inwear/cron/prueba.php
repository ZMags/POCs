<?php
set_time_limit(5400);

//echo phpinfo();
//$mysqli = new mysqli("localhost", "alex", "Zmagspass", "alex");
try{
$proxy = new SoapClient('http://ps.zmags.com/poc/inwear/magento/api/soap/?wsdl');
$sessionId = $proxy->login('alvarov', '13012008');

//$cat_id=$proxy->call($sessionId,'category.create',array(2,array('name'=>'pruebaxD','available_sort_by'=>'price','default_sort_by'=>'price','include_in_menu'=>1,'is_active'=>1,'display_mode'=> 'PAGE')));
//$allCategories = $proxy->call($sessionId, 'category.tree');
$cat = $proxy->call($sessionId, 'category.info',3);
echo '<pre>';
print_r($cat);
echo '</pre>';
}
catch(Exception $e)
{

echo '<pre>';
print_r($e);
echo '</pre>';
}
/*try
{
	$sessionId = $proxy->login('alvarov', '13012008');
	
	echo '<pre>';
	print_r($proxy->call($sessionId,'product.info',array('1')));
	echo '</pre>';
}
catch(Exception $e)
{
	echo '<pre>';
	print_r($e);
	echo '</pre>';
}*/


//$sessionId = $proxy->login('alvaro.v', '13012008');
/*
echo '<pre>';
print_r($proxy->call($sessionId,'product.info',array('1')));
echo '</pre>';*/
?>