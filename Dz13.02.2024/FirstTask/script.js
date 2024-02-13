let img = ["textures/0.gif","textures/1.gif","textures/2.gif","textures/3.gif","textures/4.gif","textures/5.gif","textures/6.gif","textures/7.gif","textures/8.gif","textures/9.gif"];

setInterval(function () {
    let datenow = new Date();
    let hours = datenow.getHours(), minutes = datenow.getMinutes(), seconds = datenow.getSeconds();
    // Обработка часов
    if (hours < 10) {
        document.getElementById("hour1").src = img[0];
        document.getElementById("hour2").src = img[hours];
    } else {
        let hnum = hours.toString().split("");
        document.getElementById("hour1").src = img[hnum[0]];
        document.getElementById("hour2").src = img[hnum[1]];
    }
    // Обработка минут
    if (minutes < 10) {
        document.getElementById("min1").src = img[0];
        document.getElementById("min2").src = img[minutes];
    } else {
        let mnum = minutes.toString().split("");
        document.getElementById("min1").src = img[mnum[0]];
        document.getElementById("min2").src = img[mnum[1]];
    }
    // Обработка секунд
    if (seconds < 10) {
        document.getElementById("sec1").src = img[0];
        document.getElementById("sec2").src = img[seconds];
    } else {
        let snum = seconds.toString().split("");
        document.getElementById("sec1").src = img[snum[0]];
        document.getElementById("sec2").src = img[snum[1]];
    }
}, 1000);