
function showOption(o){
    if(o=='F'){
       $('.specifications').hide('slow');
       $('.description').hide('slow');
       $('.features').show('slow');

    }else{
        if(o=='D'){
          $('.specifications').hide('slow');
          $('.features').hide('slow');
          $('.description').show('slow');
        } else{
              if(o=='S'){
                      $('.description').hide('slow');
                      $('.features').hide('slow');
                      $('.specifications').show('slow');
              }
        }
    }

};
