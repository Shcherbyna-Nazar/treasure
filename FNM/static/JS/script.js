window.onresize=resize;
window.onload=resize;
checkMouseEnter=false;
height_ex=Infinity;
$("a .back").text('<<');
function resize(){
    $(".field").css("height", "min-content");
    if(!$(".menu")){
        height_main=parseFloat($(".field").css("height"))>parseFloat($(".fix").css("height")) ? $ : $(".fix").css("height");
    }
    else{
        height_main=$(".field").css("height")
    }
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
$(".checkpass").click(function(){
    if($(".pass input").attr("type")=="text"){
        $(".pass input").attr("type", "password");
        $(".checkpass img").attr("src", "https://cdn-icons.flaticon.com/png/512/6107/premium/6107590.png?token=exp=1646903348~hmac=7c76e0ccb473ab03ac0daff33d7ca472");
    }
    else{
        $(".pass input").attr("type", "text");
        $(".checkpass img").attr("src", "https://cdn-icons.flaticon.com/png/512/2455/premium/2455761.png?token=exp=1646905483~hmac=6f4b3b61a09d640af08cb2c08b79b2a0");
    }
    
})