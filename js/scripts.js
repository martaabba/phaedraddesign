

//twitter link
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
//facebook link
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));



//document.ready
$(document).ready(function(){
	

	//smooth scrolling
	var $root = $("html, body");
          $(".navbar-nav a").click(function() {
            var href = $.attr(this, "href");
            $root.animate({
              scrollTop: $(href).offset().top
                }, 500, function(){
                  window.location.hash = href;
                                  });
              return false;
                                              }); //closes smooth scrolling


     //stellar
 
     $("#contact").stellar();

     //tooltip
      $(function() {
      $("#item1").tooltip();
      });//closes tool tip

      //works
   console.log('Adding works images.');
  

   for(var i = 0; i < works.length; ++i) {
      	//script for array goes here
      	$("#work").append('<div class="col-xs-6 col-lg-3">\
          <a href="'+ works[i].url + '" class="work-img">\
            <img class="img-responsive" src="' + works[i].pic + '" >\
            <span class="info"><p class="proj-title">Title:</p>' + works[i].title + '</p></span>\
          </a>\
          </div>');

        var images = $("#work img");
          if (i%2===0){
            $(images[i]).css("border", "2px solid DodgerBlue");
          }else{
            $(images[i]).css("border", "2px solid orange");
          }
        }

      $(".work-img").mouseenter(function(){
      $(".info",this).show();
    }).mouseleave(function(){
      $(".info",this).hide();
    });         //close mouse enter
       
       //end works

  });//close document ready

//map 
function initMap() {
  var myLatLng = {lat: 45.479818, lng: -122.567626};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Beautiful Lents'
  });
var styles = [
  {
    stylers: [
      { hue: "#e27800" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  }
];

map.setOptions({styles: styles});

}





//textarea background
$("#name").css("background-color", "#eecfb0");
$("#phone").css("background-color", "#eecfb0");
$("#email-address").css("background-color", "#eecfb0");
$("#message-box").css("background-color", "#eecfb0");


//message area clicked button actions

$("#submitted").on("click", function() {

	var name = $("#name").val();
		console.log(name);
			$("#name").hide();
			$("#visible-name").css("color", "#e27800");
			$("#visible-name").html(name);
	
	var phonenumber = $("#phone").val();
		console.log(phonenumber);
			$("#phone").hide();
			$("#visible-phone").css("color", "#e27800");
			$("#visible-phone").html(phonenumber);
	
	var email = $("#email-address").val();
		console.log(email);
		if(email==""){
			$("#email-address").css("border", "2px solid red");
		}else{
			$("#email-address").hide();
			$("#visible-email").css("color", "#e27800");
			$("#visible-email").html(email);
			}

	var comment = $("#message-box").val();
		console.log(comment);

		if(comment=="") {
			$("#message-box").css("border", "2px solid red")
		}else{
			$("#message-box").hide();
			$("#visible-comment").css("color","#e27800");
			$("#visible-comment").html(comment);
		};

	return false;

	});

 $("#message-box").on("keyup", function(){
           console.log("keyup happened");
       
  var charCount = $("#message-box").val().length;
        	console.log(charCount);
        	$("#character-count").html(charCount);
        	$("#character-count").css("color", "#e27800");
       
        	if(charCount>50){
        	$("#character-count").css("color", "red");
        }else{
        	$("#character-count").css("color", "#e27800");
        		};
        


 });




	