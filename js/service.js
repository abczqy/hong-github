$(function(){
	
	if(window.localStorage.my==1){
    	$(".thing").css("display","none");
    }else{
    	$(".thing").css("display","block");
    }
    $("#ipt").on("keydown",function(e){
        if(e.keyCode==13&&$("#ipt").val()!=null){
        	var rekey='90e68c2e88774beab649caad51e68f70';
            var $child=$("<div></div>");
            $child.addClass("text");
            var $p=$("<p>"+$("#ipt").val()+"</p>");
            $p.addClass("txt");
            var $logo=$(".logo").eq(0).clone().addClass("r").removeClass("l").css({"margin-left":".16rem","margin-right":"0"});
            var $clear=$("<div class='clear'></div>");
            $child.append($logo,$p,$clear);
            $(".center").append($child);
            window.scrollTo(0,$(".center").height());
            var c=$("#ipt").val();
            $("#ipt").val("");
            $.getJSON('http://www.tuling123.com/openapi/api?key='+rekey + '&info=' + c, function (data){
            var $back=$('<div class="text"><img src="img/service/logo.png" alt="" class="logo l" style="margin-right: .16rem"><div class="txt">' + data.text + '</div><div class="clear"></div></div>');
            $(".center").append($back);
            window.scrollTo(0,$(".center").height());
        });
        }
    });
    $(".thing").on("click",function(){
       leave("detail.html");
    })
});