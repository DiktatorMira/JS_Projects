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
        const lastNameInput = document.querySelector('input[placeholder="Last Name"]');
        const birthYearInput = document.querySelector('input[placeholder="yyyy"]');
        const genderSelect = document.getElementById('gender');
        const phoneInput = document.querySelector('input[placeholder="+0000000000"]');
        const skypeInput = document.querySelector('input[placeholder="Skype"]');
        // Добавляем обработчик для кнопки "Save"
        const saveButton = document.querySelector('.but2');
        saveButton.addEventListener('click', function () {
            // Предотвращаем перезагрузку страницы по умолчанию
            event.preventDefault();
            // Проверка имени
            const nameValue = nameInput.value.trim();
            if (nameValue === '' || !/^[a-zA-Z]+$/.test(nameValue) || nameValue.length > 20) {
                document.getElementById("fourth").style.visibility = "visible";
                return;
            }
            document.getElementById("fourth").style.visibility = "hidden";
            // Проверка фамилии
            const lastNameValue = lastNameInput.value.trim();
            if (lastNameValue === '' || !/^[a-zA-Z]+$/.test(lastNameValue) || lastNameValue.length > 20) {
                document.getElementById("seventh").style.visibility = "visible";
                return;
            }
            document.getElementById("seventh").style.visibility = "hidden";
            // Проверка года рождения
            const birthYearValue = birthYearInput.value.trim();
            const currentYear = new Date().getFullYear();
            if (birthYearValue === '' || !/^\d{4}$/.test(birthYearValue) || parseInt(birthYearValue) < 1900 || parseInt(birthYearValue) > currentYear) {
                document.getElementById("fifth").style.visibility = "visible";
                return;
            }
            document.getElementById("fifth").style.visibility = "hidden";
            // Проверка номера телефона (если введено)
            const phoneValue = phoneInput.value.trim();
            if (phoneValue !== '' && (!/^\+?\d{10,12}$/.test(phoneValue))) {
                document.getElementById("sixth").style.visibility = "visible";
                return;
            }
            document.getElementById("sixth").style.visibility = "hidden";
            //Сохранение данных в local storage при прохождении всех проверок
            const detailedUserData = {
                name: nameInput.value,
                lastName: lastNameInput.value,
                birthYear: birthYearInput.value,
                gender: genderSelect.value,
                phone: phoneInput.value,
                skype: skypeInput.value
            };
            console.log("Данные сохранены!");
            localStorage.setItem('detailedUserData', JSON.stringify(detailedUserData));
        });
        // Добавляем обработчик для кнопки "exit"
        const exitButton = document.getElementById('exit');
        exitButton.addEventListener('click', function () {
            // Удаляем данные о пользователе из Local Storage
            localStorage.removeItem('userData');
            // Перенаправляем пользователя на первую страницу
            window.location.href = 'index1.html';
        });
    } 
    // Если данные о пользователе отсутствуют, перенаправляем на первую страницу
    else window.location.href = 'index1.html';
});