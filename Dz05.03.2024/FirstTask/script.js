document.addEventListener("DOMContentLoaded", function() {
    // Получаем элемент canvas и его контекст
    let canvas = document.getElementById("clockCanvas");
    let ctx = canvas.getContext("2d");
    // Функция для отрисовки часов
    function drawClock() {
        // Очищаем холст
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Рисуем циферблат
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 140, 0, 2 * Math.PI);
        ctx.fillStyle = "#f5f5f5"; /* Более светлый цвет для циферблата */
        ctx.fill();
        ctx.strokeStyle = "#333";
        ctx.lineWidth = 5;
        ctx.stroke();
        // Рисуем цифры от 1 до 12
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "#333";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        for (let i = 1; i <= 12; i++) {
            let angle = (i - 3) * (Math.PI / 6);
            let x = canvas.width / 2 + 100 * Math.cos(angle);
            let y = canvas.height / 2 + 100 * Math.sin(angle);
            ctx.fillText(i.toString(), x, y);
        }
        // Рисуем штрихи разделения
        for (let i = 0; i < 60; i++) {
            let angle = (i - 15) * (Math.PI / 30);
            let length = i % 5 === 0 ? 10 : 5; // Длина штриха разделения
            let x1 = canvas.width / 2 + 130 * Math.cos(angle);
            let y1 = canvas.height / 2 + 130 * Math.sin(angle);
            let x2 = x1 + length * Math.cos(angle);
            let y2 = y1 + length * Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = "#333";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        // Получаем текущее время
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        // Рисуем часовую стрелку
        ctx.beginPath();
        let hourAngle = (hours % 12 + minutes / 60) * (Math.PI / 6) - Math.PI / 2;
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(canvas.width / 2 + 50 * Math.cos(hourAngle), canvas.height / 2 + 50 * Math.sin(hourAngle));
        ctx.strokeStyle = "#333";
        ctx.lineWidth = 8;
        ctx.lineCap = "round";
        ctx.stroke();
        // Рисуем минутную стрелку
        ctx.beginPath();
        let minuteAngle = (minutes + seconds / 60) * (Math.PI / 30) - Math.PI / 2;
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(canvas.width / 2 + 80 * Math.cos(minuteAngle), canvas.height / 2 + 80 * Math.sin(minuteAngle));
        ctx.strokeStyle = "#333";
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.stroke();
        // Рисуем секундную стрелку
        ctx.beginPath();
        let secondAngle = seconds * (Math.PI / 30) - Math.PI / 2;
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(canvas.width / 2 + 90 * Math.cos(secondAngle), canvas.height / 2 + 90 * Math.sin(secondAngle));
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.stroke();
        // Рисуем центр часов
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "#333";
        ctx.fill();
    }
    // Начальная отрисовка часов
    drawClock();
    // Обновляем часы каждую секунду
    setInterval(drawClock, 1000);
});