$(function(){
    // Функция для получения копирайтеров
    function getWriters() {
        $.get("https://jsonplaceholder.typicode.com/users", function(data) {
            // Перебираем полученные данные и создаем HTML-элементы для каждого копирайтера
            data.forEach(function(writer) {
                let writerElement = $("<div class='writer' data-id='" + writer.id + "'>" + writer.name + "</div>");
                writerElement.appendTo($("#writers-list"));
            });
        });
    }
    // Функция для отображения информации о копирайтере
    function showWriterInfo(userId) {
        $.get("https://jsonplaceholder.typicode.com/users/" + userId, function(user) {
            // Создаем таблицу и добавляем информацию о копирайтере
            let table = $("<table>");
            for (let key in user) table.append("<tr><td>" + key + "</td><td>" + user[key] + "</td></tr>");
            $("#writer-info").html(table);
        });
    }
    // Функция для отображения постов копирайтера
    function showWriterPosts(userId) {
        $.get("https://jsonplaceholder.typicode.com/posts", { userId: userId }, function(posts) {
            // Создаем таблицу и добавляем информацию о постах
            let table = $("<table>");
            posts.forEach(function(post) {
                table.append("<tr><td>" + post.title + "</td><td>" + post.body + "</td></tr>");
            });
            $("#writer-posts").html(table);
        });
    }
    // Обработчик клика на копирайтера
    $(document).on("click", ".writer", function() {
        let userId = $(this).data("id");
        showWriterInfo(userId);
        // Сохраняем ID выбранного пользователя для последующего использования
        $("#show-posts-btn").data("userId", userId);
    });
    // Обработчик клика на кнопку "Show posts"
    $("#show-posts-btn").click(function() {
        let userId = $(this).data("userId"); // Получаем сохраненный ID выбранного пользователя
        if (userId) showWriterPosts(userId);
        else alert("Сначало выберите пользователя."); // Выводим предупреждение, если пользователь не выбран
    });
    // Загрузка копирайтеров при загрузке страницы
    getWriters();
});