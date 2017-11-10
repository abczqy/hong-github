$(function(){
	$(".change-account").on("click",function(){
       	var result=window.confirm("您确定要切换账号吗？\n切换账号会清除当前登录信息");
       	if(result){
       		leave("start.html");
        	window.localStorage.clear();
       	}
   	});
   	if(window.localStorage.phone){
   		$("#number span:eq(1)").text(window.localStorage.phone);
   	}else{
   		$("#number span:eq(1)").text(window.localStorage.name);
   	}
   	$("#address span:eq(1)").text(window.localStorage.address);
	$("#number").on("click",function(){
		var result=window.prompt("请输入您的手机号码");
		if(/^1[0-9]{10}$/.test(result)){
			$("#number span:eq(1)").text(result);
			window.localStorage.phone=result;
		}else{
			alert("您输入的手机号码错误！");
		}
	});
});
