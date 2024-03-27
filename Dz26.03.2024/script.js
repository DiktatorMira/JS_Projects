$(function(){
    // Обработчик события нажатия на кнопку Поиск
    $('.mfirst').click(function(){
        // Получаем значения из полей ввода
        let title = $('.form .inputs[type="text"]').val();
        let type = $('.form select[name="type"]').val();
        // Формируем URL для запроса к API OMDB
        let url = 'http://www.omdbapi.com/?apikey=0069fc3b-de09-4b51-99c8-084cfd9cea9c&type=' + type + '&s=' + encodeURIComponent(title);
        // Отправляем AJAX-запрос
        fetch(url).then(response => response.json()).then(data => {
            // Проверяем, есть ли фильмы в ответе
            if(data.Response === "True") {
                // Отображаем фильмы в films plate
                $('.films').css('display', 'flex');
                $('.films').empty(); // Очищаем содержимое films plate
                data.Search.forEach(function(movie){
                    // Создаем блок для каждого фильма
                    let movieBlock = $('<div class="plate"></div>');
                    let image = $('<img class="image">').attr('src', movie.Poster);
                    let desc = $('<div class="desc"></div>');
                    let title = $('<p class="desctext"></p>').text('Название: ' + movie.Title);
                    let year = $('<p class="desctext"></p>').text('Год выпуска: ' + movie.Year);
                    let detailsButton = $('<input class="but msecond" type="button" value="Детали">');
                    // Добавляем данные в блок фильма
                    desc.append(title, year, detailsButton);
                    movieBlock.append(image, desc);
                    $('.films').append(movieBlock);
                });
            } else {
                // Если фильмы не найдены, отображаем сообщение
                $('.films').css('display', 'flex');
                $('.films').html('<p>Movie not found!</p>');
            }
        })
        .catch(error => console.log('Error:', error));
    });
    // Обработчик события нажатия на кнопку Детали
    $(document).on('click', '.msecond', function(){
        // Получаем название фильма из блока и формируем ссылку
        let movieTitle = $(this).siblings('.desc').children('p:first').text().replace('Название: ', ''), url = 'http://www.omdbapi.com/?apikey=0069fc3b-de09-4b51-99c8-084cfd9cea9c&t=' + encodeURIComponent(movieTitle);
        // Отправляем AJAX-запрос
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // Отображаем подробную информацию о фильме в mainplate
            $('.mainplate').css('display', 'flex');
            $('.mainplate .desc').empty(); // Очищаем содержимое mainplate
            $('.mainplate .image').attr('src', data.Poster);
            $('.mainplate .desc').append(
                $('<p class="desctext"></p>').text('Название: ' + data.Title),
                $('<p class="desctext"></p>').text('Дата выпуска: ' + data.Release),
                $('<p class="desctext"></p>').text('Жанр: ' + data.Genre),
                $('<p class="desctext"></p>').text('Страна: ' + data.Country),
                $('<p class="desctext"></p>').text('Режиссёр: ' + data.Director),
                $('<p class="desctext"></p>').text('Авторы: ' + data.Writer),
                $('<p class="desctext"></p>').text('Актёры: ' + data.Actors),
                $('<p class="desctext"></p>').text('Награды: ' + data.Awards)
            );
        })
        .catch(error => console.log('Error:', error));
    });
});