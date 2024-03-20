
$(document).ready(function(){
    $("nav ul li a").click(function(e){
        e.preventDefault();
        $("html,body").animate({
        scrollTop:$('#' + $(this).data('scroll')).offset().top
        },1000);
     
        });
        
$(window).scroll(function(){
    if($(window).scrollTop() >= 1000){
        $(".scroll").fadeIn(400);
    }else{
        $(".scroll").fadeOut(400);
    }
    });  
    $(".scroll").click(function(e){
     e.preventDefault();
     $("html,body").animate({
       scrollTop:0
     },1000);
    
    });
    
  
    $(".icon1").click(function(){
        $(this).hide();
        $("nav ul").css("right","0");
        $(".icon2").show();
        $("nav ul").click(function(){
            $(this).css("right","100%");    
        });
    });
    $(".icon2").click(function(){
        $("nav ul").css("right","100%");
        $(this).hide();
        $(".icon1").show();
      
      
    });
   
    
  });
    