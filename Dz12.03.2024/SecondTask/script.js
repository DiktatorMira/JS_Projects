$(function () {
    let isResizingRight = false, isResizingLeft = false, startYRight, startYLeft;
    //Правая часть
    $('#right').mousedown(function (e) {
        e.preventDefault();
        isResizingRight = true;
        startYRight = e.pageY;
    });
    $(document).mousemove(function (e) {
        if (isResizingRight) {
            let deltaY = e.pageY - startYRight;
            let newTopHeight = $('#topright').height() + deltaY;
            let newBottomHeight = $('#bottomright').height() - deltaY;
            if (newTopHeight >= 100 && newBottomHeight >= 100) {
                $('#topright').height(newTopHeight);
                $('#bottomright').height(newBottomHeight);
            }
            startYRight = e.pageY;
        }
    }).mouseup(function () {
        isResizingRight = false;
    });
    //Левая часть
    $('#left').mousedown(function (e) {
        e.preventDefault();
        isResizingLeft = true;
        startYLeft = e.pageY;
    });
    $(document).mousemove(function (e) {
        if (isResizingLeft) {
            let deltaY = e.pageY - startYLeft;
            let newTopHeight = $('#topleft').height() + deltaY;
            let newBottomHeight = $('#bottomleft').height() - deltaY;
            if (newTopHeight >= 100 && newBottomHeight >= 100) {
                $('#topleft').height(newTopHeight);
                $('#bottomleft').height(newBottomHeight);
            }
            startYLeft = e.pageY;
        }
    }).mouseup(function () {
        isResizingLeft = false;
    });
    //Скрытие левой
    $('.vertplank').click(function () {
        if ($('.leftcontainer').width() > 0) {
            $('.leftcontainer').width(0);
            $('.vertplank').html('>');
            $('.rightcontainer').width('100%');
        } else {
            $('.leftcontainer').width('24.5%');
            $('.vertplank').html('<');
            $('.rightcontainer').width('74.5%');
        }
    });
});