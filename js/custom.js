$(function(){
    $(window).scroll(function(){
        var totalheight=$(window).height()+$(window).scrollTop();
        if(($(document).height()-200) <= totalheight){
            var more=$(".beauty ul").eq(0).clone();
            $(".beauty").append(more);
        }
    })
});