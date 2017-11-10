$(function(){
   $(".lining-main li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
   });
    $(".colors li").on("click",function(){
        if($(this).hasClass("head")==false){
        	$(this).addClass("active").siblings().removeClass("active");
        }
    });
    $(".type li span").on("click",function(){
        $(this).parent().addClass("alive").siblings().removeClass("alive");
        $(".cont ul li").removeClass("active");
        var num=$(this).parent().index();
        switch (num){
            case 0:
                $(".lining").css("background","url(img/custom/1@2.png)no-repeat center/100% 100%");
                $(".style").css("background","url(img/custom/2@1.png)no-repeat center/100% 100%");
                $(".master").css("background","url(img/custom/3@1.png)no-repeat center/100% 100%");
                break;
            case 1:
                $(".lining").css("background","url(img/custom/1@1.png)no-repeat center/100% 100%");
                $(".style").css("background","url(img/custom/2@2.png)no-repeat center/100% 100%");
                $(".master").css("background","url(img/custom/3@1.png)no-repeat center/100% 100%");
                break;
            case 2:
                $(".lining").css("background","url(img/custom/1@1.png)no-repeat center/100% 100%");
                $(".style").css("background","url(img/custom/2@1.png)no-repeat center/100% 100%");
                $(".master").css("background","url(img/custom/3@2.png)no-repeat center/100% 100%");
                break;
        }
    })
});