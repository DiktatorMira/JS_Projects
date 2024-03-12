document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('butt');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const repeatPasswordInput = document.querySelectorAll('input[type="password"]')[1];
    // Выведение в консоль хранимых данных пользователя
    console.log(localStorage.getItem('userData'));
    button.addEventListener('click', function (event) {
        // Отменяем отправку формы по умолчанию
        event.preventDefault();
        // Проверка введенного почтового адреса
        const emailPattern = /^[a-zA-Z._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            document.getElementById("one").innerHTML = 'Почта должна содержать @ и .!';
            document.getElementById("one").style.visibility = "visible";
            return;
        }
        document.getElementById("one").style.visibility = "hidden";
        // Проверка введенного пароля
        if(passwordInput.value.length < 6){
            document.getElementById("two").innerHTML = 'Должно быть больше 6 символов!';
            document.getElementById("two").style.visibility = "visible";
            return;
        } else if(!/[a-z]/.test(passwordInput.value)){
            document.getElementById("two").innerHTML = 'Должы быть обчные буквы!';
            document.getElementById("two").style.visibility = "visible";
            return;
        } else if(!/[A-Z]/.test(passwordInput.value)){
            document.getElementById("two").innerHTML = 'Должа быть заглавная буква!';
            document.getElementById("two").style.visibility = "visible";
            return;
        } else if(!/\d/.test(passwordInput.value)){
            document.getElementById("two").innerHTML = 'Должны быть цифры!';
            document.getElementById("two").style.visibility = "visible";
            return;
        }
        document.getElementById("two").style.visibility = "hidden";
        // Проверка совпадения пароля и повтора пароля
        if (passwordInput.value !== repeatPasswordInput.value) {
            document.getElementById("three").innerHTML = 'Пароли не совпадают!';
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