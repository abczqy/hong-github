$(function(){
    $(".menu").click(function(){
        window.localStorage.classify=$(document).scrollTop();
        var topnum=window.localStorage.classify;
        $(".content").css({"position":"fixed","top":-topnum+'px'});
        $(".nav").animate({"left":"5.9rem"},400);
        $(".listleft").animate({"left":"5.9rem"},400);
        $(".fixedmenu").animate({"left":"5.9rem"},400);
        $(".content").animate({"left":"5.9rem"},400);
        $(".aside").animate({"left":0},400,function(){
            $(".hidden").fadeIn(200);
        });
    });
    function back(){
    	var topnum=window.localStorage.classify;
        $(".nav").animate({"left":0},400);
        $(".fixedmenu").animate({"left":0},400);
        $(".listleft").animate({"left":0},400);
        $(".content").css({"position":"relative","top":0});
        $(".content").animate({"left":0},400);
        window.scrollTo(0,topnum);
        $(".aside").animate({"left":"-5.9rem"},400);
        $(".hidden").fadeOut(400);
    }
    $(".hidden").on("click",back);
    /* 判断左滑 */
    var startX, startY, moveEndX, moveEndY, X, Y;
    $(".aside").on("touchstart",function(e){
        startX = e.originalEvent.changedTouches[0].pageX;
        startY = e.originalEvent.changedTouches[0].pageY;
    });
    $(".aside").on("touchmove",function(e){
        e.preventDefault();
        moveEndX = e.originalEvent.changedTouches[0].pageX;
        moveEndY = e.originalEvent.changedTouches[0].pageY;
        X = moveEndX - startX;
        Y = moveEndY - startY;
        if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
            back();
        }
    });
    $(".listleft ul li").on("click",function(){
        $(this).addClass("live").siblings().removeClass("live");
        $(".picture-head p").text($(this).text());
        window.scrollTo(0,0);
        $(".pictures").css({"margin-top":"1.2rem","visibility":"hidden"});
        setTimeout(function(){
            $(".pictures").css("visibility","visible");
        },200);
        $(".pictures").animate({"margin-top":"0"},400);
    })
});