
var CORE_SOURCE_zmag = "http://ps.zmags.com/commerce/"

///////EDIT BELOW/////////////////////////////////////////////////////

//for zmag load
var commerceProjectName_zmag = 'J. Crew';
var language="";

//full path to client's add to cart script (including parameters if using GET) 
//EXAMPLE: addToCartURL = http://dev.kirnazabete.com/checkout/cart/add/uenc/aHR0cDovL2Rldi5raXJuYXphYmV0ZS5jb20vY2xvdGhlcy9jb2F0cy9zcGFydGEtY29hdA,,/product/12742/
var addToCartURL_zmag = '';

//var getProdDetailBaseURL_zmag = 'http://50.16.105.65/tests/commerceTest/myProduct.html'; 
var getProdDetailBaseURL_zmag = 'http://ps.zmags.com/poc/deploy/jcrew/260911/product.php';

//specify whether or not to make call to product.php with get or post
var conType_zmag = "GET";
//vars embedded in zmag and needed in post request to get product details
var getProdDetailPostVars_zmag = ["programproductid"];

//var addToCartConfirmHTML_zmag = '<div class="sucess_add">You\'ve added the item to the cart.<br><button onclick="window.location=\'http://www.celebratinghome.com/PWPShowShoppingCart.ashx\'">Go to Checkout</button><button onclick="jQuery.fancybox.close()">Continue Shopping</button></div>';
var addToCartConfirmHTML_zmag = '<div class="sucess_add">Du har lagt dette elementet til handlevognen.<br><button onclick="zmags_redirectToCart(\'http://www.sportmann.no/CheckOut.aspx\')">G&aring; til Kasse</button><button onclick=\'$.fancybox.close();\'">Fortsett &aring; handle</button></div>';


/*
    var includePathZmags  = The path to the deploy folder holds client assets etc.
*/
var includePathZmags = 'http://ps.zmags.com/poc/deploy/jcrew/260911/';

/*
    Arrays with Additional Client assets src = ex:includePathZmags + jsIncludeFiles[i];
*/


                              
var jsIncludeFiles_zmag =    [  CORE_SOURCE_zmag +"corecommerce/resources/lib/fancybox/jquery.fancybox-1.3.4.js",
                                includePathZmags+"js/full1.js",
                                includePathZmags+"js/cloud-zoom.1.0.2.js"

                                ];
var cssIncludeFiles_zmag =  [   includePathZmags+"js/full-screen.css",
                                includePathZmags+"css/dpw.css",
                                includePathZmags+"css/cloud-zoom.css",
                                includePathZmags+"js/jquery.fancybox-1.3.4.css"
                            ];

var zmagsDebug = false;
var zmagsGAnalyticsEnabled = false;

// BEGIN VIEWER =========================//
var viewer  = new ZMAGS.ui.Viewer();
// create a brand new viewer cause the old one is bunk.
viewer.setPublicationID("16a9bb69");
viewer.setParentElementID("myViewerContent");
viewer.addEventListener(ZMAGS.ui.Viewer.CUSTOM_LINK_CLICK, "CustomLinkHandler", self);
viewer.setWindowMode("opaque");
viewer.show();


// check for zmagsCommerceLib

checkForZmags();

function checkForZmags(){

    if(typeof zmagCPO){
       if(window.$){
           doCustomInterface();

       }else{

           setTimeout('checkForZmags()',50);
       }
    }else{
        setTimeout('checkForZmags()',50);
    }

}

function doCustomInterface(){
	// create a new container for our viewer and all its ui
	var new_zmags_container = document.createElement("div");
	new_zmags_container.id ="zmags_viewer_wrapper";

	// append it to the clients site existing div
	$("#zmag_viewer_div").append(new_zmags_container);


	var zmags_viewer_css = {
	    'background-color' : '#fff',
	    'position':'relative',
	    'width':'900px',
	    'height':'600px',
	    'margin': "0 auto"
	}



    $("#zmags_viewer_wrapper").css(zmags_viewer_css);
	// append the acctual element the that the viewer will go in.
	var zmags_viewer_container = document.createElement("div");
	zmags_viewer_container.id ="zmags_viewer_container";

	// make sure you give the viewer container a specific height width }else{ it breaks in firefox :X}\
	// in this case 100% relative to the parent makes it work
	var zmags_viewer_container_css ={
	    'width': '1000px',
	    'height': '100%'

	}

	$(zmags_viewer_container).css(zmags_viewer_container_css);

	// add the container to the parent
	$("#zmags_viewer_wrapper").append(zmags_viewer_container);


}

function CustomLinkHandler2(event) {
      CommerceProPS_zmag.launchProdDetailBox(event);
}




/*
========================
DO NOT CHANGE ANYTHING UNDER THIS LINE!
========================
*/

//--- GET zmagsCommerce.js //
var commercejs_zmag = document.createElement("script");
commercejs_zmag.setAttribute("src", CORE_SOURCE_zmag +"corecommerce/resources/zmagsCommerce1.1.3.min.js");
commercejs_zmag.setAttribute("type", "text/javascript");
document.getElementsByTagName('head')[0].appendChild(commercejs_zmag);


