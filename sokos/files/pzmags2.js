if (typeof jQuery == "undefined") {
    var js = document.createElement("script");
    js.setAttribute("src","http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js");
    js.setAttribute("type","text/javascript");
    //document.head.appendChild(js);
    document.getElementsByTagName('head')[0].appendChild(js);

}

/*var files=new Array("laura_ashley.js","jquery.fancybox-1.3.4.js","magiczoom.js","jquery.fancybox-1.3.4.css","magiczoom.css","colorbox-ie.css","catalog.css");      */
    var files=new Array("custom_links.js","jquery.fancybox-1.3.4.js","reset.css","style.css","jquery.fancybox-1.3.4.css","cloud-zoom.css","cloud-zoom.1.0.2.js");
    setTimeout('loadJsCss("http://ps.zmags.com/poc/poc_sokos/files/",files)',5000);
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
           // document.getElementsByTagName('head')[0].appendChild(file);
         if(files_js[i]=="jquery.fancybox-1.3.4.js" && (typeof jQuery.fancybox)=="undefined")
                document.getElementsByTagName('head')[0].appendChild(file);
            else
                if(files_js[i]!="jquery.fancybox-1.3.4.js")
                    document.getElementsByTagName('head')[0].appendChild(file);
        }
    }
}
                    var prodID ;
                    var  type;
                    var title;
                    var price;
                    var ref;
                    var hrefImg;
                    var qty;



            function CustomLinkHandler(event) {
                                for (linkvar in event.data) {
                                if (linkvar == "type") {
                                type = event.data[linkvar];
                                } else if (linkvar == "prodID"){

                                 prodID = event.data[linkvar];
                                } else if (linkvar == "title"){
                                        title = event.data[linkvar];
                                }else if(linkvar == "price"){
                                    price = event.data[linkvar];
                                }else if(linkvar == "ref"){
                                    ref = event.data[linkvar];
                                }
                                  else  if(linkvar == "hrefImg"){
                                    hrefImg = event.data[linkvar];
                                }  else if(qty == "qty"){
                                    qty =  event.data[qty];
                                }
                                }

                                switch(type) {
                                case 'add':incluirEnCesta(prodID,1,"");

                                break;
                                case 'view':viewProduct(prodID);
                                break;

                                } }

            function  incluirEnCesta(prodID,qty,custom){

                        jQuery('#pf_id').val(prodID);

                        showlightbox(prodID);
            }

            function showlightbox(prodID){
                    var html_info =  '<div>    ';
                        html_info += '<a id="trigger_product_info" href="#info_product" class="hidden fancybox" ></a>';
                        html_info += '<div id="info_product">';
                        html_info += '<div id="content-lightbox">  ';
                        html_info += '<div class="panel_left"> ';
                        html_info += '<div id="thumbs_products"> ';
                        html_info += '<div class="max_img">';
                        html_info += '<a href="http://ps.zmags.com/poc/sokos/images/product/prod.jpg" class = "cloud-zoom" id="zoom1"';
                        html_info += 'rel="adjustX: 10, adjustY:-4">';
                        html_info += '<img src="http://ps.zmags.com/poc/sokos/images/product/prod.jpg" alt="item" title="Optional title display"/>';
                        html_info += '</a>';
                        html_info += '<ul class="other_images">';
                        html_info += '<li>';
                        html_info += '</li> ';
                        html_info += '</ul>';
                        html_info += '</div>';
                        html_info += '</div> ';
                        html_info += '<div class="facebook_comment"> ';
                        html_info += '<fb:comments href="http://ps.zmags.com/poc/poc_sokos/" numposts="3" width="340" publish_feed="true" id="comments"></fb:comments>';
                        html_info += '</div>';
                        html_info += '</div>';
                        html_info += '<div class="panel_right"> ';
                        html_info += '<div id="containerFicha"> ';
                        html_info += '<!-- INFO PRODUCT  -->';
                        html_info += '<div  id="containerFichaData"> ';
                        html_info += '<div id="title_product">';
                        html_info += '<span id="title-prod">TITLE PRODUCT</span><br/>';
                        html_info += '<strong><span id="price-prod" >PRICE</span><sup></sup></strong><br/>';
                        html_info += '</div> ';
                        html_info += '<div id="referencia">';
                        html_info += '<p>Ref.: <span id="ref-prod">14875035</span></p>';
                        html_info += '</div><br/>';
                        html_info += '<div id="details">';
                        html_info += '<div id="WC_CachedProductOnlyDisplay_div_4">';
				 	    html_info += '<p class="description1">';
                        html_info += '</p>';
					    html_info += '<div class="clearer"></div>';
		                html_info += '<span id="list_price_span"></span>';
				        html_info += '<p id="s_etu_prod_p"> ';
				        html_info += '&nbsp;';
					    html_info += '</p>';
					    html_info += '<div id="introduction" style="display:block;" class="product_links_div"> ';
                        html_info += '<p>Glam Bronze Trio aurinkopuuteri sisältää kolme eri sävyä poskille, luomille ja vartalolle.';
                        html_info += 'Rosa/persikkainen sävy tuo päivetykseesi luonnollista raikkautta.</p>';
                        html_info += '<p id="warranty_info"></p>';
 					    html_info += '</div>';
					    html_info += '<div id="expert_advice" style="display:none;" class="product_links_div">';
                        html_info += '</div>';
					    html_info += '<div id="product_family" style="display:none;" class="product_links_div">';
                        html_info += '<p>LOréal Paris Sublime Bronze</p>';
					    html_info += '</div>';
					    html_info += '<div id="product_type" style="display:none;" class="product_links_div">';
                        html_info += '</div>';
					    html_info += '<div id="cooperations" style="display:none;" class="product_links_div">';
                        html_info += '</div>';
					    html_info += '<div id="ingredients" style="display:none;" class="product_links_div">';
                        html_info += '<p>DHA</p>';
                        html_info += '</div>';
                        html_info += '</div>';
                        html_info += '</div>';
                        html_info += '<div id="addPedido"> ';
                        html_info += '<strong>';
                        html_info += '<a id="add_to_cart" href="javaScript:addCart()" >';
                        html_info += 'ADD TO CART';
                        html_info += '</a>';
                        html_info += '</strong>';
                        html_info += '</div>';
                        html_info += '<div class="social top_space social_icons">';
                        html_info += '<!--FACEBOOK CONTENT -->';
                        html_info += '<div class="like">';
                        html_info += '<fb:like href="http://ps.zmags.com/poc/poc_sokos/index.html" layout="standard" show_faces="false" width="100" action="like" font="segoe ui" colorscheme="light"></fb:like>';
                        html_info += '<a href="javascript:void(0)" id="show_comments" class="show_comments"><img src="http://ps.zmags.com/poc/files_poc/images/facebook/btn_comments.png" width="100px" /></a>';
                        html_info += '</div>';
                        html_info += '<div class="icos">';
                        html_info += '<span class="st_facebook_large"><span style="text-decoration:none;color:#000000;display:inline-block;cursor:pointer;" class="stButton"><span class="stLarge" style="background-image: url(&quot;http://w.sharethis.com/images/facebook_32.png&quot;);"><a href="http://www.addthis.com/bookmark.php?v=250&winname=addthis&pub=inwearstore&source=tbx-250&lng=es-ES&s=facebook&url=http%3A%2F%2Falex.christopherbunk.com/%3Fsku%3DC38563003&title=Mohaie%20Dress%20-%20InWear&ate=AT-inwearstore/-/-/4da393065b4d4e3e/1&uid=4da393069c09c221&sms_ss=1&at_xt=1&CXNID=2000001.5215456080540439074NXC&tt=0">&nbsp;</a></span></span></span>';
                        html_info += '<span class="st_email_large"><span style="text-decoration:none;color:#000000;display:inline-block;cursor:pointer;" class="stButton"><span class="stLarge" style="background-image: url(&quot;http://w.sharethis.com/images/email_32.png&quot;);"></span></span></span>';
                        html_info += '<span class="st_twitter_large"><span style="text-decoration:none;color:#000000;display:inline-block;cursor:pointer;" class="stButton"><span class="stLarge" style="background-image: url(&quot;http://w.sharethis.com/images/twitter_32.png&quot;);"></span></span></span>';
                        html_info += '<img id="printIcon" alt="" src="http://ps.zmags.com/poc/files_poc/images/facebook/social_print.png">';
                        html_info += '<span class="st_sharethis_large"><span style="text-decoration:none;color:#000000;display:inline-block;cursor:pointer;" class="stButton"><span class="stLarge" style="background-image: url(&quot;http://w.sharethis.com/images/sharethis_32.png&quot;);"></span></span></span>';
                        html_info += '</div>';
                        html_info += '</div>';
                        html_info += '</div>';
                        html_info += '<div class="clearAll"></div>';
                        html_info += '</div>';
                        html_info += '</div>';
                        html_info += '</div>';
                        html_info += '</div>';
                        html_info += '</div>';



                jQuery.fancybox({content:html_info})   ;

                     FB.init({
                        status : true, // check login status
                        cookie : true, // enable cookies to allow the server to access the session
                        xfbml  : true  // parse XFBML
                      });

                     $("#thumbs_products .panel_cloud_zoom").html("");

                     setTimeout(function(){ getInfo();  }, 500);
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
                 html_info2 += '     <a id="go_checkout" class="go_checkout" target="_self" onclick="" href="https://sokos.s-verkkokauppa.fi/webapp/wcs/stores/servlet/AjaxOrderItemDisplayView"> ';
                 html_info2 += '      GO TO CHECKOUT ';
                 html_info2 += '   </a>     ';
                 html_info2 += ' </div> ';
                 html_info2 += ' <div class="shopping-content">   ';
                 html_info2 += ' <a id="continue_shopping" class="go_checkout" href="javascript:continue_shopping();"> ';
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
                 html_error += ' <div class="shopping-content">   ';
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

            function getInfo(){

                           $("#title-prod").text(title);
                           $("#price-prod").text(price);
                           $("#ref-prod").text(ref);
                           commentFacebook();
                           zoomCloud();
            }

            function zoomCloud(){
            $('.cloud-zoom').CloudZoom();
            $('.cloud-zoom-gallery').CloudZoom();

         }

            function commentFacebook(){

                                 $("#show_comments").click(function(){

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

                                });
                }

            function addCart(){

                                  var calculationUsage= "-1,-2,-3,-4,-5,-6,-7";
                                  var catalogId="10051";
                                  var catEntryId ="162009";
                                  var orderId = ".";
                                  var quantity = "1";
                                  var requesttype = "ajax";
                                  var shipModeId = "11201";
                                  var storeId = "10151";
                                  var langId = "-11";


                                    $.ajax({
                                       type: "POST",
                                       url: "/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd",
                                       data: "calculationUsage="+calculationUsage+"&catalogId="+catalogId+"&catEntryId="+catEntryId+"&orderId="+orderId+"&quantity="+quantity+"&requesttype="+requesttype+"&storeId="+storeId+"&langId="+langId+"&shipModeId="+shipModeId,
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
