var zmagCPO;initCommerceAssets_zmag(jsIncludeFiles_zmag,cssIncludeFiles_zmag);function initCommerceAssets_zmag(f,d){for(var c=0;c<d.length;c++){var b=d[c];var e=document.createElement("link");e.setAttribute("rel","stylesheet");e.setAttribute("type","text/css");e.setAttribute("href",b);document.getElementsByTagName("head")[0].appendChild(e)}for(var c=0;c<f.length;c++){var a=f[c];jQuery.getScript(a,function(){})}jQuery.getScript(CORE_SOURCE_zmag+"corepoc/resources/lib/fancybox/jquery.fancybox-1.3.4.js",function(){});var e=document.createElement("link");e.setAttribute("rel","stylesheet");e.setAttribute("type","text/css");e.setAttribute("href",CORE_SOURCE_zmag+"corepoc/resources/lib/fancybox/jquery.fancybox-1.3.4.css");document.getElementsByTagName("head")[0].appendChild(e);initCommerceObject_zmag()}function initCommerceObject_zmag(){zmagCPO=new CommerceProPS_zmag(pocProjectName_zmag);zmagCPO.addToCartURL=addToCartURL_zmag;zmagCPO.productDetailHTML=prodDetailHTML_zmag;zmagCPO.addToCartConfirmHTML=addToCartConfirmHTML_zmag;zmagCPO.postData=postDataString_zmag;zmagCPO.addToCartID=addToCartButtonID_zmag}function CommerceProPS_zmag(a){this.projectName=a;this.logger=new POCLogger(a);this.addToCartURL="";this.productDetailHTML="";this.addToCartConfirmHTML="";this.viewCartURL="";this.postData="";this.addToCartID=""}CommerceProPS_zmag.prototype.launchProdDetailBox=function(){jQuery.fancybox({content:this.productDetailHTML});this.addToCartButton=jQuery("body").find("#addToCartBtn");var a=this;this.addToCartButton.attr("href",this.addToCartURL);this.addToCartButton.click(function(b){b.preventDefault();a.addToCart("1",a.addToCartURL,a.postData)})};CommerceProPS_zmag.prototype.addToCart=function(c,b,d){var a=this;if(this.postData!=""){jQuery.ajax({type:"POST",url:b,data:d,success:function(f,h,e){var g="POST_SUCESSFULL";a.logger.log("Successful Post Call To",g);a.launchCartConfirmBox()},error:function(h,e,g){var f=h.status+"\n"+h.responseText+"\n"+g;a.logger.log("AJAX ERROR",f)}})}else{jQuery.ajax({type:"GET",url:this.addToCartURL,success:function(f,h,e){var g="GET REQUEST SUCESSFUL";a.logger.log("Successful GET Call To",g);a.launchCartConfirmBox()},error:function(g,e,f){a.logger.log("AJAX ERROR",mssg)}})}};CommerceProPS_zmag.prototype.launchCartConfirmBox=function(){jQuery.fancybox({content:this.addToCartConfirmHTML})};function POCLogger(a){this.poc_id=a;this.logger_url=CORE_SOURCE_zmag+"corepoc/poc-logs/logger.php"}POCLogger.prototype.log=function(a,c){var b=this.logger_url;jQuery.ajax({url:b,data:{poc_id:this.poc_id,label:encodeURI(a),mssg:encodeURI(c)},dataType:"jsonp",jsonp:"callback",jsonpCallback:"jsonpcallback"})};function jsonpcallback(a){}function closeProductWindow_zmag(){jQuery.fancybox.close()}function CustomLinkHandler(a){zmagCPO.launchProdDetailBox()};