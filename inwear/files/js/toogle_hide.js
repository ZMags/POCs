	var height_o=0;
	var width_o=0;

    //DD_roundies.addRule('.rounded', '5px');

    function toggleHeader() {
	    var expanding = $('#header').css('display') == 'none';
	    //var expand = ['#container', '.container_12', '.container_12 .grid_12'];
        //var expand = ['#containerIframe', '#ViewerContentOuter'];
        var expand = ['#aspnetForm', '#ViewerContentOuter', '#ViewerContentInner'];
        $('#header').delay(300).slideToggle(500);
        $('#footer').delay(400).slideToggle(500);
        setTimeout(function(){
            $.each(expand, function(i,e){
                var evt = $(e);
				
				
                if(!expanding && !evt.data('origWidth')){
                    evt.data('origWidth', evt.width());
						$('#zmag_container').css("height",heightScreen("height"));
						$('#zmag_container').css("width",heightScreen("width"));
						$('#info-page').css("height",heightScreen("height"));
						$('#info-page').css("width",heightScreen("width"));
						$('#zmag_container,#info-page').addClass("full_screen");
					}
				else{
					$('#zmag_container').css("height",height_o+11);
					$('#zmag_container').css("width",width_o);
					$('#info-page').css("height",height_o+22);
					//$('#info-page').css("width",width_o);
					$('#info-page').css("width","100%");
					$('#info-page').css("background-color","#FFFFFF");
					$('#zmag_container,#info-page').removeClass("full_screen");
					
				}	
                evt.width(expanding ?
                    evt.data('origWidth'):
                    $(window).width());
            });
            $('#ViewerContentiFrame').height(expanding ?
                '580px' :
                $(window).height() - 30);
        }, expanding ? 0 : 900);
        
        setTimeout('blinkIt()',1000);
		
        return false;/**/
    }
    
    function waitingTime() {
        setTimeout('toggleHeader()',5000);
		
    }
    
    function blinkIt() {
        $('#show-hide').fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500, function(){$('#show-hide').css('display', 'block')});
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
    
	
	
    $(document).ready(function(){
        height_o=$('#zmag_container').height();
		width_o=$('#zmag_container').width();
        $('#hide-button').live("click", function (ev) {
            toggleHeader();
            return false;
        });
        
        waitingTime();
        
    });


