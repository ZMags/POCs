<?php

require_once('ScrapperInterface.php');

/*
 * CelebratingHome class
 *
 *
 *
 */

class CelebratingHome implements ScrapperInterface
{   
    public function __construct()
    {
        
    }
    
    public function get_page($url)
    {
        return file_get_html($url);
    } 
}