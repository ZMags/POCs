<?php
	header("Access-Control-Allow-Origin: *");
	header("Allow-Control-Allow-Methods: OPTIONS, GET, POST, PUT, DELETE"); 
	header("Access-Control-Allow-Headers: X-CUSTOM");
	header("Access-Control-Max-Age: 1500000");
	header("Content-Type: text/plain");
?>
<style>.overflowV{  *overflow: hidden !important;  }</style>

<script type="text/javascript">

            jQuery(function($)   //fix for fancy box overflow hidden?
        {

            var intervarll = setInterval(function()
            {
                if(jQuery('#fancybox-content').size())
                {
                    clearInterval(intervarll);
                    jQuery('#fancybox-content').children().addClass('overflowV');
                }
            }, 500);

        });


            function zoomCloud(){

                    $('.cloud-zoom').CloudZoom();
                    $('.cloud-zoom-gallery').CloudZoom();
                 }
    zoomCloud();

           jQuery('.content_customer').click(function(){

                jQuery('.panel_costumers').slideToggle('slow');


        });

       var src = new Array();
                src[0] = new Array("http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_NA0965.tif&width=430&height=570&effects=sharpen(20)&quality=88&profile=jpeg","http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_NA0965.tif&width=700&height=700&effects=sharpen(20)&quality=88&profile=jpeg");
                src[1] = new Array("http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_GY6501.tif&width=430&height=570&effects=sharpen(20)&quality=88&profile=jpeg","http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_GY6501.tif&width=700&height=700&effects=sharpen(20)&quality=88&profile=jpeg");
                src[2] = new Array("http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_WT0002.tif&width=430&height=570&effects=sharpen(20)&quality=88&profile=jpeg","http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_WT0002.tif&width=700&height=700&effects=sharpen(20)&quality=88&profile=jpeg");
                src[3] = new Array("http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_BR1160.tif&width=430&height=570&effects=sharpen(20)&quality=88&profile=jpeg","http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_BR1160.tif&width=700&height=700&effects=sharpen(20)&quality=88&profile=jpeg");
                src[4] = new Array("http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_PK5950.tif&width=430&height=570&effects=sharpen(20)&quality=88&profile=jpeg","http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_PK5950.tif&width=700&height=700&effects=sharpen(20)&quality=88&profile=jpeg");
                src[5] = new Array("http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_GR6563.tif&width=430&height=570&effects=sharpen(20)&quality=88&profile=jpeg","http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_GR6563.tif&width=700&height=700&effects=sharpen(20)&quality=88&profile=jpeg");
                src[6] = new Array("http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_RD5798.tif&width=430&height=570&effects=sharpen(20)&quality=88&profile=jpeg","http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_RD5798.tif&width=700&height=700&effects=sharpen(20)&quality=88&profile=jpeg");
                src[7] = new Array("http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_YL5338.tif&width=430&height=570&effects=sharpen(20)&quality=88&profile=jpeg","http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_YL5338.tif&width=700&height=700&effects=sharpen(20)&quality=88&profile=jpeg");
                src[8] = new Array("http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_PK5950.tif&width=430&height=570&effects=sharpen(20)&quality=88&profile=jpeg","http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_PK5950.tif&width=700&height=700&effects=sharpen(20)&quality=88&profile=jpeg");
                src[9] = new Array("http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_GR6563.tif&width=430&height=570&effects=sharpen(20)&quality=88&profile=jpeg","http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_GR6563.tif&width=700&height=700&effects=sharpen(20)&quality=88&profile=jpeg");


       var color = new Array();
                color[0] = "stone";
                color[1] = "shadow";
                color[2] = "white";
                color[3] = "khaki";
                color[4] = "shocking pink";
                color[5] = "ceylon tea";
                color[6] = "modern red";
                color[7] = "lacquer yellow";


     $(".customize_selector select").change(function () {
          var str = "";
          $(".customize_selector select option:selected").each(function () {
                str += $(this).text() + " ";
              });

                      for (var i=0; i<color.length ;i++){

                            if($.trim(str)==$.trim(color[i])){

                                $('.select_color').text(color[i]);        //change select color text in the price

                                $('.main_image img').attr('src',src[i][0]) ;         //change image of product for the color select
                                $('.main_image a').attr('href',src[i][1]) ;           //change image zoom for the cloudzoom library  for the color select

                                $('.cloud-zoom').CloudZoom();
                                $('.cloud-zoom-gallery').CloudZoom();

                }
            }

        });


</script>

<div class="main">

    <div class="top">
        <div class="j_Crew"></div>
    </div>
    
    <div class="center">
         
         <div class="main_left">

            <div class="main_image">

                    <a href='http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_NA0965.tif&width=700&height=700&effects=sharpen%2820%29&quality=88&profile=jpeg' class = 'cloud-zoom' id='zoom1'
                       rel="adjustX: 10, adjustY:-4,position: 'inside',showTitle: false">
                       <img src="http://images.jcrew.com/fsi/server?type=image&source=images/eiec/35/35756/35756_NA0965.tif&width=430&height=570&effects=sharpen(20)&quality=88&profile=jpeg" alt='item' title="Optional title display"/>
                    </a>

            </div>

            <div class="panel_costumers">

                <div class="content_costumers_products">

                     <div class="console_product">

                         <div class="consumer_img_content">

                             <img src="http://images.jcrew.com/fsi/server?type=image&source=images/onFigure/38/38842/38842_GY5881_m.tif&width=64&height=83&effects=sharpen(20)&quality=88&profile=jpeg" alt="">

                         </div>

                         <div class="description_consumer_product">

                             <span>Linen bermuda short</span>

                             <div class="price_consumer">$64.50</div>

                             <span class="select_color_consumer"></span>

                         </div>
                     </div>

                     <div class="console_product">

                         <div class="consumer_img_content">

                             <img src="http://images.jcrew.com/fsi/server?type=image&source=images/onFigure/34/34487/34487_GY6479_m.tif&width=64&height=83&effects=sharpen(20)&quality=88&profile=jpeg" alt="">

                         </div>

                         <div class="description_consumer_product">

                             <span>About town leggings</span>

                             <div class="price_consumer">$78.00</div>

                             <span class="select_color_consumer"></span>

                         </div>
                     </div>

                    <div class="console_product">

                         <div class="consumer_img_content">

                             <img src="http://images.jcrew.com/fsi/server?type=image&source=images/onFigure/51/51423/51423_KE0051_m.tif&width=64&height=83&effects=sharpen(20)&quality=88&profile=jpeg" alt="">

                         </div>

                         <div class="description_consumer_product">

                             <span>Deck-stripe boater tee</span>

                             <div class="price_consumer">$64.00</div>

                             <span class="select_color_consumer"></span>

                         </div>
                     </div>


                </div>
            </div>

         </div>
         
         <div class="main_right">

             <div class="name_product">7" chino short</div>

            <div class="price_container">

                        <div class="price_product">was $45.00</div>
                        <div class="price_select_color">select colors $14.99</div>
                        <div class="item_code">item 35756</div>

            </div>

            <div class="tabs_container">
                
                <div class="description">
                       Your favorite cottton twill chino short is back -update with subtle new style details. City fit-our lowest</br>
                       <div class="more_details">More...</div>
                </div>

                <div class="line_separator"></div>

                
            </div>
            
            <div class="customize_container">
            
                <h2>* You must fill in size</h2>
                
                <div class="custom_left">
                    
                    <div class="customize_add">

                        <div class="customize_selector_size">

                            <select>
                                <option>select size</option>

                                <option value="00">00</option>

                                <option value="SIZE 0">SIZE 0</option>

                                <option value="2">2</option>

                                <option value="4">4</option>

                                <option value="6">6</option>

                                <option value="8">8</option>

                                <option value="10">10</option>

                                <option value="12">12</option>

                                <option value="14">14</option>

                                <option value="16">16</option>


                            </select>

                            <span>size charts</span>
                        </div>

                        <div class="customize_selector">

                            <select>

						    <option  value="STONE">stone</option>

						    <option  value="SHADOW">shadow</option>

						    <option  value="WHITE">white</option>

						    <option  value="KHAKI">khaki</option>

						    <option  value="MODERN RED">modern red</option>

						    <option  value="LACQUER YELLOW">lacquer yellow</option>

						    <option  value="SHOCKING PINK">shocking pink</option>

						    <option  value="CEYLON TEA">ceylon tea</option>

                            </select>

                            <div class="color_select">

                                <div class="color_text">color:</div><div class="select_color">stone</div>

                            </div>
                        </div>

                    </div>
                    
                    <div class="customize_quantity">

                        <input type="text" name="" value="1" />
                        <span>quantity</span>

                    </div>
                    
                </div>
                
                <div class="custom_right">

                    <div class="addtocart">ADD TO BAG</div>

                
                </div>
            
            </div>
            
         </div>
         
    </div>

    <div class="bottom">

        <div class="content_customer">
             <span>+</span><div class="button_costumer">Costumers also love</div>
        </div>

    </div>

</div>
