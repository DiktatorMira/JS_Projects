function FirstTask(){
    const questions = [
        "Вам нравится програмировать?",
        "Вы любите математику?",
        "Вы предпочитаете чай кофе?",
        "Вы любите читать книги?"
    ];
    const marks = [3, 1, 4, 1];
    let points = 0;
    alert(`Предлагаю пройти тест: необходимо ответить да или нет. Писать ответы с маленькими буквами!`);
    for(let i = 0; i < questions.length; i++){
        let userAnswer = prompt(questions[i]);
        if (userAnswer === "да" && i < 2) points += marks[i];
        else if(userAnswer === "нет" && i >= 2) points += marks[i];
        else alert("Неправильно!");
    }
    alert(`Поздравляю, вы набрали ${points} балла(ов).`);
}
function SecondTask(){
    const forbiddenChars = /[^a-zA-Zа-яА-Я\s.]/;
    const fullName = prompt("Введите ФИО:");
    if (!forbiddenChars.test(fullName) && fullName !== null)  alert("Ввод корректен!");
    else alert("Недопустимые символы во вводе. Пожалуйста, введите корректное ФИО.");
}
function ThirdTask(){
    const url = new URL("http://www.ufa.com.ua/utilites/hdd/out.php?sort=2");
    const filename = url.pathname.split('/').pop();
    const urlarr = [url.protocol, url.host, url.pathname, filename, url.search];
    alert(`${urlstr}\n\nПротокол: ${urlarr[0]}\nХост: ${urlarr[1]}\nПуть: ${urlarr[2]}\nИмя файла: ${urlarr[3]}\nСтрока запроса: ${urlarr[4]}`);
}
function FourthTask(){
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let color = (i + j) % 2 === 0 ? "#bfbfbf" : "#000000";
            document.write(`<div style="width: 50px; height: 50px; background:${color}; display: inline-block; box-sizing: border-box;"></div>`);
        }
        document.write('<br>');
    }
}

FirstTask();
SecondTask();
ThirdTask();
FourthTask();