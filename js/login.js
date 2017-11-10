$(function(){
    var name="input",num=0;
    if(navigator.userAgent.indexOf("MSIE") != -1){
        name="propertychange";
    }
    function clickBtn(){
        var phone=$("#phone").val().length;
        var pass=$("#password").val().length;
        if(phone==11&&pass>5&&pass<21){
            $(".submit").css("background","url(img/login/login2.png)no-repeat center/100%");
        }else{
            $(".submit").css("background","url(img/login/login1.png)no-repeat center/100%");
        }
    }
    $("#phone").bind(name,clickBtn);
    $("#password").bind(name,clickBtn);
    $(".submit").on("click",check);
    function check(){
        var tel=document.getElementById("phone");
        var pass=document.getElementById("password");
        if(tel.value.length==0){
            alert("手机号不能为空！");
        }else{
            var realtel=/^1[0-9]{10}$/.test(tel.value);
            if(realtel==false){
                tel.value="";
                pass.value="";
                alert("请输入正确的手机号！");
            }else{
                if(pass.value.length>5&&pass.value.length<21){
                    var relpass=/^[a-z]+[a-zA-Z0-9_]*$/gi.test(pass.value);
                    if(relpass){
                        window.localStorage.name=tel.value;
                        window.localStorage.pass=pass.value;
                        window.localStorage.addres=1;
                        localStorage.removeItem("index");
                        leave("index.html");
                    }else{
                        pass.value="";
                        alert("密码必须以字母开头，可以包括字母、数字、下划线");
                    }
                }else{
                    pass.value="";
                    alert("密码应为6~20位");
                }
            }
        }
    }
    $("#toshow").on("click",function(){
        $("#toshow img").toggleClass("display");
        if($("#toshow img").hasClass("display")){
            $("#password").attr("type","password");
        }else{
            $("#password").attr("type","text");
        }
    })
});