            //Первое задание
let result;
while(true){
    let fio = prompt("Введите ФИО:");
    let male = prompt("Введите пол:");
    let age = parseInt(prompt("Введите возраст:"));
    let email = prompt("Введите email:");
    result = confirm(`ФИО: ${fio}\nПол: ${male}\nВозраст: ${age}\nПочта: ${email}\n\nВсё верно?`);
    if(result){
        alert("Спасибо вам за предоставленную информацию!");
        break;
    }
}
            //Второе задание
let ticket, strnum;
while(true){
    ticket = prompt("Введите шестизначное число:");
    strnum = ticket.toString();
    if(strnum.length === 6 && !isNaN(strnum)) break;
}
let numarr = strnum.split('');
if(numarr[0] + numarr[1] + numarr[2] === numarr[3] + numarr[4] + numarr[5]) alert("Поздравляем вам попался счастливый билет!");
else alert("К сожалению у вас простой билет.")

            //Третье задание
let temporary = Math.floor((0 + 100) / 2), question;
alert("Загадайте число от 0 до 100.");
while(true){
    question = prompt(`Ваше число больше, меньше или равно ${temporary}?\nВведите: >, < или = для ответа.`);
    if(question == '='){
        alert("Отлично, я угадал!");
        break;
    }
    else if(question == '>') temporary++;
    else if(question == '<') temporary--;
}