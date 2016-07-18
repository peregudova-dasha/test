$(document).ready(function(){
  
  //#banner
    $("#button_1").hover(function(){
    $(this).animate({
          backgroundColor: "#3C8EDF"}, 100 );
  }, function(){
     $(this).animate({backgroundColor:"#0071e0"}, 100);
  })
  
  //#banner END
  
    //#sign up
  $("#button").hover(function(){
    $(this).animate({
          backgroundColor: "#D81F4D"}, 300 );
  }, function(){
     $(this).animate({backgroundColor:"#f42156"}, 300);
  })
  
  
  $("#signup_name").focusin(function(){
    $(".focusename").css("font-size", "1px")
  })
  
    $("#signup_name").focusout(function(){
    $(".focusename").css("font-size", "18px")
  })
    
     $("#signup_email").focusin(function(){
    $(".focusemail").css("font-size", "1px")
  })
  
    $("#signup_email").focusout(function(){
    $(".focusemail").css("font-size", "18px")
  })
    
      $("#signup_password").focusin(function(){
    $(".focusepass").css("font-size", "1px")
  })
  
    $("#signup_password").focusout(function(){
    $(".focusepass").css("font-size", "18px")
  })
  //#sign up END
  
    //#special 

     $(".column").hover(function(){

   $(this).find(".black").animate({"opacity": "0"}, 150); 
      $(this).find(".img").animate({"background-size":"135%"}, 300 );
    
  }, function(){
       $(this).find(".black").animate({"opacity": "0.5"}, 150);
           $(this).find(".img").animate({"background-size":"130%"}, 300 );    
  })




   //#special END
  
  
  
})
