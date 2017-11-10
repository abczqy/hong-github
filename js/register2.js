$(function(){
    $("#toshow").on("click",function(){
        $("#toshow img").toggleClass("display");
        if($("#toshow img").hasClass("display")){
            $("#setpass").attr("type","password");
        }else{
            $("#setpass").attr("type","text");
        }
    });
    var name="input";
    if(navigator.userAgent.indexOf("MSIE") != -1){
        name="propertychange";
    }
    $("#setpass").bind(name,function(){
        var pass=document.getElementById("setpass");
        if(pass.value.length>5){
            $(".submit").css("background","url(img/login/login2.png)no-repeat center/100%");
        }else{
            $(".submit").css("background","url(img/login/login1.png)no-repeat center/100%");
        }
    });
    $(".submit").on("click",function(){
        var pass=document.getElementById("setpass");
        if(pass.value.length>5&&pass.value.length<21){
            var relpass=/^[a-z]+[a-zA-Z0-9_]*$/gi.test(pass.value);
            if(relpass){
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
            alert("密码应为6~20位")
        }
    })
});