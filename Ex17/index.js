$(document).ready(function(){

  $( function() {
    $( "#accordion" ).accordion();
  } );

  $( function() {
    $( "#tabs" ).tabs();
  } );
  
  
  $.getJSON("/assets/locations.json",function(locations){
    for(let i=0;i<locations.length;i++){
      var $container=$('<div>');
      if(i%2==0){
        $('.tab3').append($($container).addClass("locations-container grey-container"));
      }
      else {
        $('.tab3').append($($container).addClass("locations-container pink-container"));
      }
      if(locations[i].state=="Tamil Nadu"){
        var $img=$('<img>').attr("src","/assets/India.png");
      }
      else if(locations[i].state=="Ontario"){
        var $img=$('<img>').attr("src","/assets/Canada.png");
      }
      else{
      var $img=$('<img>').attr("src","/assets/Usa.png");
      }
      $container.append($img);
      $container.append($('<div>').addClass('state').text(locations[i].state));
      $container.append($('<div>').addClass('city').text(locations[i].city));
      $container.append($('<div>').addClass('pno').text(locations[i].contact));
    }
  })
})

