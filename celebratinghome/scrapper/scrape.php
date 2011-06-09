<?php

require_once('classes/CelebratingHome.php');
require_once('classes/MagentoBridge.php');

/*
 * Executes the functions to retrieve products of CelebratingHome site
 */

$base_url = "http://www.celebratinghome.com/";

$chome = new CelebratingHome();
$magento = new MagentoBridge();

$homepage = $chome->get_page($base_url . 'productcategorylist.ashx');
foreach($homepage->find(".menuleft li a") as $key => $item)
{
    if($key == 0)
    {
        $category_page = $chome->get_page($base_url . $item->href);
        foreach($category_page->find(".menuleft li ul li a") as $key => $item)
        {
            if($key >= 0 && $key <= 4)
            {
                $magento->create_category($item->plaintext);
                //print_r($item->plaintext);
                
            }
        }
        //print_r($item->href);
        
    }
}
 
