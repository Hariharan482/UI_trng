$(document).ready(function(){
  
  $section = $('.content-section').children();
  $tab=$('.section-tabs').children();

  $( function() {
    $( "#accordion" ).accordion();
  } );

  
  var prevTab=$('.active');
  var prevSect=$('.about-us-section');

  $('.tab').click(function(e){
    prevTab.toggleClass('active');
    $(this).toggleClass('active');
    prevTab=$(this);

    $cName="."+$(this)[0].className.split(" ")[1]+"-section";
    // console.log($cName);
    prevSect.toggleClass('tab-display');
    $($cName).toggleClass('tab-display');
    prevSect=$($cName);
  })

  $.getJSON("/assets/locations.json",function(locations){
    for(let i=0;i<locations.length;i++){
      var $container=$('<div>');
      if(i%2==0){
        $('.locations-section').append($($container).addClass("locations-container grey-container"));
      }
      else {
        $('.locations-section').append($($container).addClass("locations-container pink-container"));
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

