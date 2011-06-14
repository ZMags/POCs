<?php

set_time_limit(7200);
require_once("config/config.php");

/*
 * MagentoBridge class
 *
 * Implements the functions necessary to keep the products and 
 * their attributes in the magento database through web service 
 * 
 */

 class MagentoBridge
 {
    var $proxy = '';
    var $soap_session = '';
    var $store_view = '';
    
    public function __construct()
    {
        $this->connect();
        $this->store_view = MAGENTO_STORE_VIEW;
    }
    
    /*
     * Establishes a connection to magento through SOAP
     */
    public function connect()
    {
        $this->proxy = new SoapClient(MAGENTO_SOAP_URL);
        $this->soap_session = $this->proxy->login(MAGENTO_SOAP_USER, MAGENTO_SOAP_PASSWORD);
    }
    
    /*
     * Get the current store
     */
    public function getCurrentStore()
    {
        $store = $this->proxy->call(
            $this->soap_session,
            'catalog_category_attribute.currentStore',
            array(
                $this->store_view
            )
        );
        return $store;
    }
    
    /*
     * 
     */
    public function getRootCategory($store_view = "")
    {
        $store_view_current = $this->store_view;
        if($store_view)
             $this->store_view = $store_view;
             
        $categories_store = $this->getAllCategories();
        
        $this->store_view = $store_view_current;
        return $categories_store['category_id'];
    }
    
    
    /*
     * Get all categories
     */
    public function getAllCategories($parent_category = "")
    {
        if(!$parent_category)
            $all_categories = $this->proxy->call(
                $this->soap_session, 
                'catalog_category.tree',
                    array(
                        null,
                        $this->store_view
                )
            );
        else
            $all_categories = $this->proxy->call(
                $this->soap_session, 
                'catalog_category.level', 
                    array(
                        null, 
                        $this->store_view, 
                        $parent_category
                    )
                );
        
        return $all_categories; 
    }
    
    /*
     * Get the tree of categories
     */
    public function getCategoriesTree()
    {
        $tree = $this->proxy->call(
            $this->soap_session,
            'catalog_category.tree',
            array(
                null,
                $this->store_view
            )
        );
        return $tree;
    }
    
    /*
     * Get category info
     */
    public function getCategoryInfo($category_id)
    {
        $info = $this->proxy->call(
            $this->soap_session,
            'catalog_category.info',
            array(
                $category_id
            )
        );
        return $info;
    }
    
    /*
     * Create one category
     */
    public function addOneCategory($parent_id, $category_name)
    {
        $category_id = $this->proxy->call(
            $this->soap_session,
            'catalog_category.create',
            array(
                $parent_id,
                array(
                    'name'=>trim($category_name),
                    'available_sort_by'=>'price',
                    'default_sort_by'=>'price',
                    'include_in_menu'=>1,
                    'is_active'=>1,
                    'display_mode'=> 'PRODUCTS'
                )
            )
        );
        return $category_id;
    }
    
    /*
     * Create a category and his childs
     * if you send an array
     */
    public function addCategory($new_category, $id_parent)
    {
        $category_id = $this->proxy->call(
            $this->soap_session,
            'catalog_category.create',
            array(
                $id_parent,
                    array(
                        'name' => $new_category[0],
                        'available_sort_by' => $new_category[1],
                        'default_sort_by' => $new_category[2],
                        'include_in_menu' => $new_category[3],
                        'is_active' => $new_category[4],
                        'display_mode' => $new_category[5]
                    )
            )
        );
        
        if(array_key_exists('sub-categories',$new_category))
           foreach($new_category['sub-categories'] as $sub_catery)
                $this->addCategory($sub_catery, $category_id); 
        else 
            return $category_id;
    }
    
    /*
     * 
     */
    public function addSubCategories($array_categories){
        $categories = array();
        if(array_key_exists('id_category' , $array_categories))
             $id_parent = $array_categories['id_category'];
        else $id_parent = $this->id_root_category;
        
        $id_categories = array();
        if(array_key_exists('categories' , $array_categories))
            $categories = $array_categories['categories'];
        else
            $categories = $array_categories;   
        
        foreach($categories as $category){
            $id_categories[] = $this->addCategory($category, $id_parent);
        }
        return $id_categories; 
    }
    
    /*
     * Delete a category
     */
    public function deleteCategory($category_id)
    {
        return $this->proxy->call(
                    $this->soap_session,
                    'catalog_category.delete',
                    trim($category_id)  
                );
    }
    
    /*
     * Create a product
     */
    public function addProduct($category_id, $sku, $values)
    {
        $attributeSets = $this->proxy->call(
            $this->soap_session, 
            'product_attribute_set.list'
        );
        $set = current($attributeSets);
        
        $product_id = $this->proxy->call(
            $this->soap_session,
            'catalog_product.create',
            array(
                'simple',
                $set['set_id'],
                $sku,
                $values
            )
        );
        
        if($product_id)
            $this->proxy->call(
                $this->soap_session,
                'catalog_category.assignProduct',
                array(
                    trim($category_id),
                    trim($product_id)
                )
            );
        
        return $product_id;
    }
    
    public function deleteProductCategory($category_id, $product_id)
    {
        return $this->proxy->call(
            $this->soap_session,
            'catalog_category.removeProduct',
            array(
                $category_id,
                $product_id
            )
        );
    }
    
    public function deleteProduct($product_id)
    {
        return $this->proxy->call(
            $this->soap_session,
            'catalog_product.delete',
            array(
                $product_id
            )
        );
    }
    
    public function addImageProduct($product_id, $image_url, $image_name, $position = 1)
    {
        $image = array(
		    'file' => array(
		        'name' => 'file_name',
		        'content' => base64_encode(file_get_contents($image_url)),
		        'mime'    => 'image/jpeg'
		    ),
		    'label'    => $image_name,
		    'position' => $position,
		    'types'    => array('image', 'small_image', 'thumbnail'),
		    'exclude'  => 0
		);
			 
		return $this->proxy->call(
            $this->soap_session, 
            'catalog_product_attribute_media.create', 
            array(
                $product_id, 
                $image
            )
        );
    }
    
    public function getProductInfo($product_sku)
    {
        try{
            $info = $this->proxy->call(
                $this->soap_session,
                'catalog_product.info',
                array(
                    (string)$product_sku
                )
            );
            return $info;
        }
        catch(Exception $fault) 
        {
            return $fault->getMessage();
        }
    } 
    
 }