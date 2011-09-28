


       var full_text = '<div class="fullScreenButton" align="center"> <div class="text_full_screen">full screen</div> </div><div class="exitFull" align="center"><div class="text_full_screen">exit full</div></div>';
       jQuery('#myViewerContent').prepend(full_text);



       current_father = jQuery('#wrapper').parent();        //current father container of zmags catalog

       current_son = jQuery('#wrapper');                    //container of catalog






/*function for hidden all tags of page*/
    function hidden_containers(fhaterCont,sonCont){

            console.log(fhaterCont.get(0).className+"function : hide");

        if(fhaterCont.get(0).tagName.toLowerCase()!="body"){

                  new_fhater = fhaterCont.parent();

                  hidden_containers(new_fhater,fhaterCont);

                  //jQuery("#myViewerContent").addClass("content_consola_zmags");



                  sonCont.addClass("full_screen");

                                  //desaparecer(10,0,10,sonCont.siblings());

                                  sonCont.siblings().addClass("hidden_screen");
                                    jQuery('#zmox-tmp').removeClass("hidden_screen");
                                    jQuery('#zmox-loading').removeClass("hidden_screen");
                                    jQuery('#zmox-overlay').removeClass("hidden_screen");
                                    jQuery('#zmox-wrap').removeClass("hidden_screen");






          } else{
                  fhaterCont.addClass("full_body");
                  sonCont.addClass("full_screen");
                  jQuery("#myViewerContent").addClass("content_consola_zmags");
                 // desaparecer(10,0,10,sonCont.siblings());
                  jQuery('.fullScreenButton').unbind('click',spostaBox2);     //action click
                  jQuery('.exitFull').bind('click',spostaBox);      //action click

                  sonCont.siblings().addClass("hidden_screen");



          }

    }

   /*function for show all tags of page*/
    function show_containers(fhaterCont,sonCont){

            console.log(fhaterCont.get(0).className+"function : show");

          if(fhaterCont.get(0).tagName.toLowerCase()!="body"){

              new_fhater = fhaterCont.parent();

              show_containers(new_fhater,fhaterCont);

              sonCont.siblings().removeClass("hidden_screen");
              sonCont.removeClass("full_screen");

              //aparecer(0,0,10,sonCont.siblings());




          } else{
                  jQuery("#myViewerContent").removeClass("content_consola_zmags");
                  fhaterCont.removeClass("full_body");
                  sonCont.removeClass("full_screen");
                  sonCont.siblings().removeClass("hidden_screen");

                  //aparecer(0,0,10,sonCont.siblings());


                         jQuery('.fullScreenButton').bind('click',spostaBox2);     //action click
                         jQuery('.exitFull').unbind('click',spostaBox);      //action click

          }

    }
    /*function for effect fade in the tags before hidden*/
    function aparecer(i,color,suma,obj_client){

            var j;
            if (!(color>=110)){

                         color += suma;
                         //obj_client.removeClass('opacity'+i-2);
                         obj_client.removeClass('opacity'+i);

                          j=i+1;

                         setTimeout(function(){aparecer(j,color,suma,obj_client);}, 200);
            }
        }


    /*function for effect fade in the tags before show*/
    function desaparecer(i,color1,suma1,obj_client){

            var j;

            if (!(color1>=110)){

                          obj_client.addClass('opacity'+i);

                          color1 += suma1;
                          j=i-1;
                         //desaparecer("+j+","+color1+","+suma1+","+obj_client+");
                 setTimeout(function(){desaparecer(j,color1,suma1,obj_client);}, 200);
            }
        }

       function spostaBox2(e){       //function control multiples clicks

           e.preventDefault();

           $('.fullScreenButton').unbind('click');
           $('.exitFull').unbind('click');

           hidden_containers(current_father,current_son);

       }

       function spostaBox(e){        //function control multiples clicks

           e.preventDefault();
           $('.fullScreenButton').unbind('click');
           $('.exitFull').unbind('click');


            show_containers(current_father,current_son);




         }


       jQuery('.fullScreenButton').bind('click',spostaBox2);     //action click
       jQuery('.exitFull').unbind('click',spostaBox);      //action click

