    /*
    DEV ONLY!!!!!!!!!!!!!!!!!!!!!!
    CORE_SOURCE = "localhost/commerce/corecommerce"
    THAT IS WHRE THE COMMERCE_CORE is.
*/

//var CORE_SOURCE = "http://localhost:8888/Zmags/POCs/";
var CORE_SOURCE_zmag = "http://ps.zmags.com/commerce/"

//for use on production server!
//var CORE_SOURCE_zmag = "http://ps.zmags.com/commerce/"


///////EDIT BELOW/////////////////////////////////////////////////////

//for zmag load
var commerceProjectName_zmag = 'Celebrating Home 020711';


//full path to client's add to cart script (including parameters if using GET) 
//EXAMPLE: addToCartURL = http://dev.kirnazabete.com/checkout/cart/add/uenc/aHR0cDovL2Rldi5raXJuYXphYmV0ZS5jb20vY2xvdGhlcy9jb2F0cy9zcGFydGEtY29hdA,,/product/12742/
var addToCartURL_zmag = 'http://www.celebratinghome.com/PWPShowProduct.ashx?ProgramProductId=';

//var getProdDetailBaseURL_zmag = 'http://50.16.105.65/tests/commerceTest/myProduct.html'; 
var getProdDetailBaseURL_zmag = 'http://ps.zmags.com/commerce/deploy/celebratingHome/020711/php/dpw_theming/product.php'; 

//specify whether or not to make call to product.php with get or post
var conType_zmag = "GET";
//vars embedded in zmag and needed in post request to get product details
var getProdDetailPostVars_zmag = ["programproductid"];

//var addToCartConfirmHTML_zmag = '<div class="sucess_add">You\'ve added the item to the cart.<br><button onclick="window.location=\'http://www.celebratinghome.com/PWPShowShoppingCart.ashx\'">Go to Checkout</button><button onclick="jQuery.fancybox.close()">Continue Shopping</button></div>';
var mesage_add_eng='<h3 class="content_eng">You\'ve added the item to the cart.</h3>';
var mesage_add_esp='<h3 class="content_spanish">Ha agregado el item a la cesta.</h3>';
var button_go_esp='<span class="content_spanish">VERIFICAR CESTA</span>';
var button_go_eng='<span class="content_eng">GO TO CHECKOUT</span>';
var text_shopp_esp='<span class="content_spanish">CONTINUAR COMPRA</span>';
var text_shopp_eng='<span class="content_eng">CONTINUE SHOPPING</span>';
var addToCartConfirmHTML_zmag = '<div class="border_top"></div><div id="wrapper_info"><div id="fancy_stuffs"><div id="zmags_dpw_body" ><div id="prod_details" class = "dpw_mssg"><div id="zmags_dpw_header"></div><p id="blurb" class="content_eng">'+mesage_add_eng+''+mesage_add_esp+'<button id="checkout_btn" onclick="zmags_redirectToCart(\'http://www.celebratinghome.com/PWPShowShoppingCart.ashx\')">'+button_go_esp+''+button_go_eng+'</button><button id ="continue_btn" onclick="jQuery.fancybox.close()">'+text_shopp_esp+''+text_shopp_eng+'</button></p><div class="footer_info"></div></div><div class="content_media"></div><div style="clear:both;"></div></div><div id="zmags_dpw_footer"></div></div></div><div class="border_bottom"></div>';


/*
    var includePathZmags  = The path to the deploy folder holds client assets etc.
*/
var includePathZmags = CORE_SOURCE_zmag + 'deploy/celebratingHome/020711/';

/*
    Arrays with Additional Client assets src = ex:includePathZmags + jsIncludeFiles[i];
*/

var jsIncludeFiles_zmag =    [includePathZmags +"js/cloud-zoom.1.0.2.js",includePathZmags +"js/celebrating-home.js", includePathZmags + "js/toogle_hide.js"];
var cssIncludeFiles_zmag =   [includePathZmags +"css/zmags_dpw_styles.css", includePathZmags +"css/fbCSS.css",includePathZmags +"css/cloud-zoom.css", includePathZmags +"css/reset.css"];

var zmagsDebug =false;
var zmagsAnalyticsEnabled = false;

var catalog_spanish="947fc87c";
var catalog_spanish_facebook = "b05dd46e";
var catalog_english="957b89f8";
/*

========================
DO NOT CHANGE ANYTHING UNDER THIS LINE!
========================
*/
 
//--- GET zmagsCommerce.js //
var commercejs_zmag = document.createElement("script");

// currently pointed to the dev environment maybe it should be a var?///
commercejs_zmag.setAttribute("src", CORE_SOURCE_zmag +"corecommerce/resources/zmagsCommerce1.1.js");
commercejs_zmag.setAttribute("type", "text/javascript");
document.getElementsByTagName('head')[0].appendChild(commercejs_zmag);

var addthis_widget = document.createElement("script");
// currently pointed to the dev environment maybe it should be a var?///
addthis_widget.setAttribute("src","http://s7.addthis.com/js/250/addthis_widget.js#pubid=xa-4dfb80d06e07bd6f");
addthis_widget.setAttribute("type", "text/javascript");
document.getElementsByTagName('head')[0].appendChild(addthis_widget);

var facebook = document.createElement("script");
// currently pointed to the dev environment maybe it should be a var?///
facebook.setAttribute("src","http://connect.facebook.net/en_US/all.js");
facebook.setAttribute("type", "text/javascript");
document.getElementsByTagName('head')[0].appendChild(facebook);





