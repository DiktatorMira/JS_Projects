/*             //Первое задание
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
} */
/*             //Второе задание
let ticket, strnum;
while(true){
    ticket = prompt("Введите шестизначное число:");
    strnum = ticket.toString();
    if(strnum.length === 6 && !isNaN(strnum)) break;
}
let numarr = strnum.split('').map(Number);
if(numarr[0] + numarr[1] + numarr[2] === numarr[3] + numarr[4] + numarr[5]) alert("Поздравляем вам попался счастливый билет!");
else alert("К сожалению у вас простой билет.") */

            //Третье задание
let low = 0, high = 100, guess, answer;
alert("Загадайте число от 0 до 100.");
while (true) {
    guess = Math.floor((low + high) / 2);
    answer = prompt(`Ваше число больше, меньше или равно ${guess}?\nВведите: >, < или = для ответа.`);
    if (answer === '=') {
        alert("Отлично, я угадал!");
        break;
    } 
    else if (answer === '>') low = guess + 1;
    else if (answer === '<')  high = guess - 1;
}