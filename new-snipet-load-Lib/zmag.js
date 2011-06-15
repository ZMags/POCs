 /**
     * Default ID of publication to see.
     * @final
     */
    var defaultPublicationID = '90eb88fc';

    /**
     * Default page number to show initially.
     * @final
     */
    var defaultPageNumber = 1;

    /**
     * Function to retrieve a potential query parameter from an URL.
     *
     * @param {String} name    Name of parameter to get value for.
     * @return Query parameter value for a given name.
     */
    function getQueryParameter(name) {
        var queryParameters = document.location.search;
        var returnValue = '';

        do { //This loop is made to catch all instances of any get variable.
            var keyIndex = queryParameters.indexOf(name + '=');
            if (keyIndex != -1) {
                queryParameters = queryParameters.substr(keyIndex + name.length + 1, queryParameters.length - keyIndex);
                var valueSeparatorPosition = queryParameters.indexOf('&');
                if (valueSeparatorPosition == -1) {
                    value = queryParameters;
                } else {
                    var value = queryParameters.substr(0, valueSeparatorPosition);
                }
                if (value == '' || returnValue == '') {
                    returnValue += value;
                }
                else {
                    returnValue += ', ' + value;
                }
            }

        }
        while (keyIndex != -1);

        //Restores all the blank spaces.
        var space = returnValue.indexOf('+');
        while (space != -1) {
            returnValue = returnValue.substr(0, space) + ' ' +
                    returnValue.substr(space + 1, returnValue.length);
            space = returnValue.indexOf('+');
        }
        return returnValue;
    }

    /**
     * Function to retrieve a potential query parameter from an URL and if not present use default value.
     *
     * @param {String} name    Name of parameter to get value for.
     * @param {String} defaultValue Default value to return if name value could not be returned.
     * @return Query parameter value for a given query parameter or default value provided in case query parameter could not be found.
     */
    function getParameterValue(name, defaultValue) {
        var parameterValue = getQueryParameter(name);
        if (parameterValue) {
            return parameterValue;
        } else {
            return defaultValue;
        }
    }

    var initialPublicationID = getParameterValue('id', defaultPublicationID);
    var pageNumber = getParameterValue('pagenumber', defaultPageNumber);

    var viewer = new ZMAGS.ui.Viewer();
    viewer.addEventListener(ZMAGS.ui.Viewer.CUSTOM_LINK_CLICK, "CustomLinkHandler", self);
    viewer.setPublicationID(initialPublicationID);    //identifier of publication
    viewer.setParentElementID('viewer_content'); // element to insert Publication into
    viewer.setWindowMode('transparent');

    viewer.show();

    viewer.onpublicationopen = function(event) {
        setTimeout('viewer.gotoPage(pageNumber)', '700' );
    };

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 if (typeof jQuery == "undefined") {
    var jsQ = document.createElement("script");
    jsQ.setAttribute("src","http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js");
    jsQ.setAttribute("type","text/javascript");
    //document.head.appendChild(js);
    document.getElementsByTagName('head')[0].appendChild(jsQ);

}


/*var files=new Array("laura_ashley.js","jquery.fancybox-1.3.4.js","magiczoom.js","jquery.fancybox-1.3.4.css","magiczoom.css","colorbox-ie.css","catalog.css");      */
 var files_Css=new Array("reset.css","style.css","jquery.fancybox-1.3.4.css","cloud-zoom.css");
loadJsCss("http://ps.zmags.com/poc/test-snipet/zmags1/files/",files_Css);
var file_face=new Array("all.js");
   setTimeout('loadJsCss("http://connect.facebook.net/en_US/",file_face)',1000);

  /****************************************************************************************/
   var navegador = navigator.appName;
  var js;
  var files=new Array( 'http://ps.zmags.com/poc/test-snipet/zmags1/files/jquery.js','http://ps.zmags.com/poc/test-snipet/zmags1/files/jquery.fancybox-1.3.4.js','http://ps.zmags.com/poc/test-snipet/zmags1/files/cloud-zoom.1.0.2.js'
  ,'http://ps.zmags.com/poc/test-snipet/zmags1/files/custom_links.js');
  if (navegador == "Microsoft Internet Explorer"){

           include_js(files,0);

  }else{
            load_jsF(files,0);
  }


  function include_js(file,i) {
      var stat = false;
      var html_doc = document.getElementsByTagName('head').item(0);
      js = document.createElement('script');
      js.setAttribute('type', 'text/javascript');
      js.setAttribute('src', file[i]);
      html_doc.appendChild(js);

      // alert state change
      js.onreadystatechange = function () {//IE
         //console.log(js.readyState);
          if (js.readyState == 'loaded') {
              // safe to call a function
              // found in the new script
             //console.log('termino explorer');

             include_js(file,i+1);
             //console.log(stat);
             stat = true;

          }

      }
      return stat;
  }


  function load_jsF(file,i){
      var stat = false;
          var html_doc = document.getElementsByTagName('head').item(0);
      js = document.createElement('script');
      js.setAttribute('type', 'text/javascript');
      js.setAttribute('src', file[i]);
      html_doc.appendChild(js);
         //var navegador = navigator.appName;

      // alert state change
          js.onload = function () {    //most browsers

          if (js.addEventListener) {
            js.addEventListener("DOMContentLoaded", init, false);
              console.log('termino no explorer');
              load_jsF(files,i+1);
              console.log(file[i]);
              stat = true;
                      }

      }
    return stat;
  }
  function init() {

    // quit if this function has already been called
    if (arguments.callee.done) return;

    // flag this function so we don't do the same thing twice
    arguments.callee.done = true;

    // do stuff
  }




  /******************************************************************************************/
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
         showImage();

	  }
}