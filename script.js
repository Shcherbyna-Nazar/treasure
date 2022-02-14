window.onresize=resize;
window.onload=resize;
function resize(){
    var height_main=$(".field").css("height");
    $(".main").css("height", height_main);
    $(".main_products").css("height", height_main);
    $(".menu").css("height", height_main);
}
$(".menu")[0].addEventListener('mouseenter', e=>{
    $(".field").css('width', "85%");
    $(".menu").css('width', "15%");
    $(".menu img").css("width", "15%");
    $(".menu img").css("margin-left", "5%");
    $(".menu p").css("display", "block");
    resize();
})
$(".menu")[0].addEventListener('mouseleave', e=>{
    $(".field").css('width', "95%");
    $(".menu").css('width', "5%");
    $(".menu img").css("width", "50%");
    $(".menu img").css("margin-left", "auto");
    $(".menu p").css("display", "none");
    resize();
})