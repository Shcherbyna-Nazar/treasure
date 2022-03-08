window.onresize=resize;
window.onload=resize;
checkMouseEnter=false;
height_ex=Infinity;
function resize(){
    $(".field").css("height", "min-content")
    height_main=$(".field").css("height");
    $(".main").css("height", height_main);
    $(".main_products").css("height", height_main);
    $(".menu").css("height", height_main);
    $(".field").css("height", height_main);
}
function resize_menu(){
    height_main=$(".fix").css("height");
    $(".main").css("height", height_main);
    $(".main_products").css("height", height_main);
    $(".menu").css("height", height_main);
    $(".field").css("height", height_main);
}
console.log($(".menu")[0]);
if(!($(".menu")[0])) {}
else{
    $(".menu")[0].addEventListener('mouseenter', e=>{
        if($(".fix").css("position")=="fixed"){
            $(".fix").css('width', "15%");
        }
        checkMouseEnter=true;
        $(".field").css('width', "85%");
        $(".menu").css('width', "15%");
        $(".fix_text").css("display", "block");
        $(".fix_img").css("width", "15%");
        $(".back a").text('<< Назад');
        $(".back .fix_text").css("display", "block");
        $(".back").css("text-align", "center");
        resize();
    })
    $(".menu")[0].addEventListener('mouseleave', e=>{
        if($(".fix").css("position")=="fixed"){
            $(".fix").css('width', "5%");
        }
        checkMouseEnter=false;
        $(".more").css("display", "none");
        $(".field").css('width', "95%");
        $(".menu").css('width', "5%");
        $(".fix_text").not($(".back_text")).css("display", "none");
        $(".fix_img").css("width", "50%");
        $(".back a").text('<<');
        $(".back").css("text-align", "left");
        $(".navigation_cart").css("margin-top", "20px");
        resize();
    })
}
$(document).scroll(function(){
    if($(this).scrollTop() > 100){
        if(checkMouseEnter==false){
            $(".fix").css('position', "fixed");
            $(".fix").css('top', "0px");
            $(".fix").css('width', "5%");
        }
    }
    else{
        $(".fix").css('position', "relative");
        $(".fix").css('top', "0px");
        $(".fix").css('width', "100%");
    }
})
function settingsMore(){
    check=$(".settings_more").css("display");
    pos=check=='block' ? 'none' : 'block';
    $(".settings_more").css("display", pos);
}
$(".move").click(function(){
    $(this).next().toggle();
    if($(this).next().css("display")=="none"){
        $(".navigation_cart").css("margin-top", "20px");
        resize();
    }
    else{
        $(".navigation_cart").css("margin-top", "-40px")
        resize_menu();
    }
})