$(document).ready(function(){

    // $('#experiencePage, #interactivePage, #timelinePage').hide();
    $('#interactivePage, #timelinePage').hide();

    $(".side-nav li").each(function(i) {
        $(this).click(function() {
            $("#wrapper").find("div:eq('" + i + "')").show().siblings().hide();
        });
    });
});
