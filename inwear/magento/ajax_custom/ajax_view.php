<?php
header("Access-Control-Allow-Origin: *");
header("Allow-Control-Allow-Methods: OPTIONS, GET, POST, PUT, DELETE"); 
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");
header("Content-Type: text/plain");
include_once '../app/Mage.php';
 
Mage::app();
$product = false;

// get parameters from an ajax call in IE8 cross domain
if (isset($HTTP_RAW_POST_DATA)) {
    $data = explode('&', $HTTP_RAW_POST_DATA);
    foreach ($data as $val) {
        if (!empty($val)) {
            list($key, $value) = explode('=', $val);   
            $_POST[$key] = urldecode($value);
        }
    }
}
 
try
{
	if($_POST['product_id']){
	$product_id = $_POST['product_id'];
	$product = Mage::getModel('catalog/product')->load($product_id);
	}
	else if($_POST['sku']){
			$product_id = $_POST['sku'];
			$product = Mage::getModel('catalog/product')->loadByAttribute('sku',$product_id);
			if($product)
			$product = Mage::getModel('catalog/product')->load($product->getId());
			//$product_by_sku_d = Mage::getModel('catalog/product')->loadBySku($product_id); 
			}
	if($product)
	{
		$attributes_first = $product->getAttributes();
		$data_atributes_first=array();
		foreach ($attributes_first as $attribute) {                    	
			if ($attribute->getIsVisibleOnFront() && $attribute->getIsUserDefined()) {
			   $value = $attribute->getFrontend()->getValue($product);
			   if (strlen($value) && $product->hasData($attribute->getAttributeCode())) {
					 $data_atributes_first[$attribute->getAttributeCode()] = array('label' => $attribute->getFrontend()->getLabel(),'value' => $value);
			   }
			}
		}
		$colors = explode(',', $data_atributes_first['color_inwear']['value']);
		
		$main_images = $product->getMediaGalleryImages();
		foreach($main_images as $image)
		{
			$image_color = explode('_', $image->label);
			if(trim(reset($colors)) == $image_color[1])
			{
				$src_image_p = "".Mage::helper('catalog/image')->init($product,'image',$image->getFile())->resize(366);
				$src_image_l = "".Mage::helper('catalog/image')->init($product,'image',$image->getFile());
				break;
			}
		}
		
		$base_url_skin=Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_SKIN);
	}
} catch (Exception $e) {
	
}
?>
<script>
	var selected_size=false;
	var selected_color=false;
	var selected_lenght=false;
	var in_stock = false;
	
	var sku_custom="";
	
	if(!jQuery(".item-element-size").html())
        selected_size='no size';
    if(!jQuery(".select_colors").html()) 
        selected_color='no color';
	
    jQuery(document).ready(function () 
    {
        jQuery("#info_product .fancybox").fancybox();
        //jQuery('#info_product .cloud-zoom, #info_product .cloud-zoom-gallery').CloudZoom();
		
		jQuery(".select_colors").children("a:first").addClass("current_selected");
		jQuery(".item-element-size").children("a:first").addClass("selected-size");
		jQuery(".item-element-length").children("a:first").addClass("selected-length");
		
		selected_size = jQuery(".item-element-size").children("a:first").text();
		selected_color = jQuery(".select_colors").children("a:first").children("img:first").attr("alt");
		selected_lenght = jQuery(".item-element-length").children("a:first").text();
		if(jQuery(".item-element-length").size())
			selected_lenght=jQuery(".item-element-length").children("a:first").text();
		else
			selected_lenght = "0";
		
		sku_custom=jQuery.trim(selected_color)+"-"+jQuery.trim(selected_size)+"-"+jQuery.trim(selected_lenght);
		in_stock = getStock(jQuery("#sku_product").val(),jQuery("#"+sku_custom).val(),jQuery("#qty_cart").val());
		
		/*if(in_stock > 0 && jQuery("#qty_cart").val() <= in_stock)
			jQuery("#add_to_cart").addClass("button-activated");
		else
			jQuery("#add_to_cart").removeClass("button-activated");*/
		
		// Activate only the sizes for the first color selected
		activate_sizes(selected_color);
		
		check_available(in_stock);
		
 

	
	/*var sku_custom="";*/
    /*var selected_size=false;
    var selected_color=false;*/
	
	//var selected_lenght="0";
    /*if(!jQuery(".item-element-size").html())
        selected_size='no size';
    if(!jQuery(".select_colors").html()) 
        selected_color='no color';  */
   
    jQuery("#add_to_cart").click(
        function()
        {  
			if(in_stock > 0 && jQuery("#qty_cart").val() <= in_stock)
			{
				
				if((selected_color || selected_color=="no color") && (selected_size || selected_size=="no size")){
					jQuery.fancybox.close();
					sku_custom=jQuery.trim(selected_color)+"-"+jQuery.trim(selected_size)+"-"+jQuery.trim(selected_lenght);
					addToBagg(jQuery("#sku_product").val(),jQuery("#"+sku_custom).val(),jQuery("#qty_cart").val());
					
				}
			}
        }
    );
    
    jQuery(".item-element-size a").click(
        function(){
            jQuery(".item-element-size a").removeClass("selected-size");
            jQuery(this).addClass("selected-size");
            selected_size=jQuery(this).text();
            
			sku_custom=jQuery.trim(selected_color)+"-"+jQuery.trim(selected_size)+"-"+jQuery.trim(selected_lenght);
			in_stock=getStock(jQuery("#sku_product").val(),jQuery("#"+sku_custom).val(),jQuery("#qty_cart").val());
			
			check_available(in_stock);
        }
    );
    jQuery(".select_colors a").click(
        function(){
            
            jQuery(".select_colors a").removeClass("current_selected");
            jQuery(this).addClass("current_selected");
            selected_color=jQuery(this).children("img").attr("alt");
			activate_sizes(selected_color);
			
			/*verify prodruct in stock*/
			sku_custom=jQuery.trim(selected_color)+"-"+jQuery.trim(selected_size)+"-"+jQuery.trim(selected_lenght);
			in_stock=getStock(jQuery("#sku_product").val(),jQuery("#"+sku_custom).val(),jQuery("#qty_cart").val());
			
			check_available(in_stock);
			
			/* Change the image */
			change_image(selected_color);
		}
    );
	jQuery(".item-element-length a").click(
        function(){
            jQuery(".item-element-length a").removeClass("selected-length");
            jQuery(this).addClass("selected-length");
            selected_lenght=jQuery(this).text();

			sku_custom=jQuery.trim(selected_color)+"-"+jQuery.trim(selected_size)+"-"+jQuery.trim(selected_lenght);
			in_stock=getStock(jQuery("#sku_product").val(),jQuery("#"+sku_custom).val(),jQuery("#qty_cart").val());
			
			check_available(in_stock);
			
        }
    );
	
	jQuery("#qty_cart").keyup(function(){
		if(jQuery("#qty_cart").val() != "")
		{
			sku_custom=jQuery.trim(selected_color)+"-"+jQuery.trim(selected_size)+"-"+jQuery.trim(selected_lenght);
			in_stock=getStock(jQuery("#sku_product").val(),jQuery("#"+sku_custom).val(),jQuery("#qty_cart").val());
			
			check_available(in_stock);
		}
	})
	
});

		// Activate only the sizes for a color in particular
		function activate_sizes(color)
		{
			color = jQuery.trim(color);
			var sizes = get_sizes_for_color(color);
			jQuery(".item-element-size").children().each(function(){
				if(jQuery.inArray(jQuery.trim(jQuery(this).attr("name")), sizes) == '-1')
					disable_size(jQuery(this));
				else
					enable_size(jQuery(this));
			})
		}
		
		//Get the sizes for a color
		function get_sizes_for_color(color)
		{
			var results = new Array();
			var all_sizes_inputs = jQuery("#info_product").find(".hidden_code");
			all_sizes_inputs.each(function(){
				var values = jQuery(this).attr("id").split("-");
				if(jQuery.trim(values[0]) == color)
					results.push(values[1]);
			})
			return results;
		}
		
		//Disable the element
		function disable_size(element)
		{
			element.addClass("sizedisabled");
		}
		
		//Enable the element
		function enable_size(element)
		{
			element.removeClass("sizedisabled");
		}
		
		//Check the status of the stock and execute actions
		function check_available(in_stock)
		{
			if(in_stock > 0)
			{
				jQuery("#out-of-stock").hide();
				jQuery("button").addClass('button-activated');
			}
			else
			{
				jQuery("#out-of-stock").show();
				jQuery("button").removeClass('button-activated');
			}
			
			if(in_stock > 0)
				if(jQuery("#qty_cart").val() <= in_stock)
					jQuery("#low-quantity-stock").hide();
				else
				{
					jQuery("#low-quantity-stock").children("strong:first").text("");
					jQuery("#low-quantity-stock").children("strong:first").append(in_stock);
					jQuery("#qty_cart").val(in_stock);
					jQuery("#low-quantity-stock").show();
				}
		}
		
		function change_image(selected_color)
		{
			jQuery(".other_images li a img").each(function(){
				var color = jQuery(this).attr('lang').split('_');
				if(jQuery.trim(selected_color) == color[1])
					jQuery(this).parent().click();
			});
		}

</script>

<div id="info_product">
	<?php
	echo "<input type='hidden' value ='".$_POST['sku']."' id='sku_product' />";
	if($product)
	foreach ($product->getOptions() as $o) {
		$optionType = $o->getType();
		
			if ($optionType == 'radio') {
				$values = $o->getValues();

				foreach ($values as $k => $v) {
					 $data_options=$v->getData();
					 echo "<input type='hidden' class='hidden_code' value='".$data_options['sku']."' id='".$data_options['default_title']."'/>";
				}
			}
	}
?>
	
    <div id="content-lightbox">
	<?php
	if($product){
	?>
        <div class="panel_left">
        <h3><?php echo $product->getName(); ?></h3>
        <span class="price"><?php echo number_format($product->getPrice(), 2, ",", ",");?> <?php echo (strtoupper(Mage::app()->getLocale()->currency(Mage::app()->getStore()->getCurrentCurrencyCode())->getSymbol()))== "DKR"?"DKK":"" ?></span>
        <div class="points">
        </div>
        <div class="info">
            <p>
                <?php echo $product->getShortDescription();?>
                <?php
              
                    $attributes = $product->getAttributes();
					
                    $data_atributes=array();
                    foreach ($attributes as $attribute) {                    	
                        if ($attribute->getIsVisibleOnFront() && $attribute->getIsUserDefined()) {
                           $value = $attribute->getFrontend()->getValue($product);
                           if (strlen($value) && $product->hasData($attribute->getAttributeCode())) {
                                 $data_atributes[$attribute->getAttributeCode()] = array('label' => $attribute->getFrontend()->getLabel(),'value' => $value);
                           }
                        }
                    }
					
					

                ?>
            </p>                    
            <!--<a class="view-full-details" href="<?php echo $product->getProductUrl()?>"> view full product details</a>-->
            <div id="tabla-item-gallery">
    			<table id="item-dyn">
                    <tbody>                    
                    <?php
                       echo '<tr class="item-option GSI_item_options"><td class="elements">Color:</td>
                               <td class="select_colors"> ';
                            foreach (split(",",$data_atributes['color_inwear']['value']) as $attribute_color){
                                echo '<a class="option-1 selected-color" href="javascript:void(0)" name="'.$attribute_color.'">
                                          <!--<img src="'.$base_url_skin.'frontend/default/default/css/colors/'.trim($attribute_color).'.jpg" alt="'.$attribute_color.'" title="'.$attribute_color.'"/>-->
										  <img src="http://ps.zmags.com/poc/inwear/cron/updates/images/colors/'.trim($attribute_color).'.jpg" alt="'.$attribute_color.'" />
                                      </a>';
                            }
                         echo '</td></tr>';     
                        
                        foreach($data_atributes as $data_atribute){
						//echo "ñabel:" . trim($data_atribute['label']);                         
						if(trim($data_atribute['label'])=="Size"){   
                             echo '<tr class="item-option"><td class="elements">Size:</td>
                                   <td class="item-element-size"> ';
                                    foreach (split(",",$data_atribute['value']) as $attribute_size){
                                        echo '<a class="option-2 unselected" href="javascript:void(0)" name="'.$attribute_size.'">'.$attribute_size.'</a>';
                                    }
                             echo '</td></tr>';
                         }
     
                        } 

						foreach($data_atributes as $data_atribute){
                         if(trim($data_atribute['label'])=="length inwear"){   
                             echo '<tr class="item-option"><td class="elements">Length:</td>
                                   <td class="item-element-length"> ';
                                    foreach (split(",",$data_atribute['value']) as $attribute_length){
                                        echo '<a class="option-2 unselected" href="javascript:void(0)" name="'.$attribute_length.'">'.$attribute_length.'</a>';
                                    }
                             echo '</td></tr>';
                         }
     
                        }					
                        ?>
                        <tr class="item-option" id="item-option-qtyLine">
                            <td class="elements">Quantity:</td>
                            <td>
                                <input class="item-quantity" value="1" id="qty_cart" maxlength="2" type="text"/>
                                <div class="stock-check" style="position: relative;"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <button class="inline_b styled vertical_middle button-disabled" id="add_to_cart" type="submit" >Add to Bag</button>
			<span id="out-of-stock" style="display:none">Sorry the selected product is sold out.</span>
			<span id="low-quantity-stock" style="display:none">Sorry, we only have <strong></strong> of the selected <br /> product in stock.</span>
        </div>
        
    </div>    
		<div class="panel_right">
		        <div class="max_img">
		             <a href="<?php echo $src_image_l?>" class="cloud-zoom" rel="position: 'inside', showTitle: false , zoomWidth:300 , adjustX: 1 , adjustY:1" id='zoom1'>
		                <img title="<?php echo $product->getName(); ?>" alt="" src="<?php echo $src_image_p?>" />
		             </a>		             
		        </div>
		        <ul class="other_images">
		        <?php $_images = $product->getMediaGalleryImages(); ?>
					<?php if($_images): ?>
						<?php foreach(array_reverse($colors) as $color): ?>
							<?php foreach($_images as $_image): ?>
								<?php $current_color = explode('_', $_image->label); ?>
								<?php if(trim($color) == trim($current_color[1])): ?>
									<?php $src_large_image=Mage::helper('catalog/image')->init($product,'image',$_image->getFile()); ?>
									<li>
										<a class="cloud-zoom-gallery" href="<?php echo $src_large_image;?>" rel="useZoom:'zoom1',smallImage:'<?php echo Mage::helper('catalog/image')->init($product,'image',$_image->getFile())->resize(366);?>'" >
										<?php $src_thumb=Mage::helper('catalog/image')->init($product,'thumbnail',$_image->getFile())->resize(50,54);?>
										<img lang="<?php echo $_image->label ?>" src="<?php echo $src_thumb;?>"/>
										</a>
									</li>
								<?php endif ?>							
							<?php endforeach ?>
						<?php endforeach ?>
					<?php endif ?>
		        </ul>
	    </div>
	<?php
	}	
	else{
		echo '<div style="text-align:center"><img width="645" heigth="227" src="http://ps.zmags.com/poc/inwear/files/css/images/sold-out.png" /></div>';
	}
	?>
	
	<script type="text/javascript">
		try{
		var pageTracker = _gat._getTracker("UA-23854689-1");
		pageTracker._trackPageview();
		} catch(err) {}
	</script>
	
    </div>
	
	<script>
		if (jQuery.browser.msie && window.XDomainRequest)
		{
			setTimeout("wait()", 500);
		}
		else
		{
			jQuery('#info_product .cloud-zoom, #info_product .cloud-zoom-gallery').CloudZoom();
		}
		
		function wait(){jQuery('#info_product .cloud-zoom, #info_product .cloud-zoom-gallery').CloudZoom();}
		
		jQuery('#info_product .cloud-zoom').css('cursor', 'default');
		jQuery('#info_product .cloud-zoom').click(function(){return false;});
	</script>
	
</div>
