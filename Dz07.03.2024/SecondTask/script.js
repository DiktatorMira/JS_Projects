document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.regform');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const repeatPasswordInput = document.querySelectorAll('input[type="password"]')[1];
    form.addEventListener('submit', function (event) {
        // Отменяем отправку формы по умолчанию
        event.preventDefault();
        // Проверка введенного почтового адреса
        const emailPattern = /^[a-zA-Z._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            document.getElementById("one").style.visibility = "visible";
            return;
        }
        document.getElementById("one").style.visibility = "hidden";
        // Проверка введенного пароля
        if (passwordInput.value.length < 6 || !/[a-z]/.test(passwordInput.value) || !/[A-Z]/.test(passwordInput.value) || !/\d/.test(passwordInput.value)) {
            document.getElementById("two").style.visibility = "visible";
            return;
        }
        document.getElementById("two").style.visibility = "hidden";
        // Проверка совпадения пароля и повтора пароля
        if (passwordInput.value !== repeatPasswordInput.value) {
            document.getElementById("three").style.visibility = "visible";
            return;
        }
        document.getElementById("three").style.visibility = "hidden";
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
    document.addEventListener('DOMContentLoaded', function () {
        const storedUserData = localStorage.getItem('userData');
        // Если данные о пользователе присутствуют, перенаправляем на следующую страницу
        if (storedUserData) window.location.href = 'index2.html';
    });
});