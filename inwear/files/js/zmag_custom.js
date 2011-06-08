var viewer = new ZMAGS.ui.Viewer();    
viewer.addEventListener(ZMAGS.ui.Viewer.CUSTOM_LINK_CLICK, 'CustomLinkHandler', self);    
viewer.setPublicationID('947384ef');
//viewer.setPublicationID('4f7ae868');
viewer.setParentElementID('zmag_container');
viewer.show();

jQuery(document).ready(function(){
	
	var mozilla = "";
	if(jQuery.browser.mozilla){mozilla = jQuery.browser.version.split('.')};
	if((jQuery.browser.msie && jQuery.browser.version >= 7 && jQuery.browser.version < 8) || (jQuery.browser.opera) || (jQuery.browser.mozilla && (parseInt(mozilla[0]) < 2 && parseInt(mozilla[1]) <= 9 && parseInt(mozilla[2]) < 1)))
	{
		var js = document.createElement("script"); 
		js.setAttribute("src","http://ps.zmags.com/poc/inwear/files/js/flXHR.js"); 
		js.setAttribute("type","text/javascript");  
		document.getElementsByTagName('head')[0].appendChild(js);
		
	}
	
})

function ajax_ie7(type, url, params, is_addtobag)
{
	var photolistloader = new flensed.flXHR({noCacheHeader:false});
	
	if(is_addtobag)
		photolistloader.onreadystatechange = ajax_ie7_success_addtobag;
	else
		photolistloader.onreadystatechange = ajax_ie7_success;
	
	photolistloader.onerror = ajax_ie7_error;
	//photolistloader.loadPolicyURL = "http://ps.zmags.com/poc/inwear/files/js/crossdomain.xml";
	//photolistloader.instanceId = "flXHR_1";
	photolistloader.open(type, url);
	photolistloader.send(params);

}

function ajax_ie7_success(loadObj)
{
	var result = "";
	if(loadObj.readyState == 4)
	{
		result = loadObj.responseText;	
		jQuery.fancybox({
			content:result
		});
	}
}

function ajax_ie7_success_addtobag(loadObj)
{
	var result = "";
	if(loadObj.readyState == 4)
	{
		result = loadObj.responseText;	
		jQuery.fancybox({
			content: result,
			width: '530',
			height: '420',
			autoDimensions: false
		});
		
	}
}

function ajax_ie7_error(loadObj)
{
	
}	

function viewProduct(productId)
{	
	showProduct(productId);
}

function delay_css()
{
    jQuery("#cboxLoadingGraphic").css('display','none');
}

function ajax_ie(type, url, params, async, fancy, is_addtobag)
{
	var result = "";
	var xdr = new XDomainRequest();
	//xdr.contentType = "text/html";
	xdr.open(type, url);
	xdr.onload = function() {
		// XDomainRequest doesn't provide responseXml, so if you need it:
		var dom = new ActiveXObject("Microsoft.XMLDOM");
		dom.async = async;
		result = xdr.responseText;
		if(fancy)
			jQuery.fancybox({
				content:result
			});
	};
	xdr.send(params);
	return result;
}

function showProduct(productId){
	var func = arguments.callee;
	if(jQuery("#fancybox-wrap").css("display")=="none"){
	
					if(jQuery.browser.mozilla){mozilla = jQuery.browser.version.split('.')};
					var sku=productId;
                    jQuery.fancybox.showActivity();
                    var data = "&sku="+sku;
				    //var url = 'http://alex.christopherbunk.com/magento/ajax_custom/ajax_view.php';
					var url = 'http://ps.zmags.com/poc/inwear/magento/ajax_custom/ajax_view.php';
                    //post to the server and when we get a response,
                    //draw a new fancybox, and run this function on completion
                    //so that we can bind the form and create a new fancybox on submit
					  if(jQuery.browser.mozilla){mozilla = jQuery.browser.version.split('.')};		
					  if (jQuery.browser.msie && jQuery.browser.version >= 8 && window.XDomainRequest) {
						ajax_ie("POST", url, data, false, true, false);
					  }
					  else if((jQuery.browser.msie && jQuery.browser.version >= 7 && jQuery.browser.version < 8) || (jQuery.browser.opera) || (jQuery.browser.mozilla && (parseInt(mozilla[0]) < 2 && parseInt(mozilla[1]) <= 9 && parseInt(mozilla[2]) < 1)))
					  {
						ajax_ie7("POST", url, data, false);
					  }
					  else
					{
						jQuery.post(url, data, function(msg){jQuery.fancybox({content:msg,onComplete:func})});
					}
                    return false;
    }
}

function getCookie(c_name)
{
	
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name)
		{
		return unescape(y);
		}
	  }
}

function addToCart(id_product,qty,atributes){
	return false;
}

function getStock(sku_product,sku_custom,qty){
  var stock_qt=0;
  
	$.ajax({
			   type: "GET",
			   dataType: 'json',
			   url: "/v1/items/"+sku_product+"/options/"+sku_custom+"/stock.json",
			   data: "",
			   async:false,
			   success: function(jdata){
			   
				if(jdata['stock_qty'] !== "undefined")
				{
					stock_qt=""+jdata['stock_qty'];
				}
				if(jdata['available'] !== "undefined" && jdata['available'] === 0)
				{
					stock_qt=""+jdata['available'];
				}
			   }
		   });
			return parseInt(stock_qt, 10);
}

function addToBagg(sku_product,sku_custom,qty){
   var data_bagg="";
   var is_show_detail=true;
	$.ajax({
			   type: "POST",
			   dataType: 'json',
			   url: "/v1/basket/"+getCookie('SSID')+".json",
			   data: "qty="+qty+"&sku="+sku_custom+"&t_type=src",
			   async:true,
			   success: function(jdata){
				  data_bagg=jdata;
				  if(data_bagg && is_show_detail){
					 var lines = data_bagg['LINES'].length - 1;
					 data="img="+data_bagg['LINES'][lines]['extinfo']['basket_img'];
					 data+="&name="+data_bagg['LINES'][lines]['itemname'];
					 data+="&price="+data_bagg['LINES'][lines]['normalprice'];
					 data+="&color="+data_bagg['LINES'][lines]['extinfo']['property_COLOR'];
					 data+="&url_p="+data_bagg['LINES'][lines]['extinfo']['url'];
					 data+="&size="+data_bagg['LINES'][lines]['extinfo']['property_SIZE'];
					 data+="&lenght="+data_bagg['LINES'][lines]['extinfo']['property_LENGHT'];
					 data+="&qty="+qty;
					 data+="&subtotal="+(parseFloat(data_bagg['subtotal'])+parseFloat(data_bagg['tax']));
					 data+="&grand_total="+data_bagg['grandtotal'];
					 data+="&shipcost_taxes="+data_bagg['shipping'];
					 data+="&total_items="+data_bagg['num_items'];
					 data+="&se="+data_bagg['shiptocountry_iso2'];
					 data+="&currency="+data_bagg['currencyid'];
					 var k = "" + data_bagg['tracking_eval']['omniture'][4].slice(12,16);
					 data+="&partner="+k;
					 jQuery.fancybox.showActivity();
						if(jQuery("#fancybox-wrap").css("display")=="none"){
							//var url_aj = "http://alex.christopherbunk.com/magento/ajax_custom/detail_bagg.php";
							var url_aj = "http://ps.zmags.com/poc/inwear/magento/ajax_custom/detail_bagg.php";
							//post to the server and when we get a response,
							//draw a new fancybox, and run this function on completion
							//so that we can bind the form and create a new fancybox on submit
							
							var mozilla = "";
							 if(jQuery.browser.mozilla){mozilla = jQuery.browser.version.split('.')};
							 if (jQuery.browser.msie && jQuery.browser.version >= 8 && window.XDomainRequest) 
							{
								ajax_ie("POST", url_aj, data, false, true, true);
							}
							else if((jQuery.browser.msie && jQuery.browser.version >= 7 && jQuery.browser.version < 8) || (jQuery.browser.opera) || (jQuery.browser.mozilla && (parseInt(mozilla[0]) < 2 && parseInt(mozilla[1]) <= 9 && parseInt(mozilla[2]) < 1)))
							{
							
								ajax_ie7("POST", url_aj, data, true);
							}
							else
							{
								jQuery.post(url_aj, data, function(msg){
									jQuery.fancybox({content:msg});
									jQuery("#fancybox-loading").hide();
								});
							}
							
							return false;
						}
					 is_show_detail=false;	
					}		
			   }
		   });
	
	
}