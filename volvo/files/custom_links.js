loadZmagsCatalog();

function viewProduct(prodID){
   var html_info= '<div >';
       html_info+= '  <a id="trigger_product_info" href="#info_product" class="hidden fancybox" ></a>';
       html_info+= ' <div id="info_product"> ';
       html_info+= '<div id="content-lightbox">';
       html_info+= '<!--PANEL LEFT-->';
       html_info+= '<div class="panel_left">';
       html_info+= '<div id="thumbs_products">';
       html_info+= '<!--imagen-->';
       html_info+= '<div class="max_img">';
       html_info+= '<!--****************ADD IMAGES HERE*********************-->';
       html_info+= '<a href="http://ps.zmags.com/poc/volvo/images/producto/head-large.jpg" class = "cloud-zoom" id="zoom1"';
       html_info+= 'rel="adjustX: 10, adjustY:-4">';
       html_info+= '<img src="http://ps.zmags.com/poc/volvo/images/producto/head-large.jpg" alt="item" title="Cappuccino Youth Cap"/>';
       html_info+= '</a>';
       html_info+= '<!--OTHER IMAGES-->';
       html_info+= '<ul class="other_images">';
       html_info+= '</ul>';
       html_info+= '<!--END OTHER IMAGES -->';
       html_info+= '<!--****************END IMAGES HERE*********************-->';
       html_info+= '</div>';
       html_info+= '</div>';
       html_info+= '<!--*******************facebook comments********************************-->';
       html_info+= '<div class="facebook_comment">';
       html_info+= '<div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#appId=111957155553112&amp;xfbml=1"></script>';
       html_info+= '<fb:comments href="http://ps.zmags.com/poc/volvo/index.html" numposts="3" width="340" publish_feed="true" id="comments"></fb:comments>';
       html_info+= '</div>';
       html_info+= '<!--************************end facebook comments*****************************************-->';
       html_info+= '</div>';
       html_info+= '<!--END PANEL LEFT-->';
       html_info+= '<!--PANEL RIGHT-->';
       html_info+= '<div class="panel_right">';
       html_info+= '<div id="containerFicha">';
       html_info+= '<!-- INFO PRODUCT  -->';
       html_info+= '<div  id="containerFichaData">';
       html_info+= '<div id="title_product">';
       html_info+= '<span id="title-prod">Cappuccino Youth Cap </span><br/>';
       html_info+= '<strong><span id="price-prod" >89</span><sup>00c</sup></strong><br/>';
       html_info+= '</div>';
       html_info+= '<div id="referencia">';
       html_info+= '<p>Article Number: <span id="ref-prod">  14229</span></p>';
       html_info+= '</div><br/>';
       html_info+= '<div id="details">';
       html_info+= 'Designer baseball cap in jubilee brushed 100% cotton. Fashionable protection from the sun. Ages 7-14.';
       html_info+= 'One size, velcro-adjustable at back.';
       html_info+= '</div>';
       html_info+= '<!--  END INFO PRODUCT -->';
       html_info+= '<!-- BUTTON OF CONFIRMATION-->';
       html_info+= '<div id="addPedido">';
       html_info+= '<strong>';
       html_info+= '<a id="add_to_cart" href="javascript:clickCart();">';
       html_info+= 'ADD TO CART';
       html_info+= '</a>';
       html_info+= '</strong>';
       html_info+= '</div>';
       html_info+= '<!-- END BUTTON CONFIRMATION-->';
       html_info+= '<div class="social top_space social_icons">';
       html_info+= '<!--FACEBOOK CONTENT -->';
       html_info+= '<div class="like">';

       html_info+= '<fb:like href="http://ps.zmags.com/poc/volvo/index.html" layout="standard" show_faces="false" width="100" action="like" font="segoe ui" colorscheme="light"></fb:like>';

       html_info+= '<a href="javascript:void(0)" id="show_comments" class="show_comments"><img src="http://ps.zmags.com/poc/files_poc/images/facebook/btn_comments.png" width="100px" /></a>';
       html_info+= '</div>';
       html_info+= '<div class="icos">';
       html_info+= '<span class="st_facebook_large"><span style="text-decoration:none;color:#000000;display:inline-block;cursor:pointer;" class="stButton"><span class="stLarge" style="background-image: url(&quot;http://w.sharethis.com/images/facebook_32.png&quot;);"><a href="http://www.addthis.com/bookmark.php?v=250&winname=addthis&pub=inwearstore&source=tbx-250&lng=es-ES&s=facebook&url=http%3A%2F%2Fps.zmags.com/poc/volvo/%3Fsku%3DC38563003&title=Mohaie%20Dress%20-%20InWear&ate=AT-inwearstore/-/-/4da393065b4d4e3e/1&uid=4da393069c09c221&sms_ss=1&at_xt=1&CXNID=2000001.5215456080540439074NXC&tt=0">&nbsp;</a></span></span></span>';
       html_info+= '<span class="st_email_large"><span style="text-decoration:none;color:#000000;display:inline-block;cursor:pointer;" class="stButton"><span class="stLarge" style="background-image: url(&quot;http://w.sharethis.com/images/email_32.png&quot;);"></span></span></span>';
       html_info+= '<span class="st_twitter_large"><span style="text-decoration:none;color:#000000;display:inline-block;cursor:pointer;" class="stButton"><span class="stLarge" style="background-image: url(&quot;http://w.sharethis.com/images/twitter_32.png&quot;);"></span></span></span>';
       html_info+= '<img id="printIcon" alt="" src="http://ps.zmags.com/poc/files_poc/images/facebook/social_print.png">';
       html_info+= '<span class="st_sharethis_large"><span style="text-decoration:none;color:#000000;display:inline-block;cursor:pointer;" class="stButton"><span class="stLarge" style="background-image: url(&quot;http://w.sharethis.com/images/sharethis_32.png&quot;);"></span></span></span>';
       html_info+= '</div>';
       html_info+= '</div>';
       html_info+= '<!--END FACEBOOK CONTENT -->';
       html_info+= '</div>';
       html_info+= '<div class="clearAll"></div><!-- FIX Firefox  -->';
       html_info+= '</div>';
       html_info+= '</div>';
       html_info+= '<!--END PANEL RIGHT-->';
       html_info+= '</div>';
       html_info+= '</div>';
       html_info+= '</div>';

  jQuery.fancybox({content:html_info})   ;
    FB.init({
                        status : true, // check login status
                        cookie : true, // enable cookies to allow the server to access the session
                        xfbml  : true  // parse XFBML
                      });

}
function showlightbox2(){

     var html_info2 = ' <!-- CONTENT LIGHT BOX--> ';
     html_info2 += '<div>   ';
     html_info2 += '  <a id="trigger_product_info2" href="#info_product2" class="hidden fancybox"></a> ';
     html_info2 += '<div id="info_product2">  ';
     html_info2 += '<div id="content-lightbox2">  ';
     html_info2 += '<div class="panel_message"> ';
     html_info2 += '      <div id="message_text"> ';
     html_info2 += '    You added (1) products to your cart. ';
     html_info2 += '   </div>  ';
     html_info2 += ' <div id="content_buttons">  ';
     html_info2 += '   <div class="checkout-content">   ';
     html_info2 += '     <a id="go_checkout" class="go_checkout" target="_blank" onclick="" href="http://www.volvomerchandise.com/catalog/basket/"> ';
     html_info2 += '      GO TO CHECKOUT ';
     html_info2 += '   </a>     ';
     html_info2 += ' </div> ';
     html_info2 += ' <div class="shopping-content">   ';
     html_info2 += ' <a id="continue_shopping" class="go_checkout" href="#"> ';
     html_info2 += '      CONTINUE SHOPPING  ';
     html_info2 += ' </a>   ';
     html_info2 += '</div> ';
     html_info2 += '</div>   ';
     html_info2 += '  <div class="clearAll"></div>   ';
     html_info2 += '</div>';
     html_info2 += ' </div>';
     html_info2 += ' </div>';
     html_info2 += '</div>';
     jQuery.fancybox({content:html_info2})   ;
                }
function showLightBoxError(error){

              var html_error = ' <!-- CONTENT LIGHT BOX--> ';
                 html_error += ' <div>   ';
                 html_error += ' <div id="info_product2">  ';
                 html_error += ' <div id="content-lightbox2">  ';
                 html_error += ' <div class="panel_message"> ';
                 html_error += ' <div id="message_text"> ';
                 html_error += ' <h2> '+error+' </h2>';
                 html_error += ' </div>  ';
                 html_error += ' <div id="content_buttons">  ';
                 html_error += ' <div class="shopping-content error">   ';
                 html_error += ' <a id="continue_shopping" class="go_checkout" href="javascript:continue_shopping();"> ';
                 html_error += ' CONTINUE SHOPPING  ';
                 html_error += ' </a>   ';
                 html_error += ' </div> ';
                 html_error += ' </div>   ';
                 html_error += '  <div class="clearAll"></div>   ';
                 html_error += ' </div>';
                 html_error += ' </div>';
                 html_error += ' </div>';
                 html_error += ' </div>';

                  jQuery.fancybox({content:html_error})   ;

}
function getInfo(prodID,name,price,details){

     $("#title-prod").text(name);
     $("#price-prod").text(price);
     $("#details").text(details);

            }
function zoomCloud(){
                    $('.cloud-zoom').CloudZoom();
                    $('.cloud-zoom-gallery').CloudZoom();
                 }
function getImage(){

           $("#thumbs_products .panel_cloud_zoom").html("<a href='http://ps.zmags.com/poc/margareta/images/producto/"+hrefImg+"-large.jpg' class = 'cloud-zoom' id='zoom1'"+
            "rel='adjustX: 10, adjustY:-4'>"+
            "<img src='http://ps.zmags.com/poc/margareta/images/producto/"+hrefImg+".jpg' alt='item' title='Optional title display'/>"+
            "</a>");

            }
function commentFacebook(){

                                 $("#show_comments").click(
                                    function(){

                                        if($(this).hasClass("show_comments"))
                                        {
                                           $(this).children("img").attr("src","http://ps.zmags.com/poc/files_poc/images/facebook/btn_hidecomments.png");
                                           $(this).removeClass("show_comments");
                                           $(this).addClass("hide_comments");
                                        }
                                        else
                                        {
                                            $(this).children("img").attr("src","http://ps.zmags.com/poc/files_poc/images/facebook/btn_comments.png");
                                            $(this).removeClass("hide_comments");
                                            $(this).addClass("show_comments");
                                        }

                                        $("#comments").slideToggle("slow");
                                        $("#thumbs_products").slideToggle("thumbs_products");

                                }
                            );
                }
function clickCart(){
                                  var ColorID = "78";
                                  var ConfigID = "10";
                                  var SearchString = "";
                                  var SizeID ="";
                                  var __ASYNCPOST = true;
                                  var __EVENTARGUMENT = "14229";
                                  var __EVENTTARGET = "UpdatePanel1";
                                  var __EVENTVALIDATION = "/wEWCQLr29KRAwKg+MqeBgKqpa+4CwKk3arGBALVxZryBwL6z4OuDAK8spXWBgK/sYvoCQKZ6eHUDTSc3YH61ODPC6TDdjk5F0ezs/HU";
                                  var __VIEWSTATE = "/wEPDwUKLTMxNjc3NTM3NQ9kFgJmD2QWAmYPZBYEZg9kFgRmDxUDKi9jc3MvSm9pbi5hc2h4P1NpdGVJRD0wMDQmYW1wO1N0eWxlSUQ9MTAwMQ8vY3NzL2llNmZpeC5jc3MOL2Nzcy9wcmludC5jc3NkAgUPZBYCZg8VAQBkAgIPFgIeBmFjdGlvbgU7L2RldGFpbHMvY2xvdGhpbmctaGVhZHdlYXIvcHJvZHVjdC8xNDIyOS9UcnVja3MgQ29sbGVjdGlvbi9kZPhv7mkFGIE1qM9BVXuJ/bPXwlYg";
                                  var ctl00$ctl00$ScriptManager1 = "ctl00$ctl00$ScriptManager1|UpdatePanel1";
                                  var ctl00$ctl00$hidColorID = "78";
                                  var ctl00$ctl00$hidCombPrice = "89,00";
                                  var ctl00$ctl00$hidConfigID = "10";
                                  var ctl00$ctl00$hidDiscount = "";
                                  var ctl00$ctl00$hidQty = "1";
                                  var ctl00$ctl00$hidSizeID = "";
                                  var ctl00$ctl00$hidStockCode = "";
                                  var ctl00$ctl00$hidStockCodeQtyString = "";
                                  var variant_qtyunit_0 = "1";
                                  var variant_quantity_0 = "1";

                                    $.ajax({
                                       type: "POST",
                                       url: "ajax.php",
                                       data: "ColorID="+ColorID+"&ConfigID="+ConfigID+"&SearchString="+SearchString+"&SizeID="+SizeID+"&__ASYNCPOST="+__ASYNCPOST+"&__EVENTARGUMENT="+__EVENTARGUMENT+"&__EVENTTARGET="+__EVENTTARGET+"&__EVENTVALIDATION="+__EVENTVALIDATION+"&__VIEWSTATE="+
                                               __VIEWSTATE+"&ctl00$ctl00$ScriptManager1="+ctl00$ctl00$ScriptManager1+"&ctl00$ctl00$hidColorID="+ctl00$ctl00$hidColorID+"&ctl00$ctl00$hidCombPrice="+ctl00$ctl00$hidCombPrice+"&ctl00$ctl00$hidConfigID="+ctl00$ctl00$hidConfigID+
                                               "&ctl00$ctl00$hidDiscount="+ctl00$ctl00$hidDiscount+"&ctl00$ctl00$hidQty="+ctl00$ctl00$hidQty+"&ctl00$ctl00$hidSizeID="+ctl00$ctl00$hidSizeID+"&ctl00$ctl00$hidStockCode="+ctl00$ctl00$hidStockCode+"&ctl00$ctl00$hidStockCodeQtyString="+ctl00$ctl00$hidStockCodeQtyString+
                                                "&variant_qtyunit_0="+variant_qtyunit_0+"&variant_quantity_0="+variant_quantity_0,
                                       success: function(msg){
                                           msg= msg.replace('/*','').replace('*/','') ;
                                           var obj = jQuery.parseJSON(msg);
                                           var error = obj.errorMessage;

                                           if(error){
                                            showLightBoxError(error);
                                           }else{
                                               showlightbox2();
                                           }
                                           }
                                     });



        }

 function continue_shopping(){
       $.fancybox.close();
 }

