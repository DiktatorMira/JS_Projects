$(function(){
    $('.but').click(function(){
        try {
            let jsonData = JSON.parse($('.inpts').val());
            $('.inpts.second').val(JSON.stringify(jsonData, null, 4));
            $('.inpts.second').css("color", "black");
        } catch (error) {
            $('.inpts.second').val("Некорректный формат JSON!");
            $('.inpts.second').css("color", "red");
        }
    });
});