/*
    THAT IS WHRE THE POC_CORE is.
*/


var CORE_SOURCE_zmag = "http://ps.zmags.com/commerce/"
//var CORE_SOURCE_zmag = "http://localhost:8888/Zmags/Production/CommercePro/"




///////EDIT BELOW/////////////////////////////////////////////////////

//for zmag load

var commerceProjectName_zmag = 'POC_Kubata010811';
var zmagsDebug = false;


//full path to client's add to cart script (including parameters if using GET) 
//EXAMPLE: addToCartURL = http://dev.kirnazabete.com/checkout/cart/add/uenc/aHR0cDovL2Rldi5raXJuYXphYmV0ZS5jb20vY2xvdGhlcy9jb2F0cy9zcGFydGEtY29hdA,,/product/12742/
var addToCartURL_zmag = '';

var getProdDetailPostVars_zmag = ["programproductid"];

// location of the html for the fancybox
var getProdDetailBaseURL_zmag = "http://localhost:8888/Zmags/Production/POCs/deploy/kubata/010811/productDetail.php";
var addToCartButtonID_zmag = 'addToCartBtn';
var addToCartConfirmHTML_zmag = '<div align="center" id="cartConfirm"></div>';

var conType_zmag = "GET";
var zmagsAnalyticsEnabled = false;


/*=================================================================================
    var includePathZmags  = The path to the deploy folder holds client assets etc
	This is just a convinience variable.

*/
//var includePathZmags ='http://psdev.zmags.com/poc/deploy/kubata/010711/';
var includePathZmags ='http://localhost:8888/Zmags/Production/POCs/deploy/kubata/010811/';
//=================================================================================


/*
    Arrays with Additional Client assets src = ex:includePathZmags + jsIncludeFiles[i];
	CORE_SOURCE_zmag + "corepoc/resources/lib/" to get common libraries
	
	Use includePathZmags+"asset/foo.css" to get CLIENT specific items
*/
var jsIncludeFiles_zmag =    [
          
            ];
var cssIncludeFiles_zmag =   [includePathZmags+"css/dpw.css"
         
            ];

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



