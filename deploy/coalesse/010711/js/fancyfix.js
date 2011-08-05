setTimeout('fancyfix()', 5000);	

function fancyfix() {
	console.log('current jquery is...' + jQuery.fn.jquery);
	if (typeof $.fancybox == 'function'){
		console.log('fancybox exists already on page...');
	}
	jQuery.fancybox = undefined;
	jQuery.fn.fancybox = undefined;
	jQuery = undefined;
	$ = undefined;

	if(!jQuery){
		console.log('jquery is unloaded...');
	}
	
	console.log('removed existing jquery and fancybox');

	var head= document.getElementsByTagName('head')[0];
	
	
	var jScript= document.createElement('script');
	jScript.type= 'text/javascript';
	jScript.src= 'http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js';
	head.appendChild(jScript);
	console.log('started loading new jquery..');
	jScript.onload = function() {
		if(jQuery){
			

			console.log('finished loading new jquery version ' + jQuery.fn.jquery);
			/*
			alert('new jquery loaded');
			if (this.readyState == 'complete') {
			}
			*/
			loadFancy();
		}
	}


}
function loadFancy(){
	var head= document.getElementsByTagName('head')[0];
	var script= document.createElement('script');
	script.type= 'text/javascript';
	script.src= 'http://ps.zmags.com/poc/deploy/coalesse/010711/js/jquery.fancybox-1.3.4.js';
	head.appendChild(script);
	console.log('started loading new fancybox...');
	script.onload= function () {
		if(typeof $.fancybox == 'function'){
			console.log('finished loading fancybox...');
			jQuery.fancybox({content:'test'});
		}
	}
}
