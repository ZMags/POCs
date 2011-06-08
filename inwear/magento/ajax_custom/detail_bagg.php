<?php
header("Access-Control-Allow-Origin: *");
header("Allow-Control-Allow-Methods: OPTIONS, GET, POST, PUT, DELETE"); 
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");

// get parameters from an ajax call in IE8 cross domain

if (isset($HTTP_RAW_POST_DATA)) {
    $data = explode('&', $HTTP_RAW_POST_DATA);
    foreach ($data as $val) {
        if (!empty($val)) {
            list($key, $value) = explode('=', $val);   
            $_POST[$key] = urldecode($value);
        }
    }
	$partner="=".$_POST["partner"];
}


?>

<div class="box_add_cart">
    <div class="minicart-wrp">
		<div class="minicart-content-wrapper" style="display: block;">
			<h1 class="minicart-heading">Just Added to Your Bag</h1>		
			<div id="minicart-lines"><div class="minicart-line-loader" style="display: none;"></div>
				<div class="minicart-line-content">
					<div class="minicart-product-line">
						<a href="<?php echo $_POST['url_p'].$partner ?>" class="minicart-img">
                            <img class="minicart-image" title="<?php echo $_POST['name']; ?>" alt="<?php echo $_POST['name']; ?>" src="http://static.inwear.com/static/img/catalog/INWEAR/mini/<?php  echo $_POST['img'];?>"/>
                        </a>
						<div class="minicart-details">
							<h2><?php echo $_POST['name']; ?></h2>
							<div class="minicart-unit-price"><?php echo number_format($_POST['price'], 2, ",", ",")?> <?php echo $_POST['currency']?> </div>
							<div class="minicart-data-list">
								<ul class="minicart-line-content-details">
                                    <li>colour:<strong>
                                            <a href="javascript:void(0)" class="option-1 selected-color" style="border-color: rgb(0, 0, 0);">
                                            <img alt="<?php echo $_POST['color'];?>" src="http://alex.christopherbunk.com/magento/skin/frontend/default/default/css/colors/<?php echo trim($_POST['color'])?>.jpg" />
                                      </a></strong></li>
                                    <li>size:<strong> <?php echo $_POST['size'];?></strong></li>
									<?php if(trim($_POST['lenght']) != "undefined"): ?>
										<li>length:<strong> <?php echo $_POST['lenght'];?></strong></li>
									<?php endif ?>
                                </ul>
								<div id="minicart-qty">Qty: <strong><?php echo $_POST['qty'];?></strong></div>
								<div class="minicart-services"></div>
							</div>
						</div>
					</div>
					<p class="item-sku"><?php  echo $_POST['sku'];?></p>
					<img title="" alt="" class="minicart-product-swatch" src="http://static.inwear.com/static/img/catalog/INWEAR/mini/<?php  echo $_POST['img'];?>.png"/>
					<div class="minicart-total-price">1.998,00 DKK</div>
				</div></div>
			<table id="minicart-summary">
				<tbody><tr>
					<td><span>Your shopping bag contains:</span></td>
					<td class="minicart-line-prices"><span id="minicart-total-qty" class="minicart-quantity"><?php echo $_POST['total_items'];?> ITEMS</span></td>
				</tr>
				<tr>
					<td class="subtotal">Merchandise subtotal:</td>
					<td id="minicart-subtotal" class="minicart-line-prices"><?php 
                                echo number_format($_POST['subtotal'], 2, ",", ",") . " " . $_POST['currency'];
                    ?></td>
				</tr>
				<tr>
					<td>Standard Shipping:</td>
					<td id="minicart-ship" class="minicart-line-prices"><?php echo $_POST['shipping']?number_format($_POST['shipping'], 2, ",", ","):"0"; ?> <?php echo $_POST['currency']?></td>
				</tr>
				<tr class="last_row">
					<td><span>Estimated total:</span></td>
					<td class="minicart-line-prices"><span id="minicart-grandtotal"><?php echo number_format($_POST['grand_total'], 2, ",", ",") . " " . $_POST['currency'];?></span></td>
				</tr>
			</tbody></table>
		
		</div>
		</div>
		<div style="clear:both;width:530px;margin:0 auto">
        <h2>The item has been  added to your bag</h2>
		
		<div style="clear:both;width:530px;margin:0 auto;margin-bottom:10px">
			<a style="float:left;margin: 0px 10px 0px 44px" href="https://www.inwear.com/<?php //echo $_POST['se']?>/bag/?partner=<?php echo $_POST['partner']?>" class="button1 continue_shopp">PROCEED TO CHECKOUT</a>
			<a style="float:left" href="javascript:jQuery.fancybox.close();" class="button1 continue_shopp">CONTINUE SHOPPING</a>
		</div>
        <!--<div class="product-link-footer">or <a href="javascript:jQuery.fancybox.close();" class="continue_shopp" >Continue Shopping</a></div>-->
		</div>
</div>