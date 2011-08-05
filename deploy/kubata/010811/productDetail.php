<?php
	header("Access-Control-Allow-Origin: *");
	header("Allow-Control-Allow-Methods: OPTIONS, GET, POST, PUT, DELETE"); 
	header("Access-Control-Allow-Headers: X-CUSTOM");
	header("Access-Control-Max-Age: 1500000");
	header("Content-Type: text/plain");


	$type = $_GET['type'];

	

?>

<div id ="zmags_dpw_wrapper">

<h1> RTV900XT</h1>

<div id ="zmags_dpw_btns">
	<a href="#" onclick ="launchDetailsModal()">Product Info</a>
	<a href="#" onclick ="launchVideoModal()">Watch a Video</a>
	<a href="#" onclick = "launchFormModal()">Request a quote</a>

</div>

<?php if ($type == "details"): ?>


	<object codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="760" height="400" title="RTV1140" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"><param name="movie" value="rtv900.swf"> <param name="quality" value="high"> <param name="wmode" value="transparent"> <embed width="760" height="400" title="RTV1140" src="rtv900.swf" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" wmode="transparent" type="application/x-shockwave-flash"></object>




<?php elseif ($type =="video") : ?>

<object width="720" height="486"><param name="movie" value="http://www.youtube.com/v/XBwRItDLZ4A?version=3&amp;hl=en_US&amp;rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/XBwRItDLZ4A?version=3&amp;hl=en_US&amp;rel=0" type="application/x-shockwave-flash" width="720" height="486" allowscriptaccess="always" allowfullscreen="true"></embed></object>



<?php else: ?>

<div id ="contact_form"> 

	<form action = "submit_form.php">
	<label>Your Name</label>
	<input type ="text" name = "name">

	<label>Your Email</label>
	<input type ="text" name = "email">

	<label>Message</label>
	<textarea name = "message"></textarea>



	<label>Send me Information About:</label>
	<select>
		<option value = "option1">Option 1</option>
		<option value = "option2">Option 2</option>
		<option value = "option3">Option 3</option>
		<option value = "option4">Option 4</option>
		<option value = "option5">Option 5</option>


	</select>

	<span id ="submit_btn_span">

	<a id ="submit_btn">Submit</a>

	</span>

</form>



</div>

	

<?php endif; ?>


</div>