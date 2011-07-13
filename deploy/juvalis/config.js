/*
    THAT IS WHRE THE POC_CORE is.
*/


//var CORE_SOURCE_zmag = "http://ps.zmags.com/poc/";

var CORE_SOURCE_zmag = "http://localhost:8888/Zmags/Development/POCs/";


///////EDIT BELOW/////////////////////////////////////////////////////

//for zmag load
var zmagPubID = '853eee6b';
var zmagParentElement = 'myViewerContent';
var pocProjectName_zmag = 'JuvalisPOC';
var zmagsDebug = false;


//full path to client's add to cart script (including parameters if using GET) 
//EXAMPLE: addToCartURL = http://dev.kirnazabete.com/checkout/cart/add/uenc/aHR0cDovL2Rldi5raXJuYXphYmV0ZS5jb20vY2xvdGhlcy9jb2F0cy9zcGFydGEtY29hdA,,/product/12742/
var addToCartURL_zmag = '';

var postDataString_zmag ="";

// location of the html for the fancybox
var prodDetailHTML_zmag = "http://localhost:8888/Zmags/Development/POCs/deploy/juvalis/productDetail.html";
var addToCartButtonID_zmag = 'addToCartBtn';
var addToCartConfirmHTML_zmag = '<div>CONFIRMATION MESSAGE HERE</div>';


/*=================================================================================
    var includePathZmags  = The path to the deploy folder holds client assets etc
	This is just a convinience variable.

*/
var includePathZmags = CORE_SOURCE_zmag + 'deploy/juvalis/';

//=================================================================================


/*
    Arrays with Additional Client assets src = ex:includePathZmags + jsIncludeFiles[i];
	CORE_SOURCE_zmag + "corepoc/resources/lib/" to get common libraries
	
	Use includePathZmags+"asset/foo.css" to get CLIENT specific items
*/
var jsIncludeFiles_zmag =    [includePathZmags+"js/juvalis.js"
          
            ];
var cssIncludeFiles_zmag =   ["http://www.juvalis.de/cybershop.css"
         
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



