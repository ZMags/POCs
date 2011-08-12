    var height_o=0;
    var width_o=0;

    //DD_roundies.addRule('.rounded', '5px');


   //add toggle button
jQuery(document).ready(function(){
    
    setTimeout("toggleExpand()",1000);
    
    checkLang();
    
    
    
    
});

function checkLang(){
    if( language != null ) {
        initBtns();
    //    console.log(language);
    
    } else {
        // wait 50 milliseconds and try again.
        window.setTimeout( checkLang, 50 );
    
    }
    

}




jQuery(window).resize( function() {
        var expanding = $('#uiTop').css('display') == 'none';
        if(expanding){
        $('#shopWrapper').css({"background":"white","overflow":"visible",'width':$(window).width()- 60 +'px', 'height':$(window).height()-60 +"px"});
        $('#chZmag').css({'width':$(window).width()+'px', 'height':$(window).height()-40 +"px"});   
    }
});


function toggleExpand() {
       
        var expanding = $('#uiTop').css('display') == 'none';
        var expand = ['#chZmag'];
        $('#uiTop').slideToggle(500);
        $('#secondaryNavWrapper').slideToggle(500);
        $('#uiBottom').slideToggle(500);
        if(!expanding){
            setTimeout(function(){
                $.each(expand, function(i,e){
            if(language =="english"){
				$('#fstoogle').text('Exit Screen');
			}else{
				$('#fstoogle').text('Salir de pantalla completa');
			}
			
			
			
            $('body').css({"background":"white"});
                $('#uiMid').css({"background":"white", "margin":"0px", "overflow":"visible"});
                $('#shopWrapper').css({"background":"white","overflow":"visible",'width':$(window).width()- 60 +'px', 'height':$(window).height()-60 +"px"});
            $('#chZmag').css({'width':$(window).width()+'px', 'height':$(window).height()-60 +"px"});   
                });
            }, 520);
        }
        else {
            setTimeout(function(){
            $.each(expand, function(i,e){
            	if(language =="english"){
					$('#fstoogle').text('Full Screen');
				}else{
					$('#fstoogle').text('Entra pantalla completa');
				}
				$('body').css({'background':'url(Skin/NewCo/Images/common/bg_linen_light.jpg)'});
				$('#uiMid').css({'background':"url(Skin/NewCo/Images/common/paperBkgrd_mid.png)","margin":"0px auto","overflow":""});
				$('#shopWrapper').css({"overflow":"",'width':'', 'height':""});
				$('#chZmag').css({'width':'920px', 'height':'600px'});  
				});
            });
        }
        
        //setTimeout('blinkIt()',1000);
        
        return false;/**/
    }


    function initBtns()
    {
    
    	var langText;
    	var fsText;
    
        if(language =="spanish"){
            langText = "English";
            fsText = "Salir de pantalla completa";
            
        }else{
            langText = "Español";
            fsText = "Exit Fullscreen";
        }
        
        

        jQuery('#chZmag').prepend('<a id="changeLanguage" href="javascript:__doPostBack(\'ctl00$ChangeLanguage1$lb_change\',\'\')">'+langText+'</a>');
    
        jQuery('#shopWrapper').prepend('<a id="fstoogle">'+fsText+'</a>'); 
    
        jQuery('#fstoogle').bind("click", function (ev) {
            toggleExpand();
            return false;
        });
    }
 
    function waitingTime() {
    setTimeout('toggleExpand()',3000);
        
    }
    
    function blinkIt() {
        $('#fstoogle').fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500, function(){$('#show-hide').css('display', 'block')});
    }
    
    function heightScreen(height_width){
          var myWidth = 0, myHeight = 0;
        if( typeof( window.innerWidth ) == 'number' ) {
            //Non-IE
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if(document.body && ( document.body.clientWidth || document.body.clientHeight )) {
            //IE 4 compatible
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        if(height_width=="height")
          return myHeight;
        else if(height_width=="width")
                return myWidth;
    }


