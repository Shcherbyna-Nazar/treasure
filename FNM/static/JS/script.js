window.onresize=resize;
window.onload=resize;
checkMouseEnter=false;
height_ex=Infinity;
$("a .back").text('<<');
function resize(){
    $(".field").css("height", "min-content");

    if(!$(".menu")[0]){
        height_main=$(".field").css("height")
    }
    else{
        height_main=parseFloat($(".field").css("height"))>parseFloat($(".fix").css("height")) ? $(".field").css("height")  : $(".fix").css("height");
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
        $(".checkpass img").attr("src", "https://cdn-icons-png.flaticon.com/128/158/158746.png");
    }
    else{
        $(".pass input").attr("type", "text");
        $(".checkpass img").attr("src", "https://cdn-icons-png.flaticon.com/128/633/633655.png");

    }
    
})
$(document).on("click", ".value", function (){
    prev=$(this).parent().html();

    $(this).parent().html('<span class="termin">'+$(this).parent().children(".termin").text()+'</span> <br><form method="POST"> <input type="'+$(this).attr('data-edit-type')
    +'" name="'+$(this).parent().children(".termin").text()+'" placeholder="Введите имя" value="'+$(this).parent().find(".value-main").text()+'" class="edit-input" id="'+$(this).attr('name')+'"><button type="submit" name="save" class="edit-button">Сохранить</button>'
    +'<input type="button" name="cancel" value="Отмена" class="edit-button"></form>');

    $(".edit-input").focus();
})
$(document).on("click", ".edit-button", function(){
    $(this).parent().parent().html(prev);
    let value=$(".edit-input").val();
    let name=$(".edit-input").attr('name');
    $(this).parent().html(prev);

    let url=$(".profile-more-item").first().attr("cur_url");
    $.ajax({
        url:url,
        type: "POST",
        data:{
        value,
        name
        },
        success:console.log("ok")

    })
})

$(".value").hover(function(){
    $(this).children('.edit').toggle();
})

$(document).ready(function(){

    $("#get-more-button").click(function(){
        var url = $("get-more-button").data("cur_url");

        $.ajax({
            url: url,
            type: 'GET',
            success:function(response){
                response_json=JSON.parse(response.new_product);
                response_json.forEach(element => {
                    $('.wrapper').append($('<a href="products/'+element.pk+'"><div class="card">'+
                    '<div class="card-movie"><img src="'+element.fields.product_photo+'" alt="'+element.fields.name+'" height="300" width="600"></div>'+'<div class="card-text">'+element.fields.name+'<div class="price">'+element.fields.price+'</div></div>'+
                    '</div></a>'));
                });
                resize(); 
            }
        })
    })

})


function scrollText(){
    element=$(".profile-name .fix_text")[0];
    scrollTextInt=setInterval(e=>{
        element.scrollLeft++;
        if(element.scrollLeft==element.scrollWidth-element.clientWidth){
            setTimeout(e=>{element.scrollLeft=0;}, 500);
            
            clearInterval(scrollTextInt);
        }
    }, 50)
    
}

$(".profile-name .fix_text")[0].addEventListener("mouseenter", function(){
    scrollTextDelay=setTimeout(scrollText, 200)
})
$(".profile-name .fix_text")[0].addEventListener("mouseleave", function(){
   this.scrollLeft=0;
   clearInterval(scrollTextInt);
})