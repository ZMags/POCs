<?php
$mysqli = new mysqli("localhost", "magento", "magento", "magento");

$mysqli->query("DROP TABLE IF EXISTS `scrap_categories`");
$mysqli->query("DROP TABLE IF EXISTS `scrap_subcategories`");
$mysqli->query("DROP TABLE IF EXISTS `scrap_products`");

$mysqli->query("CREATE TABLE IF NOT EXISTS `scrap_categories` (
  `scrap_categories_id` varchar(50) NOT NULL,
  `scrap_categories_name` varchar(255) NOT NULL,
  `scrap_categories_sku` varchar(255) NOT NULL,
  PRIMARY KEY (`scrap_categories_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8");

$mysqli->query("CREATE TABLE IF NOT EXISTS `scrap_products` (
  `scrap_products_id` varchar(50) NOT NULL,
  `scrap_subcategories_id` varchar(50) NOT NULL,
  `scrap_products_name` text NOT NULL,
  `scrap_products_price` varchar(50) NOT NULL,
  `scrap_products_description` text NOT NULL,
  `scrap_products_short_description` text NOT NULL,
  `scrap_products_image_main_large` text NOT NULL,
  `scrap_products_url` text,
  `scrap_products_color` text NOT NULL,
  `scrap_products_size` text NOT NULL,
  `scrap_products_sku` varchar(255) NOT NULL,
  PRIMARY KEY (`scrap_products_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8");

$mysqli->query("CREATE TABLE IF NOT EXISTS `scrap_subcategories` (
  `scrap_subcategories_id` varchar(50) NOT NULL,
  `scrap_subcategories_name` varchar(255) NOT NULL,
  `scrap_categories_id` varchar(50) NOT NULL,
  `scrap_subcategories_sku` varchar(255) NOT NULL,
  PRIMARY KEY (`scrap_subcategories_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8");

$mysqli->close();
?> 
