$(function(){
    function width(){
        if($(window).innerHeight()>1000){
            $(".aside .list li").css("margin-bottom",".1rem");
        }else if($(window).innerHeight()<580){
            $(".aside .list li").css("margin-bottom",".45rem");
        }
        var width=$(window).innerWidth()/7.5;
        $("html").css("font-size",width+'px');
    }
    width();
    $(window).resize(width);
    $(".aside .head").on("click",function(){
    	window.location="member.html";
    })
});
function leave(url){
    if (navigator.userAgent.indexOf("MSIE") != -1){
        var referLink = document.createElement('a');
        referLink.href = url;
        document.body.appendChild(referLink);
        referLink.click();
    }else{
        location.href = url;
    }
}