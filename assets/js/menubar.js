$(document).ready(function(){

    $('#biogPage, #musicPage, #photosPage, #shopPage').hide();

    $(".side-nav li").each(function(i) {
        $(this).click(function() {
            $("#wrapper").find("div:eq('" + i + "')").show().siblings().hide();
        });
    });
});
