/*
    DEV ONLY!!!!!!!!!!!!!!!!!!!!!!
    THAT IS WHRE THE POC_CORE is.
*/

//var CORE_SOURCE = "http://localhost:8888/Zmags/POCs/";
var CORE_SOURCE_zmag = "http://50.16.105.65/poc/"


///////EDIT BELOW/////////////////////////////////////////////////////

//for zmag load
var zmagPubID = '853eee6b';
var zmagParentElement = 'myViewerContent';
var pocProjectName_zmag = 'MyProject';


//full path to client's add to cart script (including parameters if using GET) 
//EXAMPLE: addToCartURL = http://dev.kirnazabete.com/checkout/cart/add/uenc/aHR0cDovL2Rldi5raXJuYXphYmV0ZS5jb20vY2xvdGhlcy9jb2F0cy9zcGFydGEtY29hdA,,/product/12742/
var addToCartURL_zmag = 'http://dev.kirnazabete.com/checkout/cart/add/uenc/aHR0cDovL2Rldi5raXJuYXphYmV0ZS5jb20vY2xvdGhlcy9jb2F0cy9zcGFydGEtY29hdA,,/product/12742/';

/*
    Needed if ajax call requires POST call instead of GET, format as if were GET parameters  

    var postDataString = 'product=12742&related_product=&super_attribute%5B583%5D=553&qty='; 
    var prodDetailHTML = '<center><div id="prodWindow"><h1>Product X Details</h1><br><button id="addToCartBtn">Add to Cart</div></center>';
    var addToCartButtonID = 'addToCartBtn';
    var addToCartConfirmHTML = '<div>CONFIRMATION MESSAGE HERE</div>';
*/

// postDataString is  not nessasary for POC.
var postDataString_zmag = 'product=12742&related_product=&super_attribute%5B583%5D=553&qty='; 
var prodDetailHTML_zmag = '<center><div id="prodWindow"><h1>Product X Details</h1><br><a href ="#" id="addToCartBtn">Add to Cart</a></div></center>';
var addToCartButtonID_zmag = 'addToCartBtn';
var addToCartConfirmHTML_zmag = '<div>CONFIRMATION MESSAGE HERE</div>';


/*=================================================================================
    var includePathZmags  = The path to the deploy folder holds client assets etc
	This is just a convinience variable.

*/
var includePathZmags = CORE_SOURCE_zmag + 'deploy/MYCLIENT/';

//=================================================================================


/*
    Arrays with Additional Client assets src = ex:includePathZmags + jsIncludeFiles[i];
	CORE_SOURCE_zmag + "libs/" to get common libraries
	
	Use includePathZmags+"asset/foo.css" to get CLIENT specific items
*/
var jsIncludeFiles_zmag =    [
             CORE_SOURCE_zmag + "libs/fancybox/jquery.fancybox-1.3.4.js"
            ];
var cssIncludeFiles_zmag =   [
         	CORE_SOURCE_zmag + "libs/fancybox/jquery.fancybox-1.3.4.css"
            ];

/*
========================
DO NOT CHANGE ANYTHING UNDER THIS LINE!
========================
*/
 
//--- GET poc.js //
var pocjs_zmag = document.createElement("script");

// currently pointed to the dev environment maybe it should be a var?///
pocjs_zmag.setAttribute("src", CORE_SOURCE_zmag +"corepoc/resources/poc.js");
pocjs_zmag.setAttribute("type", "text/javascript");
document.getElementsByTagName('head')[0].appendChild(pocjs_zmag);



