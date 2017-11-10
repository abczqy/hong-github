$(function(){
    function move(swiper,num){
        if(swiper.swipeDirection=="next"){
            $("#swiper"+num).css({"transform":"translateX(-.85rem)","transition":".2s"});
        }else{
            $("#swiper"+num).css({"transform":"translateX(0)","transition":".2s"});
        }
    }
    var swiper1=new Swiper("#swiper1",{
        onTouchMove:function(swiper){
            move(swiper,1);
        },
        followFinger : false
    });
    var swiper2=new Swiper("#swiper2",{
        onTouchMove:function(swiper){
            move(swiper,2);
        },
        followFinger : false
    });
    $(".delete").on("click",function(){
        var collect=document.getElementsByClassName("collect")[0];
        collect.removeChild(this.parentNode.parentNode);
        if($(".collect li").length==0){
            $(".collect").css("display","none");
            $(".hidden").css("display","block");
            $(".center header").css("margin-bottom","1.5rem");
        }
    });
    $(".img").on("click",function(){
        leave("detail.html");
    })
});