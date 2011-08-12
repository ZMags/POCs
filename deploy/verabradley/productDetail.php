<?php
	header("Access-Control-Allow-Origin: *");
	header("Allow-Control-Allow-Methods: OPTIONS, GET, POST, PUT, DELETE"); 
	header("Access-Control-Allow-Headers: X-CUSTOM");
	header("Access-Control-Max-Age: 1500000");
	header("Content-Type: text/plain");
?>
    <link href="http://psdev.zmags.com/poc/deploy/verabradley/100811/css/cloud-zoom.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="http://psdev.zmags.com/poc/deploy/verabradley/100811/css/coda-slider-2.0.css" type="text/css" media="screen" />

    <script src="http://psdev.zmags.com/poc/deploy/verabradley/100811/js/cloud-zoom.1.0.2.js" type="text/javascript"></script>

    <script type="text/javascript" src="http://psdev.zmags.com/poc/deploy/verabradley/100811/js/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="http://psdev.zmags.com/poc/deploy/verabradley/100811/js/jquery.coda-slider-2.0.js"></script>



<script type="text/javascript">
    jQuery('.zoom_more').click(function(){
                    var a = new Array();
                     a[0]=new Array(0,0,256);
                     a[1]=new Array(0,384,512);
                     a[2]=new Array(1200,1152,768);
                     a[3]=new Array(1800,1152,768);
                     a[4]=new Array(4.5,2.5,1.125);
                    var imgSelect = $('.main_image img').attr('src');
                        var cadena = imgSelect.split(',');
                        var first = cadena[0].split('=');
                        var last = cadena[3].split('&');
                        var scl = last[1].split('=');

                       /* alert(cadena[2]);
                        alert(first[1]);
                        alert(last[0]);
                        alert(scl[1]);
                        alert(last[2]);  */

                       if(first[1]==0&&cadena[1]==0){
                           var zoom_url_app = first[0]+'='+a[0][1]+','+a[1][1]+','+a[2][1]+','+a[3][1]+'&scl='+a[4][1]+'&'+last[2];
                             $('.main_image img').attr('src',zoom_url_app);
                             $('.main_image a').attr('href',zoom_url_app);
                             $('.cloud-zoom').CloudZoom();
                        } else{
                           if(first[1]==0&&cadena[1]==384){
                              var zoom_url_app2 = first[0]+'='+a[0][2]+','+a[1][2]+','+a[2][2]+','+a[3][2]+'&scl='+a[4][2]+'&'+last[2];
                               $('.main_image img').attr('src',zoom_url_app2);
                               $('.main_image a').attr('href',zoom_url_app2);
                               $('.cloud-zoom').CloudZoom();
                           }
                       }


                  /*  $('.main_image img').attr('src',src[i][0]) ;         //change image of product for the color select
                    $('.main_image a').attr('href',src[i][0]) ;           //change image zoom for the cloudzoom library  for the color select
       var zoom_url= 'http://s7d2.scene7.com/is/image/VeraBradley/11810111?rgn=0,384,1152,1152&scl=2.25&id=FfWqH1';
                     'http://s7d2.scene7.com/is/image/VeraBradley/11810111?rgn=0,0,1201,1800&scl=4.5&id=xaPqH3'
                     'http://s7d2.scene7.com/is/image/VeraBradley/11810110?rgn=256,512,768,768&scl=1.125&id=dLEqV2' */

    });

        jQuery('.zoom_minus').click(function(){
                    var a = new Array();
                     a[0]=new Array(0,0,256);
                     a[1]=new Array(0,384,512);
                     a[2]=new Array(1200,1152,768);
                     a[3]=new Array(1800,1152,768);
                     a[4]=new Array(4.5,2.5,1.125);
                    var imgSelect = $('.main_image img').attr('src');
                        var cadena = imgSelect.split(',');
                        var first = cadena[0].split('=');
                        var last = cadena[3].split('&');
                        var scl = last[1].split('=');


                       if(parseInt(first[1].trim())==256){

                           var minus_url_app2 = first[0]+'='+a[0][1]+','+a[1][1]+','+a[2][1]+','+a[3][1]+'&scl='+a[4][1]+'&'+last[2];

                             $('.main_image img').attr('src',minus_url_app2);
                             $('.main_image a').attr('href',minus_url_app2);
                             $('.cloud-zoom').CloudZoom();
                        } else{
                           if(first[1]==0&&cadena[1]==384){
                              var minnus_url_app2 = first[0]+'='+a[0][0]+','+a[1][0]+','+a[2][0]+','+a[3][0]+'&scl='+a[4][0]+'&'+last[2];
                               $('.main_image img').attr('src',minnus_url_app2);
                               $('.main_image a').attr('href',minnus_url_app2);
                               $('.cloud-zoom').CloudZoom();
                           }
                       }


                  /*  $('.main_image img').attr('src',src[i][0]) ;         //change image of product for the color select
                    $('.main_image a').attr('href',src[i][0]) ;           //change image zoom for the cloudzoom library  for the color select
       var zoom_url= 'http://s7d2.scene7.com/is/image/VeraBradley/11810111?rgn=0,384,1152,1152&scl=2.25&id=FfWqH1';
                     'http://s7d2.scene7.com/is/image/VeraBradley/11810111?rgn=0,0,1201,1800&scl=4.5&id=xaPqH3'
                     'http://s7d2.scene7.com/is/image/VeraBradley/11810110?rgn=256,512,768,768&scl=1.125&id=dLEqV2' */

    });

            jQuery('.zoom_refresh').click(function(){
                    var a = new Array();
                     a[0]=new Array(0,0,256);
                     a[1]=new Array(0,384,512);
                     a[2]=new Array(1200,1152,768);
                     a[3]=new Array(1800,1152,768);
                     a[4]=new Array(4.5,2.5,1.125);
                    var imgSelect = $('.main_image img').attr('src');
                        var cadena = imgSelect.split(',');
                        var first = cadena[0].split('=');
                        var last = cadena[3].split('&');
                        var scl = last[1].split('=');


                              var minnus_url_app2 = first[0]+'='+a[0][0]+','+a[1][0]+','+a[2][0]+','+a[3][0]+'&scl='+a[4][0]+'&'+last[2];
                               $('.main_image img').attr('src',minnus_url_app2);
                               $('.main_image a').attr('href',minnus_url_app2);
                               $('.cloud-zoom').CloudZoom();


                  /*  $('.main_image img').attr('src',src[i][0]) ;         //change image of product for the color select
                    $('.main_image a').attr('href',src[i][0]) ;           //change image zoom for the cloudzoom library  for the color select
       var zoom_url= 'http://s7d2.scene7.com/is/image/VeraBradley/11810111?rgn=0,384,1152,1152&scl=2.25&id=FfWqH1';
                     'http://s7d2.scene7.com/is/image/VeraBradley/11810111?rgn=0,0,1201,1800&scl=4.5&id=xaPqH3'
                     'http://s7d2.scene7.com/is/image/VeraBradley/11810110?rgn=256,512,768,768&scl=1.125&id=dLEqV2' */

    });

    $().ready(function() {
				$('#coda-slider-1').codaSlider();
			});

    function zoomCloud(){

                    $('.cloud-zoom').CloudZoom();
                    $('.cloud-zoom-gallery').CloudZoom();
                 }
    jQuery(document).ready(function(){

        var src = new Array();
                src[0] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810111?rgn=0,0,1201,1800&scl=4.5&id=xaPqH3 ");
                src[1] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2 ");
                src[2] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810110?rgn=0,0,1200,1800&scl=4.5&id=dLEqV2 ");
                src[3] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810107?rgn=0,0,1199,1800&scl=4.5&id=vpAq-3 ");
                src[4] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810109?rgn=0,0,1199,1800&scl=4.5&id=cIar11 ");
                src[5] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810106?rgn=0,0,1201,1800&scl=4.5&id=ns4rT3 ");
                src[6] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810103?rgn=0,0,1199,1800&scl=4.5&id=Nl1r62 ");
                src[7] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810102?rgn=0,0,1200,1800&scl=4.5&id=yRMqu0 ");
                src[8] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810105?rgn=0,0,1199,1800&scl=4.5&id=crNqw3 ");
                src[9] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810104?rgn=0,0,1198,1800&scl=4.5&id=tP9ro0 ");
                src[10] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2 ");
                src[11] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2 ");
                src[12] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2 ");
                src[13] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2 ");
                src[14] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2 ");
                src[15] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2 ");
                src[16] = new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2 ");


        var thumbs =new Array();
                thumbs[0]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810111-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810111-V2?hei=40&wid=40");
                thumbs[1]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810117-V2?hei=40&wid=40");
                thumbs[2]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810110-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810110-V2?hei=40&wid=40");
                thumbs[3]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810107-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810107-V2?hei=40&wid=40");
                thumbs[4]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810109-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810109-V2?hei=40&wid=40");
                thumbs[5]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810106-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810106-V2?hei=40&wid=40");
                thumbs[6]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810103-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810103-V2?hei=40&wid=40");
                thumbs[7]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810102-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810102-V2?hei=40&wid=40");
                thumbs[8]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810105-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810105-V2?hei=40&wid=40");
                thumbs[9]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810104-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810104-V2?hei=40&wid=40");
                thumbs[1]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810117-V2?hei=40&wid=40");
                thumbs[1]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810117-V2?hei=40&wid=40");
                thumbs[1]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117-V1?hei=40&wid=40", "http://s7d2.scene7.com/is/image/VeraBradley/11810117-V2?hei=40&wid=40");


        var zoom =new Array();
                zoom[0]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810111?rgn=0,0,1201,1800&scl=4.5&id=xaPqH3","http://s7d2.scene7.com/is/image/VeraBradley/11810111-V2?rgn=0,0,1800,1432&scl=5&id=dS-qD1");
                zoom[1]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2","http://s7d2.scene7.com/is/image/VeraBradley/11810117-V2?rgn=0,0,1800,1434&scl=5&id=FBNq50");
                zoom[2]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810110?rgn=0,0,1200,1800&scl=4.5&id=dLEqV2","http://s7d2.scene7.com/is/image/VeraBradley/11810110-V2?rgn=0,0,1800,1431&scl=5&id=UoFqE3");
                zoom[3]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810107?rgn=0,0,1199,1800&scl=4.5&id=vpAq-3","http://s7d2.scene7.com/is/image/VeraBradley/11810107-V2?rgn=0,0,1800,1435&scl=5&id=7HTqf0");
                zoom[4]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810109?rgn=0,0,1199,1800&scl=4.5&id=cIar11","http://s7d2.scene7.com/is/image/VeraBradley/11810109-V2?rgn=0,0,1800,1433&scl=5&id=xgAqu2");
                zoom[5]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810106?rgn=0,0,1201,1800&scl=4.5&id=ns4rT3","http://s7d2.scene7.com/is/image/VeraBradley/11810106-V2?rgn=0,0,1800,1431&scl=5&id=Dx8rU1");
                zoom[6]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810103?rgn=0,0,1199,1800&scl=4.5&id=Nl1r62","http://s7d2.scene7.com/is/image/VeraBradley/11810103-V2?rgn=0,0,1800,1433&scl=5&id=N3ZqK0");
                zoom[7]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810102?rgn=0,0,1200,1800&scl=4.5&id=yRMqu0","http://s7d2.scene7.com/is/image/VeraBradley/11810102-V2?rgn=0,0,1800,1433&scl=5&id=YZAqS1");
                zoom[8]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810105?rgn=0,0,1199,1800&scl=4.5&id=crNqw3","http://s7d2.scene7.com/is/image/VeraBradley/11810105-V2?rgn=0,0,1800,1437&scl=5&id=gKAqR1");
                zoom[9]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810104?rgn=0,0,1198,1800&scl=4.5&id=tP9ro0","http://s7d2.scene7.com/is/image/VeraBradley/11810104-V2?rgn=0,0,1800,1440&scl=5&id=sgOqO3");
                zoom[1]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2","http://s7d2.scene7.com/is/image/VeraBradley/11810117-V2?rgn=0,0,1800,1434&scl=5&id=FBNq50");
                zoom[1]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2","http://s7d2.scene7.com/is/image/VeraBradley/11810117-V2?rgn=0,0,1800,1434&scl=5&id=FBNq50");
                zoom[1]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2","http://s7d2.scene7.com/is/image/VeraBradley/11810117-V2?rgn=0,0,1800,1434&scl=5&id=FBNq50");
                zoom[1]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2","http://s7d2.scene7.com/is/image/VeraBradley/11810117-V2?rgn=0,0,1800,1434&scl=5&id=FBNq50");
                zoom[1]= new Array("http://s7d2.scene7.com/is/image/VeraBradley/11810117?rgn=0,0,1200,1800&scl=4.5&id=MB9rq2","http://s7d2.scene7.com/is/image/VeraBradley/11810117-V2?rgn=0,0,1800,1434&scl=5&id=FBNq50");

        var color = new Array();
                color[0] = "Happy Snails";
                color[1] = "Plum Petals";
                color[2] = "Mocha Rouge";
                color[3] = "Watercolor";
                color[4] = "Viva la Vera";
                color[5] = "Deco Daisy";
                color[6] = "English Meadow";
                color[7] = "Boysenberry";
                color[8] = "Folkloric";
                color[9] = "Blue Lagoon";
                color[10] = "Lemon Parfait";
                color[11] = "Baroque";
                color[12] = "Very Berry Paisley";
                color[13] = "Night and Day";
                color[14] = "Symphony in Hue";
                color[15] = "Twirly Birds Pink";
                color[16] = "Buttercup";




        $('.thumbs_container_colors img').click(function(){
             var imgPreview = $(this).attr('name');

             /*alert(imgPreview); */
            for (var i=0; i<color.length ;i++){
                if(imgPreview==color[i]){
                    $('.Color_select_on').text(color[i]);        //change select color text in the price
                    $('.Select_Color option').each(function(k){
                        var color_select = $(this).val();
                        if(color_select==color[i]){
                                $(this).attr('selected','selected');    //change select color in the select box
                        }
                    });
                    $('.main_image img').attr('src',src[i][0]) ;         //change image of product for the color select
                    $('.main_image a').attr('href',src[i][0]) ;           //change image zoom for the cloudzoom library  for the color select

                      $('.thumbs_container ul li').each(function (j){
                           $(this).find('img').attr('src',thumbs[i][j]);     //chan ge thumbs the product
                           $(this).find('a').attr('rel',"useZoom: 'zoom1', smallImage:'"+zoom[i][j]+"'");   //change imagen zoom of thumbs for the color select
                           $(this).find('a').attr('href',zoom[i][j]);          //change imagen zoom of thumbs for the color select
                           $('.cloud-zoom').CloudZoom();
                           $('.cloud-zoom-gallery').CloudZoom();

                        });

                }
            }

        });
        });

</script>

<div class="main">

    <div class="top">
        <div class="header_top">
                  <ul>
                    <li>
                        <span class="title_product">Chain Bag in Mocha Rouge</span>
                    </li>

                    <li>
                        <span class="divider">|</span>
                        <span class="sku_container">SKU #11810110</span>
                        <span class="divider">|</span>
                    </li>

                    <li>
                        <span class="specifications">13" x 8½" x 5" with 7" strap drop and 34¾" detachable chain strap </span>
                    </li>

                </ul>
        </div>

        <div class="description">
              A feminine-shaped handbag acquires a modern add-on in this new style. Carry the bag by its rolled handles or attach the chain shoulder strap for a completely different look.
        </div>

    </div>

    <div class="line_separator"></div>
    
    <div class="center">
         
         <div class="main_left">

            <div class="gallery_colors">
                <div class="Color_name">
                    <a href="#">Colors</a>
                </div>
                <div class="line_tabs"></div>
                <div class="coda-slider-wrapper">
                    <div class="coda-slider preload" id="coda-slider-1">

                        <div class="panel">
                            <div class="panel-wrapper thumbs_container_colors">
                                <ul>
                                    <li>

                                            <img  name="Happy Snails" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_111?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Plum Petals" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_117?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Mocha Rouge" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_110?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Watercolor" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_112?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Viva la Vera" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_112?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>


                                            <img  name="Deco Daisy" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_107?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="English Meadow" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_109?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Boysenberry" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_109?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Folkloric" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_102?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Blue Lagoon" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_105?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="panel">
                            <div class="panel-wrapper thumbs_container_colors">
                               <ul>
                                    <li>

                                            <img  name="Happy Snails" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_111?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Plum Petals" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_117?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Mocha Rouge" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_110?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Watercolor" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_112?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Viva la Vera" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_112?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>


                                            <img  name="Deco Daisy" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_107?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="English Meadow" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_109?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Boysenberry" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_109?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Folkloric" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_102?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                    <li>

                                            <img  name="Blue Lagoon" title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/sm_105?hei=40&wid=40&op_sharpen=1" alt = "Thumbnail 1"/>

                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div><!-- .coda-slider -->
                </div><!-- .coda-slider-wrapper -->

             </div>



             <div class="Select_Color">
                 <label>
                     or
                    <select>
			            <option selected="" value="" class="">Select Color</option>
				        <option value="Happy Snails" class="">Happy Snails</option>
                        <option value="Plum Petals" class="selected">Plum Petals</option>
                        <option value="Mocha Rouge" class="">Mocha Rouge</option>
                        <option value="Watercolor" class="">Watercolor</option>
                        <option value="Viva la Vera" class="">Viva la Vera</option>
                        <option value="Deco Daisy" class="">Deco Daisy</option>
                        <option value="English Meadow" class="">English Meadow</option>
                        <option value="Boysenberry" class="">Boysenberry</option>
                        <option value="Folkloric" class="">Folkloric</option>
                        <option value="Blue Lagoon" class="">Blue Lagoon</option>
                        <option value="Lemon Parfait" class="">Lemon Parfait</option>
                        <option value="Baroque" class="">Baroque</option>
                        <option value="Very Berry Paisley" class="">Very Berry Paisley</option>
                        <option value="Night and Day" class="">Night and Day</option>
                        <option value="Symphony in Hue" class="">Symphony in Hue</option>
                        <option value="Twirly Birds Pink" class="">Twirly Birds Pink</option>
                        <option value="Buttercup" class="">Buttercup</option>
                    </select>
                 </label>
             </div>

            <div class="Controls_Zoom">
                <div class="zoom_more"></div>
                <div class="zoom_minus"></div>
                <div class="zoom_refresh"></div>
             </div>

            <div class="gallery_container">

                <div class="thumbs_container">
                    <ul>
                        <li>
                            <a href='http://s7d2.scene7.com/is/image/VeraBradley/11810110-V1?rgn=0,0,1200,1800&scl=4.5&id=cvDqI0' class='cloud-zoom-gallery' title='Thumbnail 1' rel="useZoom: 'zoom1', smallImage: 'http://s7d2.scene7.com/is/image/VeraBradley/11810110-V1?rgn=0,0,1200,1800&scl=4.5&id=cvDqI0' ">
                            <img  title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/11810110-V1?hei=40&wid=40" alt = "Thumbnail 1"/>
                           </a>
                        </li>
                        <li>
                            <a href='http://s7d2.scene7.com/is/image/VeraBradley/11810110-V2?rgn=0,0,1800,1431&scl=4&id=UoFqE3' class='cloud-zoom-gallery' title='Thumbnail 1' rel="useZoom: 'zoom1', smallImage: 'http://s7d2.scene7.com/is/image/VeraBradley/11810110-V2?rgn=0,0,1800,1431&scl=5&id=UoFqE3' ">
                           <img  title="Phone title" src="http://s7d2.scene7.com/is/image/VeraBradley/11810110-V2?hei=40&wid=40" alt = "Thumbnail 1"/>
                           </a>
                        </li>
                    </ul>
                </div>
            </div>



         </div>
         
         <div class="main_right">

            <div class="main_image">
                <a href='http://s7d2.scene7.com/is/image/VeraBradley/11810110-V1?rgn=0,0,1200,1800&scl=4.5&id=cvDqI0' class = 'cloud-zoom' id='zoom1'
                            rel="adjustX: 10, adjustY:-4">
                            <img src="http://s7d2.scene7.com/is/image/VeraBradley/11810110-V1?rgn=0,0,1200,1800&scl=4.5&id=cvDqI0" alt='item' title="Optional title display"/>
                </a>
            </div>

            <div class="Container_Share">

            </div>

            
         </div>
         
    </div>

    <div class="bottom">

            <div class="customize_container">

                   <div class="custom_left">

                    <div class="customize_quantity">
                        <div class="price_container">
                        <div class="price_product">$78.00</div>
                        <div class="Color_select_bag"> Color :<span class="Color_select_on">Mocha Rouge</span></div>


                        </div>
                        <div class="quantity_content">
                        <span>Quantity:</span>
                        <input  class="input_quantity" type="text" name="" value="1" />
                        </div>
                        <div id="addToCartBtn" class="addtocart" onclick="zmagCPO.addToCart('/checkout/add_item.cmd','POST','Baroquenull=false%3Csplit%3E11810069%3Csplit%3Etrue%3Csplit%3Enull&Blue%20Lagoonnull=true%3Csplit%3E11810104%3Csplit%3Etrue%3Csplit%3Enull&Boysenberrynull=true%3Csplit%3E11810102%3Csplit%3Etrue%3Csplit%3Enull&Buttercupnull=true%3Csplit%3E11810068%3Csplit%3Etrue%3Csplit%3Enull&Deco%20Daisynull=true%3Csplit%3E11810106%3Csplit%3Etrue%3Csplit%3Enull&English%20Meadownull=true%3Csplit%3E11810103%3Csplit%3Etrue%3Csplit%3Enull&Folkloricnull=true%3Csplit%3E11810105%3Csplit%3Etrue%3Csplit%3Enull&Happy%20Snailsnull=true%3Csplit%3E11810111%3Csplit%3Etrue%3Csplit%3Enull&Lemon%20Parfaitnull=true%3Csplit%3E11810108%3Csplit%3Etrue%3Csplit%3Enull&Mocha%20Rougenull=true%3Csplit%3E11810110%3Csplit%3Etrue%3Csplit%3Enull&Night%20and%20Daynull=false%3Csplit%3E11810052%3Csplit%3Etrue%3Csplit%3Enull&Plum%20Petalsnull=true%3Csplit%3E11810117%3Csplit%3Etrue%3Csplit%3Enull&Symphony%20in%20Huenull=true%3Csplit%3E11810033%3Csplit%3Etrue%3Csplit%3Enull&Twirly%20Birds%20Pinknull=true%3Csplit%3E11810100%3Csplit%3Etrue%3Csplit%3Enull&Very%20Berry%20Paisleynull=true%3Csplit%3E11810063%3Csplit%3Etrue%3Csplit%3Enull&Viva%20la%20Veranull=true%3Csplit%3E11810109%3Csplit%3Etrue%3Csplit%3Enull&Watercolornull=false%3Csplit%3E11810107%3Csplit%3Etrue%3Csplit%3Enull&action=addProduct&callbackBaseURL=&categoryId=0&editonly=false&form_state=productForm&itemGUID=&parentCategoryId=638&prefix=%23js-productForm&productId=1001414&productName=Chain%20Bag&productVariantId=171704&productVariantId_offSale=171704&productVariantId_onSale=&quantity=1&readonly=false&showBreadcrumb=&subCategoryId=641&ts=1313162638204');"> <span class="addtocart_letter">Add to Shopping Bag »</span></div>
                    </div>

                </div>

                <div class="custom_right">
                      <div class="share_container">
                          <lu>
                              <li>
                                 <a>Share</a>
                              </li>
                              <li class="add_wish">
                                 <a>Add to wish list</a>
                              </li>
                              <li>
                                 <a>Mail a friend</a>
                              </li>
                          </lu>
                      </div>


                </div>

            </div>
    </div>
</div>
