//for zmag load
var zmagPubID = '';
var zmagParentElement = '';
var pocProjectName = '';


//full path to client's add to cart script (including parameters if using GET) 
//EXAMPLE: addToCartURL = http://dev.kirnazabete.com/checkout/cart/add/uenc/aHR0cDovL2Rldi5raXJuYXphYmV0ZS5jb20vY2xvdGhlcy9jb2F0cy9zcGFydGEtY29hdA,,/product/12742/
var addToCartURL = '';

/*
  	Needed if ajax call requires POST call instead of GET, format as if were GET parameters  

	var postDataString = 'product=12742&related_product=&super_attribute%5B583%5D=553&qty='; 
	var prodDetailHTML = '<center><div id="prodWindow"><h1>Product X Details</h1><br><button id="addToCartBtn">Add to Cart</div></center>';
	var addToCartButtonID = 'addToCartBtn';
	var addToCartConfirmHTML = '<div>CONFIRMATION MESSAGE HERE</div>';
*/

var postDataString = ''; 
var prodDetailHTML = '';
var addToCartButtonID = '';
var addToCartConfirmHTML = '';


/*
	var includePathZmags  = The path to the deploy folder.
*/
var includePathZmags = 'http://50.16.105.65/poc/deploy/AngelCo/';

/*
	Additional Client assets. 
*/
var jsIncludeFiles =[
			"jquery.fancybox-1.3.4.js"];
var cssIncludeFiles = [
			"jquery.fancybox-1.3.4.css"
			];
			
			
//--- GET poj.js //
var pocjs = document.createElement("script");
pocsjs.setAttribute("src", "http://50.16.105.65/poc/resources/poc.js");
pocsjs.setAttribute("type", "text/javascript");
document.getElementsByTagName('head')[0].appendChild(pocjs);




