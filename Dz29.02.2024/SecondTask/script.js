function SimpleMarker(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
}
SimpleMarker.prototype.print = function(text) {
    let printedText = "";
    for (let char of text) {
        if (char !== " ") {
            if (this.inkLevel >= 0.5) {
                printedText += char;
                this.inkLevel -= 0.5;
            } else {
                alert("Недостаточно чернил!");
                break;
            }
        } else printedText += char;
    }
    document.getElementById('info').innerText = printedText;
};

function RefillableMarker(color, inkLevel) { SimpleMarker.call(this, color, inkLevel); }
RefillableMarker.prototype = Object.create(SimpleMarker.prototype);
RefillableMarker.prototype.refill = function() { this.inkLevel = 100; };

document.getElementById('print').addEventListener('click', function() {
    const colorInput = document.getElementById('color').value.trim();
    // Регулярное выражение для проверки формата цвета (например, #RRGGBB или названия цвета)
    const colorRegex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$|^([a-zA-Z]+)$/;
    if (colorRegex.test(colorInput)) {
        document.getElementById('cbox').style.backgroundColor = colorInput;
        document.getElementById('info').style.color = colorInput;
    } else alert('Введите корректный цвет!');

    const text = document.getElementById('text').value.trim();
    if (text !== "") marker.print(text);
    else alert("Введите текст для печати!");
});
document.getElementById('check').addEventListener('click', function() {
    document.getElementById('info').innerText = `Количество чернил: ${marker.inkLevel}%`;
});
document.getElementById('fullup').addEventListener('click', function() {
    marker.refill();
    document.getElementById('info').innerText = 'Маркер заправлен до 100%';
});
document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('info').innerText = '';
});
const marker = new RefillableMarker('black', 100);