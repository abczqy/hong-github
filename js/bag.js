$(function(){
    function move(swiper,num){
        if(swiper.swipeDirection=="next"){
            $(".swiper-container").removeClass("movedelete");
            $("#swiper"+num).addClass("movedelete");
        }else{
            $("#swiper"+num).removeClass("movedelete");
        }
    }
    function toThousands(num) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }
    function totalMoney(){
        var num=$(".check .click").length;
        $(".all span").text("￥"+toThousands(2379*num));
        $(".express span").text(num);
    }
    var swiper0=new Swiper("#swiper0",{
        onTouchMove:function(swiper){
            move(swiper,0);
        },
        followFinger : false
    });
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
    $(".check span").on("click",function(){
        $(this).toggleClass("click");
        checkall();
        totalMoney();
    });
    function checkall(){
        var length1=$(".check .click").length;
        var length2=$(".check span").length;
        if(length1!=length2||length1==0){
            $(".all-choose").removeClass("click");
        }else{
            $(".all-choose").addClass("click");
        }
    }
    $(".all-choose").on("click",function(){
        $(this).toggleClass("click");
        if($(this).hasClass("click")){
            $(".check span").addClass("click");
        }else{
            $(".check span").removeClass("click");
        }
        totalMoney();
    });
    $(".delete").on("click",function(){
        var index=$(this).parent().parent().attr("id");
        index="#"+index;
        $(index).remove();
        checkall();
        totalMoney();
    });
    $(".top span").on("click",function(){
        var $item=$(".item");
        if($item.hasClass("movedelete")==false){
            $item.addClass("movedelete");
        }else{
            $item.removeClass("movedelete");
        }
    });
    $(".main-mes").on("click",function(){
    	leave("detail.html");
    })
});