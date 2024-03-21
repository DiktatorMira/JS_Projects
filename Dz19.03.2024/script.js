$(function() {
    // Инициализация переменных и элементов DOM
    let name, question = 1, mark = 0, remainingTime = 180, timerElement = $('#timertext'), button = $('#but');
    // Функция для загрузки вопроса из JSON файла по его индексу
    function loadQuestion(index) {
        $.getJSON('questions.json', function(data) {
            let currentQuestion = data[index - 1]; // получаем текущий вопрос
            $('#ques').text(currentQuestion.question); // Устанавливаем текст вопроса
            $('#answers').empty(); // Очищаем предыдущие варианты ответов
            $.each(currentQuestion.answers, function(i, answer) { // Добавляем варианты ответов
                $('#answers').append('<div class="rb"><input type="checkbox" name="group" value="' + i + '"><label>' + answer + '</label><br></div>');
            });
        });
    }
    loadQuestion(question); // Загружаем первый вопрос при загрузке страницы
    while(true) { // Получаем имя пользователя, входим в бесконечный цикл
      name = prompt("Введите свое имя:");
      if(name !== null && name.trim() !== '') break; // Если поле не пустое, цикл прерывается
    }
    let timerInterval = setInterval(updateTimer, 1000); // Запускаем таймер обратного отсчета
    // Функция для обновления таймера
    function updateTimer() {
        const minutes = Math.floor(remainingTime / 60), seconds = remainingTime % 60;
        timerElement.text(`Оставшееся время: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
        if (remainingTime <= 0) { // Если время вышло, останавливаем таймер и показываем результат
            clearInterval(timerInterval);
            alert(`${name}, время вышло! Вы ответили на ${question - 1} вопросов. Ваш результат: ${mark} баллов.`);
            question = -1; // Устанавливаем отрицательное значение вопроса, чтобы предотвратить ответы
            return;
        }
        remainingTime--;
    }
    // Добавляем обработчик события клика по кнопке "Ответить"
    button.on('click', function(e) {
        // Получаем все чекбоксы с именем 'group' и индексы выбранных ответов
        let checkboxes = $('input[name="group"]:checked');
        let indexes = checkboxes.map(function() {
            return $(this).val();
        }).get();
        // Если ни один ответ не выбран, выходим из функции
        if (indexes.length === 0 || indexes.some(index => index > 11)) return;
        $.getJSON('questions.json', function(data) { // Получаем вопрос из JSON файла по его индексу
            let currentQuestion = data[question - 1]; // Получаем текущий вопрос
            // Проверяем правильность ответов и увеличиваем счетчик баллов
            indexes.forEach(index => {
                if (currentQuestion.correctIndexes.includes(parseInt(index))) mark++;
            });
            if (question === 11) { // Если это последний вопрос, показываем результат
                alert(`${name}, вы прошли тест на ${mark} баллов.`);
                clearInterval(timerInterval);
                return;
            }
            question++;
            $('#quescount').text(`Вопрос ${question}/11:`); // Обновляем счетчик вопросов
            loadQuestion(question); // Загружаем следующий вопрос
        });
    });
});