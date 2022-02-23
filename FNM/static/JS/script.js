window.onresize=resize;
window.onload=resize_label;
checkMouseEnter=false;
function goToUp(){
    $(this).scrollTop(0);
}
function resize_label(){
    width_label=parseInt($(".profile label").css("width"))+10;
    $(".profile label").css("width", width_label +'px');
    resize();
}
function resize(){
    height_main=$(".field").css("height");
    $(".main").css("height", height_main);
    $(".main_products").css("height", height_main);
    $(".menu").css("height", height_main);
}
$(".menu")[0].addEventListener('mouseenter', e=>{
    if($(".fix").css("position")=="fixed"){
        $(".fix").css('width', "15%");
        $(".up").css('width', "15%");
        $(".up").html("Naverh");
    }
    checkMouseEnter=true;
    $(".field").css('width', "85%");
    $(".menu").css('width', "15%");
    $(".fix_text").css("display", "block");
    $(".fix_img").css("width", "15%");
    //$(".back").html("<div class="fix_text"><a href=\"{% url 'home' %}\"><< Назад</a></div>");
    $(".back .fix_text").css("display", "block");
    $(".back").css("text-align", "center");
    resize();
})
$(".menu")[0].addEventListener('mouseleave', e=>{
    if($(".fix").css("position")=="fixed"){
        $(".fix").css('width', "5%");
        $(".up").css('width', "5%");
        $(".up").html("&#8657;")
    }
    checkMouseEnter=false;
    $(".more").css("display", "none");
    $(".field").css('width', "95%");
    $(".menu").css('width', "5%");
    $(".fix_text").css("display", "none");
    $(".fix_img").css("width", "50%");
    //$(".back").html("<a href=\"{% url 'home' %}\"><div class="fix_text"><<</div></a>");
    $(".back").css("text-align", "left");
    resize();
})
$(document).scroll(function(){
    widthScreen=window.innerHeight;
    pageHeight = document.documentElement.scrollHeight;
    stopHeight=pageHeight-widthScreen-200; //  - height footer and height div.back
    if($(this).scrollTop() > 100){
        if(checkMouseEnter==false){
            $(".fix").css('position', "fixed");
            $(".fix").css('top', "0px");
            $(".fix").css('width', "5%");
            $(".up").css('width', "5%");
            $(".up").css('position', "fixed");
            $(".up").css('display', "block");
        }
    }
    else{
        $(".fix").css('position', "relative");
        $(".fix").css('top', "0px");
        $(".fix").css('width', "100%");
        $(".up").css('width', "100%");
        $(".up").css('display', "none");
    }
    if($(this).scrollTop() > stopHeight){
            $(".up").css('display', "none");
        }
})
function settingsMore(){
    check=$(".settings_more").css("display");
    pos=check=='block' ? 'none' : 'block';
    $(".settings_more").css("display", pos);
}
$("#basket").click(function(){
    $(this).next().toggle();
})