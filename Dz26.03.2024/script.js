$(function(){
    $('.mfirst').on('click', async function() {
        let title = $('.inputs[type="text"]').val(), type = $('.inputs[name="type"]').val(), apiKey = "81b10ed9", url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=${type}`;
        try {
            const response = await fetch(url), data = await response.json();
            if(data.Response === "True") {
                $('.films').css('display', 'flex');
                $('.films').empty();
                let movies = data.Search;
                movies.forEach(function(movie) {
                    let plate = `<div class="plate">
                                    <img class="image" src="${movie.Poster}">
                                    <div class="desc">
                                        <p class="desctext">Тип: ${movie.Type}</p>
                                        <p class="desctext">${movie.Title}</p>
                                        <p class="desctext">Год выпуска: ${movie.Year}</p>
                                        <input class="but msecond" type="button" value="Детали">
                                    </div>
                                </div>`;
                    $('.films').append(plate);
                });
            } else {
                $('.films').css('display', 'flex');
                $('.films').html('<p class="desctext">Фильм не найден!</p>');
            }
        } catch(error) { console.error('Ошибка при выполнении запроса:', error); }
    });
    $(document).on('click', '.msecond', async function() {
        let title = $(this).closest('.plate').find('.desctext').eq(1).text(), apiKey = "81b10ed9", url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;
        try {
            const response = await fetch(url), data = await response.json();
            if(data.Response === "True") {
                $('.mainplate .image').attr('src', data.Poster);
                $('.mainplate .desctext').eq(0).text(`Название: ${data.Title}`);
                $('.mainplate .desctext').eq(1).text(`Дата выпуска: ${data.Released}`);
                $('.mainplate .desctext').eq(2).text(`Жанр: ${data.Genre}`);
                $('.mainplate .desctext').eq(3).text(`Страна: ${data.Country}`);
                $('.mainplate .desctext').eq(4).text(`Режиссёр: ${data.Director}`);
                $('.mainplate .desctext').eq(5).text(`Авторы: ${data.Writer}`);
                $('.mainplate .desctext').eq(6).text(`Актёры: ${data.Actors}`);
                $('.mainplate .desctext').eq(7).text(`Награды: ${data.Awards}`);
                $('.overlay').css('display', 'flex');
                $('.overlay').css('animation', 'appear .5s linear forwards');
            } else alert("Информация о фильме не найдена!");
        } catch(error) { console.error('Ошибка при выполнении запроса:', error); }
    });
    $('.mthird').on('click', function() {
        $('.overlay').css('display', 'none');
        $('.overlay').css('animation', 'disappear .5s linear forwards');
    });
});