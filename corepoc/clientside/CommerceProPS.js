function CommerceProPS(){

	this.addToCartURL = "";
	this.productDetailHTML = "";
	this.addToCartConfirmHTML = "";
	this.viewCartURL = "";
	this.postData = "";
	this.addToCartID = "";
	this.projectName = "";
	
	//object methods
	this.setAddToCartURL = setAddToCartURL;
	this.setProductDetailHTML = setProductDetailHTML;
	this.setCartConfirmHTML = setCartConfirmHTML;
	this.setViewCartURL = setViewCartURL;
	this.setPostDataString = setPostDataString;
	this.launchProdDetailBox = launchProdDetailBox;
	this.launchCartConfirmBox = launchCartConfirmBox;
	this.addToCart = addToCart;
	this.reportError = reportError;
	this.setAddToCartID = setAddToCartID;
	this.setProjectName = setProjectName;	
}

function setProjectName ( name ) {
	this.projectName = name;
	projectName = name;
}

function setAddToCartID( id ){
	this.addToCartID = id;
	addToCartID = id;
}

function setAddToCartURL ( url ){
	this.addToCartURL = url;
	addToCartURL = url;
}

function setProductDetailHTML ( html ){
	this.productDetailHTML = html;
	productDetailHTML = html;
}

function setCartConfirmHTML ( html ) {

	this.addToCartConfirmHTML = html;
	addToCartConfirmHTML = html;

}

function setViewCartURL ( url ) {

	this.viewCartURL = url;
	viewCartURL = url;

}

function setPostDataString ( postString ) {

	this.postData = postString;
	postData = postString;
	
}

function launchProdDetailBox (){

	jQuery.fancybox({content:this.productDetailHTML}); 

	//search for id to attach click event too
	$addToCartButton = jQuery('body').find('#addToCartBtn');
	$addToCartButton.bind("click", function() {
		addToCart(this.productID);
	});

}

function addToCart ( productID ) {

	//if there are any characters in post data string, must be a POST call
	if (this.postData != ""){
		jQuery.ajax({
			type: "POST",
			url: addToCartURL,
			data: this.postData,
			success: function(data, textStatus, jqXHR){
				//check for success here
				reportError( projectName, 'low', 'ajax', 'succesfull POSt call to ' + this.addToCartURL + ' with post data ' + this.postData, textStatus + '\n' + jqXHR.getAllResponseHeaders());
				launchCartConfirmBox();
			},
			error:function (xhr, ajaxOptions, thrownError){
				console.log("Error in CommerceProPS addToCart function. Errored out on " +
						"a POST call addToCartURL. Are we sure we have properly formatted POST data? Correct URL?" + 
						"Error message follows: ");
				console.log(xhr);
				console.log(thrownError);
				var err = xhr.status + '\n' + xhr.responseText  + '\n' + thrownError;
				reportError( projectName, 'mediam', 'ajax', 'error GET add to cart call. here is the server response', 'attemted url' + this.addToCartURL + '\n Server return code ' + xhr.status);
            }    
    	});
    } else { // must be a GET call, embed needed variables directly in URL
    	jQuery.ajax({
    		type: "GET",
       		url: this.addToCartURL,
        	success: function(data, textStatus, jqXHR){
        		//check for success here
			reportError( projectName, 'low', 'ajax', 'succesfull POSt call to ' + this.addToCartURL + ' with post data ' + this.postData, textStatus + '\n' + jqXHR.getAllResponseHeaders());
        		launchCartConfirmBox();
        	},
        	error:function (xhr, ajaxOptions, thrownError){
			console.log("Error in CommerceProPS addToCart function. Errored out on " +
					"a GET call addToCartURL. Are we sure we have the proper URL and parameters?" +
					"Error message follows: ");
			console.log(xhr);
			console.log(thrownError);
			reportError( projectName, 'mediam', 'ajax', 'error GET add to cart call. here is the server response', 'attemted url' + this.addToCartURL + '\n Server return code ' + xhr.status);
            } 
        });
        
    }
    
}

function launchCartConfirmBox() {

	//console.log('launching confirm box with html \n' + this.addToCartConfirmHTML );
	jQuery.fancybox({content:this.addToCartConfirmHTML}); 

}

function reportError( project, priority, type, note, errorMessage ){
	var postString = "";
	if ( project != null ) {
		this.postString += "project=" + projectName + "&";	
	}
	if ( priority != null ) {
		this.postString += "priority=" + priority + "&";	
	}
	if ( type != null ) {
		this.postString += "type=" + type + "&";	
	}
	if ( note != null ) {
		this.postString += "note=" + note + "&";	
	}
	if ( errorMessage != null ) {
		this.postString += "errorMessage=" + errorMessage + "&";
	}

	if ( postString.charAt(postString.length - 1) == "&"){
		this.postString.substring(0, postString.length-2);	
	}

    	jQuery.ajax({
    		type: "POST",
			data: this.postString,
			url: "http://ps.zmags.com/poc/error/report.php",
        	success: function(msg){
			console.log("Error reported successfully to PS error log.");
        	},
        	error:function (xhr, ajaxOptions, thrownError){
				console.log("Could not connect to PS error log.");
			} 
	});

}