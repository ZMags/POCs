<?php
/*
	Logs the following interactions to a text file:
	1. What ajax call
	2. What response.
	3. Errors.
	4. Events ( open lightbox, close, etc.)
	
*/
header('Access-Control-Allow-Origin: *');

//ini_set('display_errors', 1);




// check for a post
if ($_SERVER['REQUEST_METHOD'] == 'POST') {


	// fixed some magic-quotes wierdness
	if(get_magic_quotes_gpc()){
	  $d = stripslashes($_POST['data']);
	}else{
	  $d = $_POST['data'];
	}
	$d = json_decode($d,true);
	
	
	$poc_id = $d['poc_id'];
	
	// add poc_id to logText
	$logText = "\n\n------------------\n";
	$logText .= "Project: " . $poc_id . "\n";
	
	
	// now just iterate throught the log value object and write those bits.
	foreach($d['log'] as $key => $value) {
		
    	$logText .= $key . ": " .$value;
		$logText .= "\n";
	}
	
	
	writeToLog($poc_id,$logText);
	
}



/*
	Writes output to file.
*/

function writeToLog($log_id, $logText){	

 	$log_file = "".$log_id."_PSpocLog.txt";

	//$log_file_name = "/var/www/html/poc/logs/".$log_id."_PSpocLog.txt";
	
	if (file_exists($log_file)){
		$log = fopen($log_file, 'a') or die ("can't open file");
		fwrite($log, $logText);	
		fclose($log);
	} else {
		$newFile = fopen($log_file, "w");	
		fclose($newFile);
		
		$log = fopen($log_file, 'a') or die ("can't open file");
		fwrite($log, $logText);	
		fclose($log);
		
	}
	
	
}

?>