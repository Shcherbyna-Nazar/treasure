window.onresize=resize;
window.onload=resize_label;
checkMouseEnter=false;
function change(){
    rad=document.getElementsByName('size');
for (var i=0;i<rad.length; i++) {
    if (rad[i].checked) {
        a=i;
    }
}   
}
function resize_label(){
    width_label=parseInt($(".profile label").css("width"))+10;
    $(".profile label").css("width", width_label +'px');
    resize();
    console.log(".!.")
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
    }
    checkMouseEnter=true;
    $(".field").css('width', "85%");
    $(".menu").css('width', "15%");
    $(".menu img").css("width", "15%");
    $(".menu img").css("margin-left", "5%");
    $(".menu label").css("display", "block");
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
    $(".menu label").css("display", "none");
    $(".settings_more").css("display", "none");
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
function settingsMore(){
    check=$(".settings_more").css("display");
    pos=check=='block' ? 'none' : 'block';
    $(".settings_more").css("display", pos);
}
