let question = 1, name, mark = 0, button = document.getElementById('but');
while(true){
  name = prompt("Введите свое имя:");
  if(name !== null && name.trim() !== '') break;
}

button.addEventListener('click', function(e){
  let radioButtons = document.querySelectorAll('input[name="group"]'), index = -1;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
        index = i;
        break;
    }
  }
  if(index < 0 || index > 11) return;
  switch(question) {
    case 1:
      if (index === 0) mark++;
      document.getElementById('ques').textContent = "Какой метод используется для вывода информации в консоль?";
      document.getElementById('text1').textContent = "console.print();";
      document.getElementById('text2').textContent = "console.cout();";
      document.getElementById('text3').textContent = "console.log();";
      break;
    case 2:
      if (index === 2) mark++;
      document.getElementById('ques').textContent = "Как правильно создать функцию в JavaScript?";
      document.getElementById('text1').textContent = "function = myFunction() {};";
      document.getElementById('text2').textContent = "function myFunction() {};";
      document.getElementById('text3').textContent = "create function myFunction() {};";
      break;
    case 3:
      if (index === 1) mark++;
      document.getElementById('ques').textContent = "Какие скобки используются для создания массива?";
      document.getElementById('text1').textContent = "()";
      document.getElementById('text2').textContent = "{}";
      document.getElementById('text3').textContent = "[]";
      break;
    case 4:
      if (index === 2) mark++;
      document.getElementById('ques').textContent = "Что такое DOM в контексте JavaScript?";
      document.getElementById('text1').textContent = "Document Object Model";
      document.getElementById('text2').textContent = "Data Object Model";
      document.getElementById('text3').textContent = "Design Object Model";
      break;
    case 5:
      if (index === 0) mark++;
      document.getElementById('ques').textContent = "Как добавить элемент в конец массива в JavaScript?";
      document.getElementById('text1').textContent = "array.add(element);";
      document.getElementById('text2').textContent = "array.push(element);";
      document.getElementById('text3').textContent = "array.append(element);";
      break;
    case 6:
      if (index === 1) mark++;
      document.getElementById('ques').textContent = "Как проверить тип переменной в JavaScript?";
      document.getElementById('text1').textContent = "typeof название;";
      document.getElementById('text2').textContent = "название.type();";
      document.getElementById('text3').textContent = "typeOf(название);";
      break;
    case 7:
      if (index === 2) mark++;
      document.getElementById('ques').textContent = "Какие операторы используются для сравнения значений и их типов?";
      document.getElementById('text1').textContent = "== и !=";
      document.getElementById('text2').textContent = "= и !==";
      document.getElementById('text3').textContent = "=== и !==";
      break;
    case 8:
      if (index === 2) mark++;
      document.getElementById('ques').textContent = "Какой метод используется для изменения стиля элемента в JavaScript?";
      document.getElementById('text1').textContent = "style.setProperty()";
      document.getElementById('text2').textContent = "modifyStyle()";
      document.getElementById('text3').textContent = "styleChange()";
      break;
    case 9:
      if (index === 2) mark++;
      document.getElementById('ques').textContent = "Какой метод используется для удаления элемента из массива по его индексу в JavaScript?";
      document.getElementById('text1').textContent = "splice()";
      document.getElementById('text2').textContent = "deleteAt()";
      document.getElementById('text3').textContent = "remove()";
      break;
    case 10:
      if (index === 0) mark++;
      document.getElementById('ques').textContent = "Какие методы используются для добавления и удаления класса у элемента в JavaScript?";
      document.getElementById('text1').textContent = "appendClass() и deleteClass()";
      document.getElementById('text2').textContent = "addClass() и removeClass()";
      document.getElementById('text3').textContent = "setClass() и clearClass()";
      break;
    case 11:
      if(index === 1) mark++;
      alert(`${name}, вы прошли тест на ${mark} баллов.`);
      return;
  }
  question++;
  document.getElementById('quescount').textContent = `Вопрос ${question}/11:`;
  for (let i = 0; i < radioButtons.length; i++) radioButtons[i].checked = false;
});