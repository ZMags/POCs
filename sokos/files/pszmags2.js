if (typeof jQuery == "undefined") { 
    var js = document.createElement("script"); 
    js.setAttribute("src","http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"); 
    js.setAttribute("type","text/javascript"); 
    //document.head.appendChild(js); 
    document.getElementsByTagName('head')[0].appendChild(js);  
   
}


/*var files=new Array("laura_ashley.js","jquery.fancybox-1.3.4.js","magiczoom.js","jquery.fancybox-1.3.4.css","magiczoom.css","colorbox-ie.css","catalog.css");      */
 var files=new Array("custom_links.js","jquery.fancybox-1.3.4.js","reset.css","style.css","jquery.fancybox-1.3.4.css","cloud-zoom.css","cloud-zoom.1.0.2.js");
setTimeout('loadJsCss("http://ps.zmags.com/poc/cs/files/",files)',5000);
var file_face=new Array("all.js");
   setTimeout('loadJsCss("http://connect.facebook.net/en_US/",file_face)',1000);
function loadJsCss(path,files_js){
    for(i=0; i<files_js.length; i++){
        atribute_type="";
        element="";
        atribute_rel="";
        ext=files_js[i].split(".");
        ext=ext[(ext.length)-1];
        
        if(ext=="js"){
            atribute_type="text/javascript";
            element="script";
        }    
        else if(ext=="css"){ 
            atribute_type="text/css";
            atribute_rel="stylesheet";
            element="link";
            
        }
        if(ext=="js" || ext=="css"){
           var file=document.createElement(element);
               file.setAttribute("type",atribute_type);
            if(atribute_rel){
                file.setAttribute("rel", "stylesheet");
                file.setAttribute("href",path+files_js[i]);
            }
            else
                file.setAttribute("src",path+files_js[i]);     
                
            //document.head.appendChild(file);
            document.getElementsByTagName('head')[0].appendChild(file);    
        }
    }      
}

function loadZmagsCatalog(){
    var embed_container= document.createElement("div");
    embed_container.setAttribute("id","viewer_content");
    embed_container.setAttribute("class","view_content_class");
   // embed_container.setAttribute("style","width:750px;height:635px;margin:0 auto;");
    document.getElementById('zmag_catalog').appendChild(embed_container);    
   	// Add custom link event handler
    viewer.addEventListener(ZMAGS.ui.Viewer.CUSTOM_LINK_CLICK, "CustomLinkHandler", self);
   // viewer.addEventListener(ZMAGS.ui.Viewer.PUBLICATION_LOAD, setPublicationInfo);
   // viewer.addEventListener(ZMAGS.ui.Viewer.CURRENT_PAGES_CHANGE, setPublicationInfo);	
   	viewer.setPublicationID(''+document.getElementById("zmag_catalog").getAttribute("catalog"));
	viewer.setWindowMode("opaque");
	viewer.setParentElementID("viewer_content");
	viewer.show();

}

function CustomLinkHandler(event) {

	  //Loop through custom link variables
	  for (linkvar in event.data) {
		  if (linkvar == "type") {
			  var type = event.data[linkvar];
		  } else if (linkvar == "prodID"){
			  var prodID = event.data[linkvar];
		  } else if (linkvar == "name"){
			  var name = event.data[linkvar];
		  } else if (linkvar == "price"){
			  var price = event.data[linkvar];
		  } else if (linkvar == "details"){
			  var details = event.data[linkvar];
		  }
	  }

	  // TYPE switch to switch between add and view product functions
	  if (type == "add"){
		  // Run addToBasket function
		 //addToBasket(prodID,1);

		 viewProduct(prodID);
	  } else if (type == "view") {
		  // Run viewProduct function
         viewProduct(prodID);
         commentFacebook();
         getInfo(prodID,name,price,details);
        // getImage();
         zoomCloud();
         playVideo();
         showImage()

	  }
}





