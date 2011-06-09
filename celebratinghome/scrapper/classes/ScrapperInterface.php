<?php

require_once("lib/simple_html_dom.php");

/*
 * Scrapper interface
 *
 * Contains the basic functions of travel and recovery must be 
 * implemented by subclasses
 *
 */

interface ScrapperInterface
{
    public function get_page($url);
    
    //public function get_node();
    
    //public function get_childs();
}