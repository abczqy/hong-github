$(function(){
    var name="input";
    var num=59,clicknum=true,timer=null;
    $("#phone").focus();
    if(navigator.userAgent.indexOf("MSIE") != -1){
        name="propertychange";
    }
    $("#phone").bind(name,function(){
        var input=document.getElementById("phone");
        if(input.value.length==11){
        	clicknum=true;
            $(".validate").css("display","block");
        }else{
        	changePhone();
        	$(".validate").css("display", "none");
        	$("#password").attr("disabled", true);
        	$("#password").val("");
        }
    });
    function changePhone() {
		clearInterval(timer);
		$(".validate").text("发送验证码");
		$(".validate").css("background", "url(img/register/validate.png)no-repeat center/100%");
		num = 59;
    }
    $(".validate").on("click",function(){
        var tel=document.getElementById("phone");
        if(clicknum==true){
            var realtel=/^1[0-9]{10}$/.test(tel.value);//判断手机号
            if(realtel==false){
                tel.value="";
                $(".validate").css("display","none");
                alert("请输入正确的手机号码");
            }else{
                clearInterval(timer);
                clicknum=false;
                $("#password").attr("disabled",false);
                $("#password").focus();
                $(".validate").css("background","url(img/register/time.png)no-repeat center/100%");
                $(".validate").text("60s");
                timer=setInterval(function(){
                    if(num>0){
                        $(".validate").text(num-- +"s");
                    }else{
                        clicknum=true;
                        changePhone();
                    }
                },1000)
            }
        }
    });
    $("#password").bind(name,function(){
        var tel=document.getElementById("phone");
        var pass=document.getElementById("password");
        if(tel.value.length==11&&pass.value.length==6){
            $(".submit-re").css("background","url(img/register/register2.png)no-repeat center/100%");
        }
    });
    $(".submit-re").on("click",function(){
    	var testvali=/^[0-9]{6}$/.test($("#password").val());
        if(testvali){
        	window.localStorage.name=$("#phone").val();
        	leave("register2.html");
        }else{
        	alert("请输入正确的验证码");
        }
    })
});