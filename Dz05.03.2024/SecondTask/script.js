document.querySelectorAll('.image').forEach(function (image, index) {
    image.addEventListener('click', function () {
        openPopup(index);
    });
});
function openPopup(index) {
    // Получаем название файла для изображения
    let imageName = "P" + index + ".JPG";
    // Формируем путь к увеличенному изображению
    let bigImagePath = "textures/big/" + imageName;
    // Загружаем изображение, чтобы получить его размеры
    let tempImage = new Image();
    tempImage.src = bigImagePath;
    tempImage.onload = function () {
        // Открываем дочернее окно с размерами изображения
        let popup = window.open("", "ImagePopup", "width=" + tempImage.width + "px,height=" + tempImage.height + "px,top=100,left=100");
        // Добавляем содержимое в дочернее окно
        popup.document.body.style.background = "url(" + bigImagePath + ")";
        popup.document.body.style.backgroundSize = "cover";
        popup.document.body.style.margin = "0";
        popup.document.body.style.height = "100%";
        popup.document.body.style.fontFamily  = "sans-serif";
        // Закрываем окно при клике
        popup.document.body.addEventListener('click', function () {
            popup.close();
        });
    };
}

document.querySelectorAll('.image').forEach(function (image, index) {
    image.addEventListener('mouseover', function () {
        showImageInfo(index);
    });
});
function showImageInfo(index) {
    let imageName = "P" + index + ".JPG";
    let bigImagePath = "textures/big/" + imageName;
    // Создаем новый объект Image для получения размеров изображения
    let tempImage = new Image();
    tempImage.src = bigImagePath;
    tempImage.onload = function () {
        // Изменяем адресную строку браузера с информацией об увеличенном изображении
        window.location.href = "#image=" + imageName + "&width=" + tempImage.width + "&height=" + tempImage.height;
    };
}
// Очищаем адресную строку, когда мышь покидает изображение
document.querySelectorAll('.image').forEach(function (image) {
    image.addEventListener('mouseout', function () {
        // Возвращаемся к обычному URL (может потребоваться дополнительная логика для очистки параметров)
        window.location.href = window.location.origin + window.location.pathname;
    });
});