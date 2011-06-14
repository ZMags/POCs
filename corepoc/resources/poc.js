
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

var zmagCPO;

//1. Check if jquery exists.
if(window.jQuery === undefined){
	
	
	// dont have it so load it.
	document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js">\x3C/script>');
	
	window.poctimer = window.setInterval(checkIfJqueryIsLoaded, 500);

}else{
	//jquery exists, do your thang!

	initCommerceAssets(jsIncludeFiles, cssIncludeFiles);
}


function checkIfJqueryIsLoaded(){
	if(window.jQuery != undefined){
		window.clearInterval(window.poctimer);
		//ready
		initCommerceAssets(jsIncludeFiles, cssIncludeFiles)
	}else{
		//console.log("waiting");
	}
	
}
function initCommerceAssets( jsFilesZmags, cssFilesZmags ){
	
	//load css

	for (var i=0; i < cssFilesZmags.length; i++) {
		var loadpath = includePathZmags + cssFilesZmags[i];
		
		var cssnode = document.createElement('link');
		cssnode.setAttribute("rel","stylesheet");
		cssnode.setAttribute("type","text/css");
		cssnode.setAttribute("href",loadpath);
		document.getElementsByTagName('head')[0].appendChild(cssnode);
		
	};
	

	
	//load js includes
	for (var i=0; i < jsFilesZmags.length; i++) {
		var loadpath = includePathZmags + jsFilesZmags[i];

		//attempt to load include files, on success increment file to be loaded
		jQuery.getScript(loadpath, function(){});
	}



	//load up zmag viewer object
	var viewerjs = document.createElement("script");
	viewerjs.setAttribute("src", "http://viewer.zmags.com/js/viewer.js");
	viewerjs.setAttribute("type", "text/javascript");
	document.getElementsByTagName('head')[0].appendChild(viewerjs);
	viewerjs.onload = initZmag;

	//load up commerceprojs
	var commerceprojs = document.createElement("script");
	commerceprojs.setAttribute("src", CORE_SOURCE + "corepoc/resources/CommerceProPS.js");
	commerceprojs.setAttribute("type", "text/javascript");

	commerceprojs.onload = initCommerceObject;
	document.getElementsByTagName('head')[0].appendChild(commerceprojs);

}



//initialize zmag

function initZmag(){
	var viewer = new ZMAGS.ui.Viewer();
	viewer.setPublicationID(zmagPubID);
	viewer.setParentElementID(zmagParentElement);
	viewer.addEventListener(ZMAGS.ui.Viewer.CUSTOM_LINK_CLICK, "CustomLinkHandler", self);
	viewer.show();
}



//initialize CommerceProPS object

function initCommerceObject(){
	zmagCPO = new CommerceProPS(pocProjectName);
	zmagCPO.addToCartURL = addToCartURL;
	zmagCPO.productDetailHTML = prodDetailHTML;
	zmagCPO.addToCartConfirmHTML = addToCartConfirmHTML;
	zmagCPO.postData = postDataString;
	zmagCPO.addToCartID = addToCartButtonID;
}				


///////// FANCY BOX/////////////////



function closeProductWindow(){
	jQuery.fancybox.close();	
}

function CustomLinkHandler(event) {
/*
	for (linkvar in event.data) {
		if (linkvar == "type") {
			type = event.data[linkvar];
		} else if (linkvar == "prodID"){
			prodID = event.data[linkvar];
		} else if (linkvar == "title"){
			title = event.data[linkvar];
		} else if(linkvar == "price"){
			price = event.data[linkvar];
		} else if(linkvar == "ref"){
			ref = event.data[linkvar];
		} else  if(linkvar == "hrefImg"){
			hrefImg = event.data[linkvar];
		} else if(linkvar == "qty"){
			qty =  event.data[qty];
		}
	}

	switch(type) {
		case 'add':zmagCPO.launchProdDetailBox();
		break;
	}*/

	
	zmagCPO.launchProdDetailBox();
	
}