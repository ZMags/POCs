/*
    THAT IS WHRE THE POC_CORE is.
*/


//var CORE_SOURCE_zmag = "http://ps.zmags.com/commerce/"
var CORE_SOURCE_zmag = "http://ps.zmags.com/commerce/"




///////EDIT BELOW/////////////////////////////////////////////////////

//for zmag load

var commerceProjectName_zmag = 'POC_Coalesee010711PO';
var zmagsDebug = false;
var zmagsGAnalyticsEnabled = false;
//var zmagsAnalyticsEnabled = false;

//full path to client's add to cart script (including parameters if using GET) 
//EXAMPLE: addToCartURL = http://dev.kirnazabete.com/checkout/cart/add/uenc/aHR0cDovL2Rldi5raXJuYXphYmV0ZS5jb20vY2xvdGhlcy9jb2F0cy9zcGFydGEtY29hdA,,/product/12742/
var addToCartURL_zmag = 'http://store.coalesse.com/products/cart/';

var getProdDetailPostVars_zmag = ["programproductid"];

// location of the html for the fancybox
var getProdDetailBaseURL_zmag = "http://ps.zmags.com/poc/deploy/coalesse/010711/productDetail.php";
var addToCartButtonID_zmag = 'addToCartBtn';
var addToCartConfirmHTML_zmag = '<div align="center" id="cartConfirm"><br><button class="checkout" onclick="zmags_redirectToCart(\'http://store.coalesse.com/products/cart/\')"></button><button class="continue" onclick="closeProductWindow_zmag()"></button></div>';

var conType_zmag = "GET";


/*=================================================================================
    var includePathZmags  = The path to the deploy folder holds client assets etc
	This is just a convinience variable.

*/
var includePathZmags ='http://ps.zmags.com/poc/deploy/coalesse/010711/';

//=================================================================================


/*
    Arrays with Additional Client assets src = ex:includePathZmags + jsIncludeFiles[i];
	CORE_SOURCE_zmag + "corepoc/resources/lib/" to get common libraries
	
	Use includePathZmags+"asset/foo.css" to get CLIENT specific items
*/
/*var jsIncludeFiles_zmag =    ["js/coalesse.js","js/cloud-zoom.1.0.2.js","js/jquery.dd.js"
          
            ];
var cssIncludeFiles_zmag =   ["css/dpw.css","css/cloud-zoom.css","js/dd.css"
         
            ];*/

var jsIncludeFiles_zmag =    [  
                              includePathZmags+"js/Zmox/jquery.zmox-1.js",
                              includePathZmags+"js/coalesse.js",
                              includePathZmags+"js/cloud-zoom.1.0.2.js",
                              includePathZmags+"js/jquery.dd.js",
                              
          
            ];
var cssIncludeFiles_zmag =  [includePathZmags+"css/dpw.css",
                             includePathZmags+"css/cloud-zoom.css",
                             includePathZmags+"js/dd.css",
                             includePathZmags+"js/Zmox/jquery.zmox-1.css"
         
            ];



/*
========================
DO NOT CHANGE ANYTHING UNDER THIS LINE!
========================
*/
/* 
//--- GET zmagsCommerce.js //
var commercejs_zmag = document.createElement("script");

// currently pointed to the dev environment maybe it should be a var?///
commercejs_zmag.setAttribute("src", CORE_SOURCE_zmag +"corecommerce/resources/zmagsCommerce1.2.js");
commercejs_zmag.setAttribute("type", "text/javascript");
document.getElementsByTagName('head')[0].appendChild(commercejs_zmag);*/
 
//--- GET zmagsCommerce.js //
var commercejs_zmag = document.createElement("script");

// currently pointed to the dev environment maybe it should be a var?///
commercejs_zmag.setAttribute("src", CORE_SOURCE_zmag +"corecommerce/resources/zmagsCommerce1.1.4.js");
commercejs_zmag.setAttribute("type", "text/javascript");
document.getElementsByTagName('head')[0].appendChild(commercejs_zmag);


