
       //jQuery("myViewerContent").css({"width":"1300px","height":"450px","margin": "0 auto"});

       current_father = jQuery('#wrapper').parent();

       current_son = jQuery('#wrapper');

       hidden_containers(current_father,current_son);


    function hidden_containers(fhaterCont,sonCont){
            console.log(fhaterCont.get(0).className);
          if(fhaterCont.get(0).tagName.toLowerCase()!="body"){

              new_fhater = fhaterCont.parent();

              hidden_containers(new_fhater,fhaterCont);

              sonCont.siblings().css("display","none");
              sonCont.css({"width":"100%","height":"100%"});


          } else{

              sonCont.siblings().css("display","none");
              sonCont.css({"width":"100%","height":"100%"});
          }

    }
 /*
//jQuery('#wrapper').siblings().css("display","none");
       // current.siblings().css("display","none");

//jQuery('.'+container).siblings().css("display","none");                 //hidden containers for brother of father

/* jQuery('#wrapper').parent().siblings().css("display","none");     //funciona

/*jQuery('.'+container).siblings().each(function(i){
            alert(jQuery('.'+container).siblings().get(i).tagName);
            jQuery('.'+container).siblings().css("display","none");        //hidden brothers
});*/
  /*
  function hidden_containers(fhaterCont,sonCont){

          if(){

          } else{
              sonCont.
          }

  */