const months = [
  "Январь", "Февраль", "Март", "Апрель",
  "Май", "Июнь", "Июль", "Август",
  "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
function checkSeason(date, table) {
  if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
    table.style.backgroundImage = "url('textures/1.jpg')";
    table.style.color = "#0000d5";
  } else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
    table.style.backgroundImage = "url('textures/2.jpg')";
    table.style.color = "#06d7b8";
  } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
    table.style.color = "#ffff00";
    table.style.backgroundImage = "url('textures/3.jpg')";
  } else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
    table.style.color = "#a90703";
    table.style.backgroundImage = "url('textures/4.jpg')";
  }
}
function createCalendar() {
  let selectedDate = new Date(prompt("Введите дату в формате гггг/мм/дд", "2024/02/13"));
  let calendarTable = document.createElement("table");
  checkSeason(selectedDate, calendarTable); // Передаем calendarTable в функцию checkSeason
  let myHeading = document.getElementById("head");
  myHeading.textContent = months[selectedDate.getMonth()];
  let headerRow = calendarTable.insertRow();
  let daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  // Заголовок с днями недели
  for (let day of daysOfWeek) {
    let th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  }
  // Получаем первый день месяца и количество дней в месяце
  let firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  let lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
  // Заполняем ячейки календаря
  for (let i = 0; i < 6; i++) {
    let row = calendarTable.insertRow();
    for (let j = 0; j < 7; j++) {
      let cell = row.insertCell();
      let day = i * 7 + j - firstDay.getDay() + 1;
      if (day > 0 && day <= lastDay.getDate()) {
        cell.textContent = day;
        // Выделяем ячейку с выбранной датой
        if (selectedDate.getDate() === day) cell.classList.add("selected");
      }
    }
  }
  // Вставляем календарь в документ
  document.body.appendChild(calendarTable);
}
// Создаем календарь при загрузке страницы
createCalendar();