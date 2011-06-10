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
$root_category = $magento->getCategoriesTree();

foreach($homepage->find(".menuleft li a") as $key => $item)
{
    if($key == 0) //First main category
    {
        $main_category = $magento->addOneCategory($root_category['category_id'], $item->plaintext);
        $category_page = $chome->get_page($base_url . $item->href);
        foreach($category_page->find(".menuleft li ul li a") as $key => $item)
        {
            if($key == 0) //First sub category
            {
                $sub_category = $magento->addOneCategory($main_category, $item->plaintext);
                $subcategory_page = $chome->get_page($base_url . $item->href);
                foreach($subcategory_page->find("#ctl00_V4ContentPlaceHolder_PWPShowCategoryProduct1_dl_ProductList tr") as $key => $tr)
                {
                    //if($key == 0) //First row of products
                    //{
                        foreach($tr->find("td") as $key => $td)
                        {
                            //if($key == 0) //First product of row
                            //{
                                foreach($td->find("table tr") as $key => $tr)
                                {
                                    if($key == 0)
                                    {
                                        foreach($tr->find("td a") as $key => $product_link)
                                        {
                                            if($key == 0) // Has the link of product, dont delete
                                            {
                                                $product_page = $chome->get_page($base_url . $product_link->href);
                                                
                                                $sku = $product_page->find("#ctl00_V4ContentPlaceHolder_PWPProductDetail1_lbl_PartNumber", 0)->plaintext;
                                                $values = array();
                                                $values['name'] = $product_page->find("#ctl00_V4ContentPlaceHolder_PWPProductDetail1_lbl_ProductName", 0)->plaintext;
                                                $values['description'] = $product_page->find("#ctl00_V4ContentPlaceHolder_PWPProductDetail1_lbl_LongDesc", 0)->plaintext;
                                                $values['short_description'] = $product_page->find("#ctl00_V4ContentPlaceHolder_PWPProductDetail1_lbl_LongDesc", 0)->plaintext;
                                                $values['price'] = trim(str_replace("$", "", $product_page->find("#ctl00_V4ContentPlaceHolder_PWPProductDetail1_lbl_Price", 0)->plaintext));
                                                $values['status'] = 1;
                                                $values['weight'] = 0;
                                                $values['tax_class_id'] = 'tax_class_id';
                                                $values['websites'] = array('1');
                                                
                                                $product_id = $magento->addProduct($sub_category, $sku, $values);
                                                
                                                $orig_image = $product_page->find("#ctl00_V4ContentPlaceHolder_PWPProductDetail1_img_LargeImg", 0)->src;
                                                $charpos = strpos($orig_image, "?");
                                                if($charpos)
                                                {
                                                    $orig_image = substr($orig_image, 0, $charpos);
                                                    $orig_image = str_replace("Normal", "Large", $orig_image);
                                                    $orig_image = str_replace("_250", "_500", $orig_image);
                                                }
                                                    
                                                $magento->addImageProduct(
                                                    $product_id, 
                                                    "http:" . $orig_image,
                                                    end(explode("/", $orig_image))
                                                );
                                            }
                                        }
                                    }
                                }
                            //}
                        }
                    //}
                }
            }                
        }
    }
}
