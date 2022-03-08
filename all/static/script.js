window.onresize=resize;
window.onload=resize;
checkMouseEnter=false;
height_ex=Infinity;
$("a .back").text('<<');
function resize(){
    $(".field").css("height", "min-content");
    height_main=parseFloat($(".field").css("height"))>parseFloat($(".fix").css("height")) ? parseFloat($(".field").css("height")) : parseFloat($(".fix").css("height"));
    $(".main").css("height", height_main);
    $(".main_products").css("height", height_main);
    $(".menu").css("height", height_main);
    $(".field").css("height", height_main);
}
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
        $("a .back").text('<< Назад');
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
        $("a .back").text('<<');
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
$(".move").click(function(){
    $(this).next().toggle();
    if($(this).next().css("display")=="none"){
        $(".navigation_cart").css("margin-top", "20px");
        resize();
    }
    else{
        $(".navigation_cart").css("margin-top", "-40px")
        resize();
    }
})