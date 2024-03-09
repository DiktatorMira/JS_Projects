document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.regform');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const repeatPasswordInput = document.querySelectorAll('input[type="password"]')[1];
    const errorMessages = []; // Сюда будут добавляться сообщения об ошибках
    // Выведение в консоль хранимых данных пользователя
    console.log(localStorage.getItem('userData'));
    form.addEventListener('submit', function (event) {
        // Отменяем отправку формы по умолчанию
        event.preventDefault();
        // Проверка введенного почтового адреса
        const emailPattern = /^[a-zA-Z._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) errorMessages.push('Неверный адрес электронной почты!');
        // Проверка введенного пароля
        if (passwordInput.value.length < 6 || !/[a-z]/.test(passwordInput.value) || !/[A-Z]/.test(passwordInput.value) || !/\d/.test(passwordInput.value)) errorMessages.push('Неверный пароль!');
        // Проверка совпадения пароля и повтора пароля
        if (passwordInput.value !== repeatPasswordInput.value) errorMessages.push('Пароли не совпадают!');
        // Отображение сообщений об ошибках
        const errorSpan = document.getElementById("one");
        if (errorMessages.length > 0) {
            errorSpan.innerHTML = errorMessages.join(' ');
            errorSpan.style.visibility = "visible";
            errorMessages.length = 0; // Очищаем массив сообщений
            return;
        }
        errorSpan.style.visibility = "hidden";
        // Если все проверки пройдены, сохраняем данные в Local Storage
        const userData = {
            email: emailInput.value,
            password: passwordInput.value
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        // Перенаправляем пользователя на следующую страницу
        window.location.href = 'index2.html';
    });

    // Проверка наличия данных о пользователе в Local Storage при загрузке страницы
    const storedUserDataString = localStorage.getItem('userData');
    // Проверяем, что строка не пуста
    if (storedUserDataString) {
        try {
            // Пробуем преобразовать строку в объект JSON
            const storedUserData = JSON.parse(storedUserDataString);
            // Если преобразование прошло успешно и есть данные, перенаправляем
            if (storedUserData) window.location.href = 'index2.html';
        } catch (error) { console.error('Ошибка при парсинге данных из Local Storage: ', error); }
    }
});