/*
	Logger interfaces with logger.php
	jQuery is required.
*/


function POCLogger(poc_id)
{
	this.poc_id = poc_id;
	this.logger_url = "../serverside/logger.php";
}


/*
	log_obj ex:
	{"TransactionName":"value", "Other Value":"value"}
*/
POCLogger.prototype.log = function(log_obj)
{
	logger = this;
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
               console.log(logger)
            }, 
            "json"  
        );  
	
}


POCLogger.prototype.foo = function(){
	console.log("asdf");
}
