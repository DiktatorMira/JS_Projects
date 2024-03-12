$(function(){
    $(".generate").on("click", function(){
        // Получаем длину строки
        let length = $("#lengthInput").val();
        // Проверка на ввод числа не меньше 1 и на пустоту инпута
        if (isNaN(length) || length < 1) {
            alert("Введите корректную длину строки (число не меньше 1).");
            return;
        }
        // Получаем выбранные опции
        let options = $(".check:checked").map(function(){
            return this.value;
        }).get();
        // Проверка на выбор хотя бы одной опции
        if (options.length === 0) {
            alert("Выберите хотя бы одну опцию.");
            return;
        }
        // Генерация строки
        let result = generateRandomString(length, options);
        // Выводим результат в текстовое поле
        $(".inputs1[type='text']").val(result);
    });
    function generateRandomString(length, options) {
        let charset = "", result = "";
        if (options.indexOf("numbers") !== -1) charset += "0123456789";
        if (options.indexOf("uppercase") !== -1) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (options.indexOf("lowercase") !== -1) charset += "abcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * charset.length);
            result += charset.charAt(randomIndex);
        }
        return result;
    }
});