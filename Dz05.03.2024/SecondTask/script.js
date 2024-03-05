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
        // Создаем элемент для отображения информации
        let infoElement = document.createElement('div');
        infoElement.innerHTML = "Имя файла: " + imageName + "<br>Размеры: " + tempImage.width + "x" + tempImage.height;
        infoElement.style.position = 'absolute';
        infoElement.style.top = '10px';
        infoElement.style.left = '10px';
        infoElement.style.background = 'rgba(255, 255, 255, 0.8)';
        infoElement.style.padding = '5px';
        infoElement.style.borderRadius = '5px';
        // Добавляем элемент к body дочернего окна
        popup.document.body.appendChild(infoElement);
    };
}