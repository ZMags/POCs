jQuery.fancybox = undefined;
jQuery.fn.fancybox = undefined;

var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'http://ps.zmags.com/poc/deploy/coalesse/010711/js/jquery.fancybox-1.3.4.js';
head.appendChild(script);
script.onreadystatechange= function () {
	if (this.readyState == 'complete') {
		jQuery.fancybox({content:'test'});
	}
}
