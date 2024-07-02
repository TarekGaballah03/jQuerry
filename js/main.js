$(".menu").click(function(){
    $(".NavContent").animate({ width:'30%'},500)
   $(".HomeContent").animate({marginLeft :'30%'},500)
})

$(".CloseBtn").click(function(){
    $(".NavContent").animate({ width:'0px'},500)
   $(".HomeContent").animate({marginLeft :'0px'},500)
})