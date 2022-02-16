window.onresize=resize;
window.onload=resize;
checkMouseEnter=false;   
function resize(){
    var height_main=$(".field").css("height");
    $(".main").css("height", height_main);
    $(".main_products").css("height", height_main);
    $(".menu").css("height", height_main);
}
$(".menu")[0].addEventListener('mouseenter', e=>{
    if($(".fix").css("position")=="fixed"){
        $(".fix").css('width', "15%");
    }
    checkMouseEnter=true;
    $(".field").css('width', "85%");
    $(".menu").css('width', "15%");
    $(".menu img").css("width", "15%");
    $(".menu img").css("margin-left", "5%");
    $(".menu p").css("display", "block");
    resize();
})
$(".menu")[0].addEventListener('mouseleave', e=>{
    if($(".fix").css("position")=="fixed"){
        $(".fix").css('width', "5%");
    }
    checkMouseEnter=false;
    $(".field").css('width', "95%");
    $(".menu").css('width', "5%");
    $(".menu img").css("width", "50%");
    $(".menu img").css("margin-left", "auto");
    $(".menu p").css("display", "none");
    resize();
})
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