$(function(){
	//banner
    var mySwiper = new Swiper('#swiper',{
        pagination : '.swiper-pagination',
        autoplay:4000,
        loop:true,
        paginationElement:"li",
        autoplayDisableOnInteraction : false
    });
    var startX, startY, moveEndX, moveEndY;
    var topX,topEndX;
    var movenum=true;
    setTimeout(function(){
    	if(window.localStorage.addres==1){
        var cityName=window.localStorage.address;
        alert("当前定位城市:"+cityName);
        window.localStorage.addres=0;
    }
    },300);
    $(".menu").on("click",function(){
        $(".content,.nav,.fixedmenu,.aside,.backTop").css("transform","translateX(5.9rem)");
        $(".hidden").fadeIn(400);
        mySwiper.stopAutoplay();
        mySwiper.disableTouchControl();
    });
    function back(){
        $(".content,.nav,.fixedmenu,.aside,.backTop").css("transform","translateX(0)");
        $(".hidden").fadeOut(400);
        mySwiper.startAutoplay();
        mySwiper.enableTouchControl();
        setTimeout(function(){
        	movenum=true;
        },400);
    }
    $(".hidden").on("click",function(){
    	back();
    });
    //返回顶部
    $(".backTop").on("click",function(){
    	window.scrollTo(0,0);
    	$(".nav").css("display","block");
    	$(this).css("display","none");
    })
    /* 判断左滑 */
    $(".aside").on("touchstart",function(e){
        startX = e.originalEvent.changedTouches[0].pageX;
        startY = e.originalEvent.changedTouches[0].pageY;
    });
    $(".aside").on("touchmove",function(e){
        e.preventDefault();
        moveEndX = e.originalEvent.changedTouches[0].pageX;
        moveEndY = e.originalEvent.changedTouches[0].pageY;
        var X = moveEndX - startX;
        var Y = moveEndY - startY;
        if (Math.abs(X)>Math.abs(Y)&&X<0&&movenum) {
        	movenum=false;
            back();
    	}
    });
    $("body").on("touchstart",function(e){
    	topX=$(window).scrollTop();
    })
    $("body").on("touchmove",function(e){
    	var height=$(window).height();
    	topEndX=$(window).scrollTop();
    	//nav导航栏的消失与出现
    	if(topEndX>topX&&topEndX>height){
    		$(".nav").fadeOut();
    	}else if(topEndX<topX){
    		$(".nav").fadeIn();
    	}
    	//返回按钮的出现与消失
    	if(topEndX>height){
    		$(".backTop").fadeIn();
    	}else{
    		$(".backTop").fadeOut();
    	}
    })
    //无限加载
    $(window).scroll(function(){
        var num=Math.round(Math.random()*2);
        var totalheight=$(window).height()+$(window).scrollTop();
        if(($(document).height()-200) <= totalheight){
            var more=$(".more").eq(num).clone();
            $(".morepic").append(more);
        }
    });
    //保存页面距顶部的高度
    window.onunload=function(){
    	window.localStorage["index"]=$(window).scrollTop();
    };
    var topnumber=window.localStorage["index"];
    window.scrollTo(0,topnumber);
});