$(function(){
    $('.but').on('click', async function() {
        // Получаем данные от пользователя
        let title = $('.form .inputs[type="text"]').val(), type = $('.form .inputs[name="type"]').val();
        $('.films').empty(); // Очищаем предыдущие результаты поиска
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=ваш_ключ_api&s=${title}&type=${type}`); // Запрос к API OMDB
            const data = await response.json();
            $('.films').css('display', 'flex'); // Показываем секцию с фильмами
            if (data.Response === "True") {
                data.Search.forEach(movie => { // Отображаем найденные фильмы
                    $('.films').append(`
                        <div class="plate">
                            <img class="image" src="${movie.poster_path}">
                            <div class="desc">
                                <p class="desctext">Тип: ${type}</p>
                                <p class="desctext">Название: ${movie.title}</p>
                                <p class="desctext">Год выпуска: ${movie.release_date}</p>
                                <input class="but msecond" type="button" value="Подробнее" data-id="${movie.imdbID}">
                            </div>
                        </div>
                    `);
                });
            } else $('.films').append(`<p class="desctext">Фильмы не найдены!</p>`);
        } catch (error) { console.error('Ошибка: ', error); }
    });
    // Обработчик для кнопки "Подробнее"
    $(document).on('click', '.msecond', async function() {
        let imdbID = $(this).data('id'); // Получаем ID фильма
        try {
            // Запрос к API OMDB для получения подробной информации о фильме
            const response = await fetch(`http://www.omdbapi.com/?apikey=ваш_ключ_api&i=${imdbID}`);
            const movieData = await response.json();
            // Показываем секцию с подробной информацией о фильме
            $('.mainplate').css('display', 'flex');
            if (movieData.Response === "True") { // Отображаем информацию о фильме
                $('.mainplate .image').attr('src', movieData.backdrop_path);
                $('.mainplate .desctext:eq(0)').text(`Название: ${movieData.title}`);
                $('.mainplate .desctext:eq(1)').text(`Дата выпуска: ${movieData.release_date}`);
                $('.mainplate .desctext:eq(2)').text(`Жанр: ${type}`);
                $('.mainplate .desctext:eq(3)').text(`Страна: ${movieData.original_language}`);
                $('.mainplate .desctext:eq(4)').text(`Режиссёр: ${movieData.Director}`);
                $('.mainplate .desctext:eq(5)').text(`Авторы: ${movieData.Writer}`);
                $('.mainplate .desctext:eq(6)').text(`Актёры: ${movieData.Actors}`);
                $('.mainplate .desctext:eq(7)').text(`Награды: ${movieData.Awards}`);
            } else $('.mainplate .desctext:eq(0)').text('Данные о фильме не найдены!');
        } catch (error) { console.error('Ошибка:', error); }
    });
});