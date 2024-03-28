import { MovieService } from './movieService.js';
const movieService = new MovieService();

$(function() {
    $('.mfirst').on('click', async function() {
        const title = $('.inputs[type="text"]').val();
        const type = $('.inputs[name="type"]').val();
        try {
            const movies = await movieService.search(title, type);
            if (movies && movies.length > 0) displayMovies(movies);
            else {
                $('.films').css('display', 'flex');
                $('.films').html('<p class="desctext">Фильм не найден!</p>');
            }
        } catch(error) { console.error('Ошибка при выполнении запроса:', error); }
    });
    $(document).on('click', '.msecond', async function() {
        const title = $(this).closest('.plate').find('.desctext').eq(1).text();
        try {
            const movieDetails = await movieService.getMovie(title);
            if (movieDetails) displayMovieDetails(movieDetails);
            else alert("Информация о фильме не найдена!");
        } catch(error) { console.error('Ошибка при выполнении запроса:', error); }
    });
    $('.mthird').on('click', function() {
        $('.overlay').css('display', 'none');
        $('.overlay').css('animation', 'disappear .5s linear forwards');
    });
});
function displayMovies(movies) {
    $('.films').css('display', 'flex');
    $('.films').empty();
    movies.forEach(function(movie) {
        const plate = `<div class="plate">
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
}
function displayMovieDetails(movieDetails) {
    $('.mainplate .image').attr('src', movieDetails.Poster);
    $('.mainplate .desctext').eq(0).text(`Название: ${movieDetails.Title}`);
    $('.mainplate .desctext').eq(1).text(`Дата выпуска: ${movieDetails.Released}`);
    $('.mainplate .desctext').eq(2).text(`Жанр: ${movieDetails.Genre}`);
    $('.mainplate .desctext').eq(3).text(`Страна: ${movieDetails.Country}`);
    $('.mainplate .desctext').eq(4).text(`Режиссёр: ${movieDetails.Director}`);
    $('.mainplate .desctext').eq(5).text(`Авторы: ${movieDetails.Writer}`);
    $('.mainplate .desctext').eq(6).text(`Актёры: ${movieDetails.Actors}`);
    $('.mainplate .desctext').eq(7).text(`Награды: ${movieDetails.Awards}`);
    $('.overlay').css('display', 'flex');
    $('.overlay').css('animation', 'appear .5s linear forwards');
}