window.onresize=resize;
window.onload=resize;
function resize(){
    var height_main=$(".field").css("height");
    $(".main").css("height", height_main);
    $(".menu").css("height", height_main);
}
