$(function(){
    // Функция для получения копирайтеров
    async function getWriters() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users"), data = await response.json();
            // Перебираем полученные данные и создаем HTML-элементы для каждого копирайтера
            data.forEach(function(writer) {
                let writerElement = $("<div class='writer' data-id='" + writer.id + "'>" + writer.name + "</div>");
                writerElement.appendTo($("#writers-list"));
            });
            // В случае успеха возвращаем результат
            return await fetch("https://jsonplaceholder.typicode.com/users");
        } catch (error) { console.error('Ошибка получения копирайтеров:', error); }
    }
    // Функция для отображения информации о копирайтере
    async function showWriterInfo(userId) {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId),user = await response.json(), table = $("<table>");
            // Создаем таблицу и добавляем информацию о копирайтере
            for (let key in user) table.append("<tr><td>" + key + "</td><td>" + user[key] + "</td></tr>");
            $("#writer-info").html(table);
            // В случае успеха возвращаем результат
            return await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
        } catch (error) { console.error('Ошибка получения информации о копирайтере:', error); }
    }
    // Функция для отображения постов копирайтера
    async function showWriterPosts(userId) {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId), posts = await response.json(), table = $("<table>");
            // Создаем таблицу и добавляем информацию о постах
            posts.forEach(function(post) {
                table.append("<tr><td>" + post.title + "</td><td>" + post.body + "</td></tr>");
            });
            $("#writer-posts").html(table);
            // В случае успеха возвращаем результат
            return await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
        } catch (error) { console.error('Ошибка получения постов копирайтера:', error); }
    }
    // Обработчик клика на копирайтера
    $(document).on("click", ".writer", async function() {
        let userId = $(this).data("id");
        await showWriterInfo(userId);
        // Сохраняем ID выбранного пользователя для последующего использования
        $("#show-posts-btn").data("userId", userId);
    });
    // Обработчик клика на кнопку "Show posts"
    $("#show-posts-btn").click(async function() {
        let userId = $(this).data("userId"); // Получаем сохраненный ID выбранного пользователя
        if (userId) await showWriterPosts(userId);
        else alert("Сначала выберите пользователя."); // Выводим предупреждение, если пользователь не выбран
    });
    getWriters(); // Загрузка копирайтеров при загрузке страницы
});