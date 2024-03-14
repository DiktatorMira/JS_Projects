$(function(){
    $('.image').hover(function(){
        $(this).effect("pulsate", { times: 1, percent: 1000 }, 150);
    });
    $('.image').click(function() {
        var imageUrl = $(this).css('background-image');
        $('.bigimage').css('background-image', imageUrl);
        $('.bigimage').effect("explode", {
            pieces: 12,
            duration: 300,
            complete: function() {
                $(this).show();
            }
        });
    });
})