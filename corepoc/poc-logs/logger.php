<?php
/*
	Logs the following interactions to a text file:
	1. What ajax call
	2. What response.
	3. Errors.
	4. Events ( open lightbox, close, etc.)
	
*/
header("content-type: application/json");


ini_set('error_reporting', E_ALL);

// check for a post
$label ='';
$mssg ='';
$callback ='';

if ($_GET['callback']){
//if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$poc_id =$_GET['poc_id'];
	$label =urldecode($_GET['label']);
	$mssg =urldecode($_GET['mssg']);
	$callback = $_GET['callback'];
	
	$logText = "\n\n------------------\n";
	$logText .="TIME: " + date('r');
	$logText .= "Project: " . $poc_id . "\n";
	
	$logText .= $label . ": " .$mssg;
	$logText .= "\n";
	
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
	
	$rtnjsonobj = array();
 	$rtnjsonobj['log'] = "---------";
    $rtnjsonobj['mssg'] = "Wrote to log.";
       
    echo $callback . '('. json_encode($rtnjsonobj) . ')';  
 	//echo json_encode($rtnjsonobj);  	
	
}

/// dont know why baked in json_encode isnt working so...
//http://phildawson.tumblr.com/post/69138822/json-encode-doesnt-work-running-php-5-2-0-and-in-a
function json_encode($a=false)
  {
    if (is_null($a)) return 'null';
    if ($a === false) return 'false';
    if ($a === true) return 'true';
    if (is_scalar($a))
    {
      if (is_float($a))
      {
        // Always use "." for floats.
        return floatval(str_replace(",", ".", strval($a)));
      }

      if (is_string($a))
      {
        static $jsonReplaces = array(array("\\", "/", "\n", "\t", "\r", "\b", "\f", '"'), array('\\\\', '\\/', '\\n', '\\t', '\\r', '\\b', '\\f', '\"'));
        return '"' . str_replace($jsonReplaces[0], $jsonReplaces[1], $a) . '"';
      }
      else
        return $a;
    }
    $isList = true;
    for ($i = 0, reset($a); $i < count($a); $i++, next($a))
    {
      if (key($a) !== $i)
      {
        $isList = false;
        break;
      }
    }
    $result = array();
    if ($isList)
    {
      foreach ($a as $v) $result[] = json_encode($v);
      return '[' . join(',', $result) . ']';
    }
    else
    {
      foreach ($a as $k => $v) $result[] = json_encode($k).':'.json_encode($v);
      return '{' . join(',', $result) . '}';
    }
  }

?>
