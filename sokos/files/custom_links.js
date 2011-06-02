function addToCart(id_product,qty,atributes,url_base){        
        jQuery.fancybox.showActivity();
        if(jQuery("#fancybox-wrap").css("display")=="none"){
            var func = arguments.callee;    
            var data ="product_id="+id_product+"&qty="+qty+""+atributes;
            var url = url_base+"ajax_custom/box_add_cart.php";
            //post to the server and when we get a response,
            //draw a new fancybox, and run this function on completion
            //so that we can bind the form and create a new fancybox on submit
            jQuery.post(url, data, function(msg){
                jQuery.fancybox({content:msg,onComplete:func});
                jQuery("#fancybox-loading").hide();                
            });            
            return false;
        }
    }


