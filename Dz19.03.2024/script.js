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
              $('#answers').append('<div class="rb"><input type="radio" name="group" value="' + i + '"><label>' + answer + '</label><br></div>');
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
  // Обработчик события клика по кнопке "Ответить"
  button.on('click', function(e) {
      if (question > 11) clearInterval(timerInterval); // Если вопросов больше нет, останавливаем таймер
  });
  // Добавляем обработчик события клика по кнопке "Ответить"
  button.on('click', function(e) {
      // Получаем все радиокнопки с именем 'group' и индекс выбранного ответа
      let radioButtons = $('input[name="group"]'), index = radioButtons.filter(':checked').val();
      // Если ответ не выбран или индекс больше 11, выходим из функции
      if (index === undefined || index > 11) return;
      $.getJSON('questions.json', function(data) { // Получаем вопрос из JSON файла по его индексу
          let currentQuestion = data[question - 1]; // Получаем текущий вопрос
          // Проверяем правильность ответа и увеличиваем счетчик баллов
          if (index == currentQuestion.correctIndex) mark++;
          if (question === 11) { // Если это последний вопрос, показываем результат
              alert(`${name}, вы прошли тест на ${mark} баллов.`);
              return;
          }
          question++;
          $('#quescount').text(`Вопрос ${question}/11:`); // Обновляем счетчик вопросов
          loadQuestion(question); // Загружаем следующий вопрос
      });
  });
});