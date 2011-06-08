<?php
include_once '../app/Mage.php';
Mage::app();
 try{
	// usage /scripts/addToCart.php?product_id=838&qty=1
	$product_id = '';
	$qty='';
    $color='';
    $size='';
	// get query string
	if (!isset($_POST['product_id'])) { $product_id = ''; } else { $product_id = $_POST['product_id']; }
	if (!isset($_POST['qty'])) { $qty = '1'; } else { $qty = $_POST['qty']; }
    if (isset($_POST['color'])){ $color = $_POST['color']; }
    if (isset($_POST['size'])) { $size = $_POST['size']; }
    
    $product = Mage::getModel('catalog/product')->load($product_id);
	 
	$session = Mage::getSingleton('core/session', array('name'=>'frontend'));
	$cart = Mage::helper('checkout/cart')->getCart();
	$cart->addProduct($product, $qty);
	 
	$session->setLastAddedProductId($product->getId());
	$session->setCartWasUpdated(true);
	 
	$cart->save();
    $subtotal=Mage::helper('checkout')->formatPrice(Mage::getSingleton('checkout/session')->getQuote()->getSubtotal());
    $grandtotal=Mage::helper('checkout')->formatPrice(Mage::getSingleton('checkout/session')->getQuote()->getGrandTotal());
   	
    
    $shipping_us=Mage::getSingleton('checkout/session')->getQuote()->getShippingAddress();
    $shipping_us->setCountryId('US');
    $shipping_us->setCollectShippingRates(true);
    Mage::getSingleton('checkout/session')->getQuote()->save();
   	$result = true; 
    $shipping_us_amount=Mage::getSingleton('checkout/session')->getQuote()->getShippingAddress()->getShippingAmount();
    
} catch (Exception $e) {
	$result = "".$e->getMessage();
}
?>
<?php 
	if($result!==TRUE)
	{
		echo $result;
	}
	else
	{
?>
<div class="box_add_cart">
    <div class="minicart-wrp">
		<div class="minicart-content-wrapper" style="display: block;">
			<h1 class="minicart-heading">Just Added to Your Bag</h1>		
			<div id="minicart-lines"><div class="minicart-line-loader" style="display: none;"></div>
				<div class="minicart-line-content">
					<div class="minicart-product-line">
						<a href="<?php echo $product->getProductUrl()?>" class="minicart-img">
                            <img class="minicart-image" title="Mohaie Dress" alt="Mohaie Dress" src="<? echo Mage::helper('catalog/image')->init($product, 'image')->resize(80,87);?>"/>
                        </a>
						<div class="minicart-details">
							<h2><?php echo $product->getName(); ?></h2>
							<div class="minicart-unit-price"><?php echo $product->getPrice();?> $ </div>
							<div class="minicart-data-list">
								<ul class="minicart-line-content-details">
                                    <li>colour:<strong>
                                            <a name="090" href="javascript:void(0)" class="option-1 selected-color" style="border-color: rgb(0, 0, 0);">
                                            <img title="090" alt="<?php echo $color;?>" src="<?php echo Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_SKIN).'frontend/default/default/css/colors/'.trim($color).'.jpg'; ?>"/>
                                      </a></strong></li>
                                    <li>size:<strong><?php echo $size;?></strong></li>
                                </ul>
								<div id="minicart-qty">Qty: <strong><?php echo $qty;?></strong></div>
								<div class="minicart-services"></div>
							</div>
						</div>
					</div>
					<p class="item-sku">C38563003</p>
					<img title="" alt="" class="minicart-product-swatch" src="http://static.inwear.com/static/img/catalog/INWEAR/swatch/C38563003_26J_main_swatch.png"/>
					<div class="minicart-total-price">1.998,00 DKK</div>
				</div></div>
			<table id="minicart-summary">
				<tbody><tr>
					<td><span>Your shopping bag contains:</span></td>
					<td class="minicart-line-prices"><span id="minicart-total-qty" class="minicart-quantity"><?php echo $cart->getItemsCount();?> ITEMS</span></td>
				</tr>
				<tr>
					<td class="subtotal">Merchandise subtotal:</td>
					<td id="minicart-subtotal" class="minicart-line-prices"><?php 
                                echo $subtotal;
                    ?></td>
				</tr>
				<tr>
					<td>Standard Shipping:</td>
					<td id="minicart-ship" class="minicart-line-prices"><?php echo $shipping_us_amount;//echo Mage::helper('tax')->getShippingPrice($_subtotalInclTax);?></td>
				</tr>
				<tr class="last_row">
					<td><span>Estimated total:</span></td>
					<td class="minicart-line-prices"><span id="minicart-grandtotal"><?php echo $grandtotal?></span></td>
				</tr>
			</tbody></table>
		
		</div>
		</div>
        <h2>The item has been  added to you cart</h2>
        <a href="<?php echo Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_WEB);?>checkout/onepage/" class="button1 continue_shopp">PROCEED TO CHECKOUT</a>
        <div class="product-link-footer">or <a href="javascript:jQuery.fancybox.close();" class="continue_shopp" >Continue Shopping</a></div>    
</div>
<script>
    jQuery(document).ready(
        function(){
            
            jQuery("#fancybox-loading").css("z-index","1100").hide();
            
                    var htm_cart='<li class="item last odd"><a class="product-image" title="Zitiyas Dress"'; 
                        htm_cart+='href="http://alex.christopherbunk.com/magento/zitiyas-dress.html">';
                        htm_cart+='<img height="50" width="50" alt="Zitiyas Dress" src="http://alex.christopherbunk.com/magento/media/catalog/product/cache/1/thumbnail/50x50/9df78eab33525d08d6e5fb8d27136e95/images/catalog/product/placeholder/thumbnail.jpg"></a>';
                        htm_cart+='<div class="product-details"><a class="btn-remove" onclick="return confirm(Are you sure you would like to remove this item from the shopping cart?);"'; 
                        htm_cart+='title="Remove This Item" href="http://alex.christopherbunk.com/magento/checkout/cart/delete/id/12/uenc/aHR0cDovL2FsZXguY2hyaXN0b3BoZXJidW5rLmNvbS9tYWdlbnRvL2Nsb3RoaW5nL2RyZXNzZXMuaHRtbA,,/">Remove This Item</a>';
                        htm_cart+='<a class="btn-edit" title="Edit item" href="http://alex.christopherbunk.com/magento/checkout/cart/configure/id/12/">Edit item</a>';
                        htm_cart+='<p class="product-name"><a href="http://alex.christopherbunk.com/magento/zitiyas-dress.html">Zitiyas Dress</a></p><strong>1</strong> x <span class="price">$399.00</span>';                    
                        htm_cart+='</div></li>';
        }
    );
</script>
<?php }?>
