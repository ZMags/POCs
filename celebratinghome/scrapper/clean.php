<?php

require_once('classes/MagentoBridge.php');
    
/*
 * Clean the database
 */

$magento = new MagentoBridge();

$tree = $magento->getCategoriesTree();

if(count($tree['children']))
    foreach($tree['children'] as $category)
    {
        if(count($category['children']))
            foreach($category['children'] as $subcategory)
            {
                $magento->deleteCategory($subcategory['category_id']);
            }
        
        $magento->deleteCategory($category['category_id']);
    }

?>