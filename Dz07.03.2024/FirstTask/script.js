document.addEventListener('DOMContentLoaded', function () {
    function CheckForm(form){
        // Проверка пароля
        let password1 = form.elements['text_password1'].value;
        let password2 = form.elements['text_password2'].value;
        if (password1.length < 6 || !/\d/.test(password1) || !/[a-zA-Z]/.test(password1) || password1 !== password2) {
            alert("Пароль должен содержать не менее 6 символов, включать буквы и цифры, а также совпадать с повторенным паролем.");
            return false;
        }
        // Проверка ФИО
        let fullname = form.elements['fullname'].value;
        if (!fullname.trim()) {
            alert("Введите полное имя (ФИО).");
            return false;
        }
        // Проверка почты
        let email = form.elements['e_mail'].value;
        // Простая проверка на наличие символа @ в адресе электронной почты
        if (!email.includes('@')) {
            alert("Введите корректный адрес электронной почты.");
            return false;
        }
        return true;
    }
    function saveFormToCookie() {
        let form = document.forms.frm1;
        let formData = {};
        //Вызов функции проверяющая заполнение формы
        if(!CheckForm(form)) return;
        // Собираем данные из всех полей формы
        for (let i = 0; i < form.elements.length; i++) {
            let field = form.elements[i];
            // Если поле - чекбокс, добавляем его значение только если он отмечен
            if (field.type === 'checkbox') formData[field.name] = field.checked ? '1' : '0';
            // Для других полей добавляем их значение
            else formData[field.name] = encodeURIComponent(field.value);
        }
        // Преобразуем объект formData в строку JSON и сохраняем в cookie
        document.cookie = "formData=" + JSON.stringify(formData) + ";path=/;";
    }
    // Функция для заполнения формы данными из cookie
    function fillFormFromCookie() {
        let form = document.forms.frm1;
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith("formData=")) {
                let formData = JSON.parse(decodeURIComponent(cookie.substring("formData=".length)));
                // Заполняем поля формы данными из cookie
                for (let fieldName in formData) {
                    if (formData.hasOwnProperty(fieldName)) {
                        let field = form.elements[fieldName];
                        if (field) {
                            // Если поле - чекбокс, устанавливаем его состояние в зависимости от значения в cookie
                            if (field.type === 'checkbox') field.checked = formData[fieldName] === '1';
                            // Для других полей устанавливаем их значение
                            else field.value = decodeURIComponent(formData[fieldName]);
                        }
                    }
                }
                break; // Прерываем цикл, так как нашли нужное cookie
            }
        }
    }
    // Вызываем функцию заполнения формы при загрузке страницы
    fillFormFromCookie();
    // Обработчик события для кнопки "Готово"
    let submitButton = document.querySelector('input[type="button"]');
    if (submitButton) submitButton.addEventListener('click', saveFormToCookie);
});