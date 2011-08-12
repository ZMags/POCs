//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

var zmagCPO;

initCommerceAssets_zmag(jsIncludeFiles_zmag, cssIncludeFiles_zmag);

function initCommerceAssets_zmag( jsFilesZmags, cssFilesZmags ){
	
	//load css
	for (var i=0; i < cssFilesZmags.length; i++) {
		var loadpath = cssFilesZmags[i];

		var cssnode = document.createElement('link');
		cssnode.setAttribute("rel","stylesheet");
		cssnode.setAttribute("type","text/css");
		cssnode.setAttribute("href",loadpath);
		document.getElementsByTagName('head')[0].appendChild(cssnode);
		
	};
	

	//=================================================================================
	/*
		LOAD INCLUDED FILES - Declared in config.js
		EX: 
		var jsIncludeFiles_zmag =    [
            	"/path/to/my/file.js"
            ];
		var cssIncludeFiles_zmag =   [
            "/path/to/my/file.css"
            ];
	*/
	//console.log(jsFilesZmags);	

	for (var i=0; i < jsFilesZmags.length; i++) {
		var jsloadpath = jsFilesZmags[i];
		
		//attempt to load include files, on success increment file to be loaded
		jQuery.getScript(jsloadpath, function(){});
	}
	
	//=================================================================================

	//load fancybox js and css
	jQuery.getScript(CORE_SOURCE_zmag + "corepoc/resources/lib/fancybox/jquery.fancybox-1.3.4.js", function(){});
	var cssnode = document.createElement('link');
	cssnode.setAttribute("rel","stylesheet");
	cssnode.setAttribute("type","text/css");
	cssnode.setAttribute("href", CORE_SOURCE_zmag + "corepoc/resources/lib/fancybox/jquery.fancybox-1.3.4.css");
	document.getElementsByTagName('head')[0].appendChild(cssnode);

	//check browser agent, include flXHR if needed..
	if (zMagNeedflXHR()){
		var js = document.createElement("script"); 
		js.setAttribute("src",CORE_SOURCE_zmag +  "corecommerce/resources/lib/flxhr/flXHR.js"); 
		js.setAttribute("type","text/javascript");  
		document.getElementsByTagName('head')[0].appendChild(js);	
	}
	

	initCommerceObject_zmag();

}


//initialize CommerceProPS object===========================================================

function initCommerceObject_zmag(){
	
	zmagCPO = new CommerceProPS_zmag(pocProjectName_zmag);
	zmagCPO.addToCartURL = addToCartURL_zmag;
	zmagCPO.productDetailHTML = prodDetailHTML_zmag;
	zmagCPO.addToCartConfirmHTML = addToCartConfirmHTML_zmag;
	zmagCPO.postData = postDataString_zmag;
	zmagCPO.addToCartID = addToCartButtonID_zmag;
	

}				

function CommerceProPS_zmag(project_name){

	this.projectName = project_name;
	// create logger and pass it the project_name
	this.logger = new POCLogger(project_name);

	this.addToCartURL = "";
	
	// this is the location of the html
	
	this.productDetailHTML = "";
	this.addToCartConfirmHTML = "";
	this.viewCartURL = "";
	this.postData = "";
	this.addToCartID = "";
	
}



CommerceProPS_zmag.prototype.launchProdDetailBox  = function (event) {
    
	var self = this;
	var url = self.productDetailHTML;
	var queryString = "";
	var conType_zmag = "GET";

	var currentPage = document.location.href;
	currentPage = escape(currentPage);

	queryString += '&refer=' + currentPage;
	
	if (zMagNeedflXHR()){	
		var ieAjax = new flensed.flXHR({noCacheHeader:false});
		ieAjax.onerror = function ( err ){
			//console.log("error in flxhr");
		};
		ieAjax.onreadystatechange = function(loadObj){
			var html = loadObj.responseText;
			if(loadObj.readyState == 4){
				//console.log(html);
				jQuery.fancybox({content:html}); 
			}
			if (zmagsDebug){
				self.logger.log("AJAX ERROR", (loadObj.responseText + loadObj.readyState));
			}
		};
		ieAjax.open(conType_zmag, url);
		ieAjax.send(queryString);
	} else if ((jQuery.browser.msie && jQuery.browser.version >= 8 && window.XDomainRequest)) { //else is ie8
		var result = "";
		var xdr = new XDomainRequest();
		if(conType_zmag == 'get' || conType_zmag == 'GET'){
			url = url + '?' +  queryString;
		}
		xdr.open(conType_zmag, url);
		xdr.onload = function() {
			// XDomainRequest doesn't provide responseXml, so if you need it:
			var dom = new ActiveXObject("Microsoft.XMLDOM");
			dom.async = false;
			result = xdr.responseText;
			if (zmagsDebug){
				self.logger.log("AJAX ERROR", result);
			}
			jQuery.fancybox({content:result});
		};
		xdr.send(queryString);
	} else {
		jQuery.ajax({
			type: conType_zmag,
			url: url,
			data: queryString,
			success: function(data, textStatus, jqXHR){
				jQuery.fancybox({content:data}); 
				if (zmagsDebug){
					var err = '';
					err =+ data + jqXHR.textStatus + jqXHR.responseText + jqXHR.statusText + jqXHR.getAllResponseHeaders();
					self.logger.log("AJAX ERROR", err);
				}
			},
			error:function (xhr, ajaxOptions, thrownError){
				if (zmagsDebug){
					var err = '';
					err =+ xhr.responseText + xhr.statusText + xhr.getAllResponseHeaders() + ajaxOptions + thrownError;
					self.logger.log("AJAX ERROR", err);
				}
			}    
		});
	}
}



CommerceProPS_zmag.prototype.addToCart = function (productId, url, post_data) {

	var self = this;

	//if there are any characters in post data string, must be a POST call
	if (this.postData != ""){
		
		jQuery.ajax({
			type: "POST",
			url: url,
			data: post_data,
			success: function(data, textStatus, jqXHR){

				//check for success here
				//var mssg = this.addToCartURL + ' with post data ' + this.postData, textStatus + '\n' + jqXHR.getAllResponseHeaders();
				var mssg = "POST_SUCESSFULL";
				//console.log(mssg);
				self.logger.log('Successful Post Call To',mssg );
				self.launchCartConfirmBox();
			},
			error:function (xhr, ajaxOptions, thrownError){
				
				////console.log("Error in CommerceProPS addToCart function. Errored out on " +
				//		"a POST call addToCartURL. Are we sure we have properly formatted POST data? Correct URL?" + 
				//		"Error message follows: ");		
				var err = xhr.status + '\n' + xhr.responseText  + '\n' + thrownError;
				//console.log("ERROR IN ADD TO CART:" + err);			
				self.logger.log("AJAX ERROR", err);
            }    
    	});
    } else { // must be a GET call, embed needed variables directly in URL
    	jQuery.ajax({
    		type: "GET",
       		url: this.addToCartURL,
        	success: function(data, textStatus, jqXHR){
        		//check for success here
				//var mssg = this.addToCartURL + ' with  data ' + this.postData, textStatus + '\n' + jqXHR.getAllResponseHeaders();
				
				var mssg = "GET REQUEST SUCESSFUL";
				self.logger.log('Successful GET Call To', mssg);
				self.launchCartConfirmBox();
        	},

        	error:function (xhr, ajaxOptions, thrownError){
	
			////console.log("Error in CommerceProPS addToCart function. Errored out on " +
			//		"a GET call addToCartURL. Are we sure we have the proper URL and parameters?" +
			//		"Error message follows: ");
			////console.log(xhr);
			////console.log(thrownError);
				
				//var mssg = "Error GET add to cart call. here is the server response attempted url" + commProPsRef.addToCartURL + '\n Server return code ' + xhr.status;
				self.logger.log("AJAX ERROR", mssg);
            } 
        });
        
    }
	

    
}

CommerceProPS_zmag.prototype.launchCartConfirmBox = function() {

	////console.log('launching confirm box with html \n' + this.addToCartConfirmHTML );
	jQuery.fancybox({content:this.addToCartConfirmHTML}); 

}


function zMagNeedflXHR(){
	var mozilla = "";
	if(jQuery.browser.mozilla){mozilla = jQuery.browser.version.split('.')};
	if((jQuery.browser.msie && jQuery.browser.version >= 7 && jQuery.browser.version < 8) || (jQuery.browser.opera) || (jQuery.browser.mozilla && (parseInt(mozilla[0]) < 2 && parseInt(mozilla[1]) <= 9 && parseInt(mozilla[2]) < 1))){
		return true;
	} else {
		return false;
	}
}





//----------------- LOGGING ------------------------/////

/*
	Logger interfaces with logger.php
	jQuery is required.
*/


function POCLogger(poc_id)
{
	this.poc_id = poc_id;
	this.logger_url = CORE_SOURCE_zmag + "corepoc/poc-logs/logger.php";
	//this.logger_url = "http://localhost:8888/Zmags/POCs/corepoc/poc-logs/logger.php";
}

/*
	log_obj ex:
	{"TransactionName":"value", "Other Value":"value"}
*/
POCLogger.prototype.log = function(label, mssg)
{
	
	var surl =  this.logger_url;

	jQuery.ajax({
		url: surl,
		data: {poc_id:this.poc_id,label: encodeURI(label), mssg :encodeURI(mssg)},
		dataType: "jsonp",
		jsonp : "callback",
		jsonpCallback: "jsonpcallback"
	});

	 

	
}


function jsonpcallback(rtndata) { 

		// Get the id from the returned JSON string and use it to reference the target jQuery object.
		//console.log(rtndata.mssg)
}
	

///////// FANCY BOX/////////////////



function closeProductWindow_zmag(){
	jQuery.fancybox.close();	
}

function CustomLinkHandler(event) {

	zmagCPO.launchProdDetailBox();
	
}
