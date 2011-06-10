function CommerceProPS(project_name){

	this.projectName = project_name;
	// create logger and pass it the project_name
	this.logger = new POCLogger(project_name);

	this.addToCartURL = "";
	this.productDetailHTML = "";
	this.addToCartConfirmHTML = "";
	this.viewCartURL = "";
	this.postData = "";
	this.addToCartID = "";
}


CommerceProPS.prototype.launchProdDetailBox  = function() {

	jQuery.fancybox({content:this.productDetailHTML}); 

	//search for id to attach click event too

	
	// we are storing a ref to the CommerecProPS object to grab variables or methods out of later
	this.addToCartButton = jQuery('body').find('#addToCartBtn');
	
	var storedcomProObj = this;
	
	//jQuery.data(this.addToCartButton,"comProObj", storedcomProObj);
	
	// this might not work if we use <button>
	this.addToCartButton.attr('href', this.addToCartURL);
	


	
	this.addToCartButton.click( function(e) {
		e.preventDefault();
		storedcomProObj.addToCart("1",	storedcomProObj.addToCartURL,storedcomProObj.postData);
	});

	
}

CommerceProPS.prototype.addToCart = function (productId, url, post_data) {

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
				console.log(mssg);
				//commProPsRef.logger.log({'Successful Post Call To':mssg });
				self.launchCartConfirmBox();
			},
			error:function (xhr, ajaxOptions, thrownError){
				
				//console.log("Error in CommerceProPS addToCart function. Errored out on " +
				//		"a POST call addToCartURL. Are we sure we have properly formatted POST data? Correct URL?" + 
				//		"Error message follows: ");		
				var err = xhr.status + '\n' + xhr.responseText  + '\n' + thrownError;
				console.log("ERROR IN ADD TO CART:" + err);
				//var err = 'Error GET add to cart call. here is the server response', 'attempted url' + commProPsRef.addToCartURL + '\n Server return code ' + xhr.status
			
				//commProPsRef.logger.log({"AJAX ERROR": err});
            }    
    	});
    } else { // must be a GET call, embed needed variables directly in URL
    	jQuery.ajax({
    		type: "GET",
       		url: this.addToCartURL,
        	success: function(data, textStatus, jqXHR){
        		//check for success here
				//var mssg = this.addToCartURL + ' with  data ' + this.postData, textStatus + '\n' + jqXHR.getAllResponseHeaders();
				
				var mssg = "asdf";
				//commProPsRef.logger.log({'Succesfull GET Call To': mssg});
				commProPsRef.launchCartConfirmBox();
        	},

        	error:function (xhr, ajaxOptions, thrownError){
	
			console.log("Error in CommerceProPS addToCart function. Errored out on " +
					"a GET call addToCartURL. Are we sure we have the proper URL and parameters?" +
					"Error message follows: ");
			console.log(xhr);
			console.log(thrownError);
				
				//var mssg = "Error GET add to cart call. here is the server response attempted url" + commProPsRef.addToCartURL + '\n Server return code ' + xhr.status;
				//commProPsRef.logger.log({"AJAX ERROR": mssg});

            } 
        });
        
    }

    
}

CommerceProPS.prototype.launchCartConfirmBox = function() {

	//console.log('launching confirm box with html \n' + this.addToCartConfirmHTML );
	jQuery.fancybox({content:this.addToCartConfirmHTML}); 

}


//----------------- LOGGING ------------------------/////

/*
	Logger interfaces with logger.php
	jQuery is required.
*/


function POCLogger(poc_id)
{
	this.poc_id = poc_id;
	this.logger_url = "http://50.16.105.65/poc/corepoc/poc-logs/logger.php";
}

/*
	log_obj ex:
	{"TransactionName":"value", "Other Value":"value"}
*/
POCLogger.prototype.log = function(log_obj)
{
	
	var data = {};
	// we always want to save this
	data['poc_id'] = this.poc_id;
	data['log'] = log_obj;
	

	
	// use jquery to JSONIFY the whole object;
	
	var prep_json = JSON.stringify(data);
	console.log(prep_json);
	$.post(  
            this.logger_url,  
            {data:prep_json},  
            function(response){  
                console.log("") 
            },
            "json"  
        );  
	
}


