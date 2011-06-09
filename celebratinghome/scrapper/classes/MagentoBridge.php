<?php

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
    
    public function __construct()
    {
        $this->connect();
    }
    
    /*
     * Establishes a connection to magento through SOAP
     */
    public function connect()
    {
        //$proxy = new SoapClient('http://ps.zmags.com/poc/inwear/magento/api/soap/?wsdl');
        $this->proxy = new SoapClient(MAGENTO_SOAP_URL);
        $this->soap_session = $this->proxy->login(MAGENTO_SOAP_USER, MAGENTO_SOAP_PASSWORD);
    }
    
    /*
     * Create a category
     */
    public function create_category($category_name)
    {
        $this->proxy->call(
            $this->soap_session,
            'category.create',
            array(
                2,
                array(
                    'name'=>$category_name,
                    'available_sort_by'=>'price',
                    'default_sort_by'=>'price',
                    'include_in_menu'=>1,
                    'is_active'=>1,
                    'display_mode'=> 'PAGE'
                )
            )
        );
    }
 }