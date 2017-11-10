$(function(){
	window.localStorage.my=0;
    var swiper=new Swiper(".swiper-container",{
        autoplay:4000,
        loop:true,
        autoplayDisableOnInteraction : false
    });
    $(".collect").on("click",function(){
        if($(".collect-menu").css("display")=="none"){
            $(".collect-menu").css("display","block");
        }else{
            $(".collect-menu").css("display","none");
        }
    })
    $
});