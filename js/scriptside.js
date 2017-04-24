scriptside.js 









for(var i = 0; i < works.length; ++i) {
      	//script for array goes here
      	$('#work').append('\
      		<div class="col-xs-6 col-md-6 col-md-3">\
          <img class="img-responsive" src="' + works[i] + '">\
      		');//append closes
        var images = $('#work img');
          if (i%2===0){
            $(images[i]).css('border', '2px solid DodgerBlue');
          }else{
            $(images[i]).css('border', '2px solid salmon');
          }

        }; //close array for works