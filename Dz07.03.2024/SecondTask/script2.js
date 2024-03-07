document.addEventListener('DOMContentLoaded', function () {
    // Проверка наличия данных о пользователе в Local Storage при загрузке страницы
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        // Если данные о пользователе присутствуют, преобразуем их из строки JSON
        const userData = JSON.parse(storedUserData);
        // Отображаем приветствие с почтой пользователя
        const greetingElement = document.querySelector('h3');
        greetingElement.textContent = `Hello, ${userData.email}!`;
        // Заполняем форму данными о пользователе
        const nameInput = document.querySelector('input[placeholder="Name"]');
        nameInput.value = userData.name || '';
        const lastNameInput = document.querySelector('input[placeholder="Last Name"]');
        lastNameInput.value = userData.lastName || '';
        const birthYearInput = document.querySelector('input[placeholder="yyyy"]');
        birthYearInput.value = userData.birthYear || '';
        const genderSelect = document.getElementById('gender');
        genderSelect.value = userData.gender || '';
        const phoneInput = document.querySelector('input[placeholder="+0000000000"]');
        phoneInput.value = userData.phone || '';
        const skypeInput = document.querySelector('input[placeholder="Skype"]');
        skypeInput.value = userData.skype || '';
        // Добавляем обработчик для кнопки "Save"
        const saveButton = document.querySelector('.but2');
        saveButton.addEventListener('click', function () {
            // Если данные введены корректно, сохраняем их в Local Storage
            if (validateForm()) saveUserData();
        });
        // Добавляем обработчик для кнопки "exit"
        const exitButton = document.querySelector('.a');
        exitButton.addEventListener('click', function () {
            // Удаляем данные о пользователе из Local Storage
            localStorage.removeItem('userData');
            // Перенаправляем пользователя на первую страницу
            window.location.href = 'index.html';
        });
    } 
    // Если данные о пользователе отсутствуют, перенаправляем на первую страницу
    else window.location.href = 'index.html';
    // Функция проверки и сохранения данных в Local Storage
    function saveUserData() {
        const detailedUserData = {
            name: nameInput.value,
            lastName: lastNameInput.value,
            birthYear: birthYearInput.value,
            gender: genderSelect.value,
            phone: phoneInput.value,
            skype: skypeInput.value
        };
        localStorage.setItem('detailedUserData', JSON.stringify(detailedUserData));
    }
    // Функция проверки данных в форме
    function validateForm() {
        // Проверка имени
        const nameInput = document.querySelector('input[placeholder="Name"]' || nameValue.length > 20);
        const nameValue = nameInput.value.trim();
        if (nameValue === '' || !/^[a-zA-Z]+$/.test(nameValue)) {
            document.getElementById("fourth").style.visibility = "visible";
            return false;
        }
        document.getElementById("fourth").style.visibility = "hidden";
        // Проверка фамилии
        const lastNameInput = document.querySelector('input[placeholder="Last Name"]');
        const lastNameValue = lastNameInput.value.trim();
        if (lastNameValue === '' || !/^[a-zA-Z]+$/.test(lastNameValue) || lastNameValue.length > 20) {
            document.getElementById("seventh").style.visibility = "visible";
            return false;
        }
        document.getElementById("seventh").style.visibility = "hidden";
        // Проверка года рождения
        const birthYearInput = document.querySelector('input[placeholder="yyyy"]');
        const birthYearValue = birthYearInput.value.trim();
        const currentYear = new Date().getFullYear();
        if (birthYearValue === '' || !/^\d{4}$/.test(birthYearValue) || parseInt(birthYearValue) < 1900 || parseInt(birthYearValue) > currentYear) {
            document.getElementById("fifth").style.visibility = "visible";
            return false;
        }
        document.getElementById("fifth").style.visibility = "hidden";
        // Проверка номера телефона (если введено)
        const phoneInput = document.querySelector('input[placeholder="+0000000000"]');
        const phoneValue = phoneInput.value.trim();
        if (phoneValue !== '' && (!/^\+?\d{10,12}$/.test(phoneValue))) {
            document.getElementById("sixth").style.visibility = "visible";
            return false;
        }
        document.getElementById("sixth").style.visibility = "hidden";
        return true;
    }
});