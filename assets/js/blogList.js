$(document).ready(function(){
    $(".services").find("img").css("width",$(".services").width()+"px")
    }),
$(document).ready(function(){
    $("a.cat-item")
    .mouseenter(function(){
        $(this).animate({left:"20px"},300),
$(this).css("color","#6382f7")
    }),
$("a.cat-item").mouseleave(function(){
    $(this).animate({left:"0px"},300),
    $(this).css("color","black")})
    });