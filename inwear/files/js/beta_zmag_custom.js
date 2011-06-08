var viewer = new ZMAGS.ui.Viewer();    
viewer.addEventListener(ZMAGS.ui.Viewer.CUSTOM_LINK_CLICK, 'CustomLinkHandler', self);    
viewer.setPublicationID('947384ef');
//viewer.setPublicationID('4f7ae868');
viewer.setParentElementID('zmag_container');
viewer.show();

function CustomLinkHandler(event) 
{   
	//var url='http://www.inwear.com/DK/item/';	
	var main_url='http://alex.christopherbunk.com/magento/';
	var productId=event.data['prodID']==19?'zitiyas-dress.html':event.data['prodID']==26?'gissys-belt.html':'bonkas-t-shirt.html';
	//alert(event.data['product_id']);
	viewProduct(main_url+productId);
}

function viewProduct(url)
{		
	jQuery.colorbox({href:url,//url+productId+'/',
		iframe:true,innerWidth:821,innerHeight:478,fastIframe:false ,
		onComplete:function()
		{				
			jQuery('.cboxIframe').contents().find('head').append('<link href="http://alex.christopherbunk.com/magento/zmag_catalog_media/css/zmag_master.css" rel="stylesheet" type="text/css"  />');
		}
	});
}