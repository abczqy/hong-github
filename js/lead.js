$(function(){
    $("body").css("height",$(window).height()+'px');
    $(window).resize(function(){
        $("body").css("height",$(window).height()+'px');
    });
    //地图
    function myFun(result){
        var cityName = result.name;
        map.setCenter(cityName);
        window.localStorage.address=cityName;
    }
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
    //引导页
    var num=Math.max(parseInt(Math.random()*3),1);
    $(".lead").attr("src","img/lead/"+num+".png");
    var time=2;
    setTimeout(function(){
        $(".start").fadeOut();
        if(window.localStorage["name"]!=null&&window.localStorage["pass"]!=null){
            $(".lead").fadeIn();
            $("a").css("display","block");
            window.localStorage.addres=1;
            localStorage.removeItem("index");
            setInterval(function(){
                if(time==0){
                    leave("index.html");
                }else{
                    $("a").text(time--+"s");
                }
            },1000)
        }else{
            leave("start.html");
        }
    },2000);
});