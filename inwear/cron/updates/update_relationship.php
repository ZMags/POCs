<?php
set_time_limit(5400);
$mysqli = new mysqli("localhost", "magento", "magento", "magento");

$proxy = new SoapClient('http://ps.zmags.com/poc/inwear/magento/api/soap/?wsdl');
$sessionId = $proxy->login('alvarov', '13012008');

$rsProd=$mysqli->query("select * from scrap_products where scrap_products_sku!=''");

if($rsProd->num_rows>0)
{	
	while($prod = $rsProd->fetch_object())
	{	
		
		$actual_categories=explode(',',$prod->scrap_subcategories_id);
		try
		{
			$tmp_product=$proxy->call($sessionId,'product.info',array($prod->scrap_products_sku));	
			$tmp_categories=$tmp_product['categories'];
		
		
			foreach($tmp_categories as $tmp)
			{
				$rsSub=$mysqli->query("select * from scrap_subcategories where scrap_subcategories_sku='".$tmp."'");
				if($rsSub->num_rows==1)
				{
					$rsSub=$rsSub->fetch_object();
					if(array_search($rsSub->scrap_subcategories_id,$actual_categories)===FALSE)
					{
						$proxy->call($sessionId, 'category.removeProduct', array($rsSub->scrap_subcategories_sku,$prod->scrap_products_sku));
					}	
				}						
			}
			
			foreach($actual_categories as $actual)
			{
				$rsSub_ac=$mysqli->query("select * from scrap_subcategories where scrap_subcategories_id='".$actual."'");
				if($rsSub_ac->num_rows==1)
				{
					$rsSub_ac=$rsSub_ac->fetch_object();
					if(array_search($rsSub_ac->scrap_subcategories_sku,$tmp_categories)===FALSE)
					{
						$proxy->call($sessionId, 'category.assignProduct', array($rsSub_ac->scrap_subcategories_sku,$prod->scrap_products_sku));
					}	
				}			
			}	
		}
		catch(Exception $e)
		{
			echo '_/_'.$prod->scrap_products_name.'_/_.<br />';	
		}						
	}
		
}
$mysqli->close();



