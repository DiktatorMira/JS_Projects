$(function () {
    const board = $(".board"), btn = $(".btn");
    let emptyTileIndex, startTime;
    const tiles = [], rows = 4, cols = 4;

    // Создаем HTML элемент для плитки с указанным номером
    function createTile(number) {
        const tile = $("<div>").addClass("tile").text(number + 1); // Исправлено
        if (number === rows * cols - 1) tile.addClass("empty"); // Исправлено
        return tile;
    }

    // Перемешиваем плитки
    function shuffleTiles() {
        tiles.sort(() => Math.random() - 0.5); // Перемешиваем плитки случайным образом
        board.empty(); // Очищаем доску перед перемещением плиток
        tiles.forEach(index => board.append(createTile(index))); // Перемещаем перемешанные плитки на доску
        emptyTileIndex = tiles.indexOf(rows * cols - 1); // Находим индекс пустой плитки
    }

    // Инициализация игры
    function init() {
        for (let i = 0; i < rows * cols - 1; i++) { // Исправлено
            tiles.push(i); // Добавляем индексы плиток в массив
        }
        shuffleTiles(); // Перемешиваем плитки
        startTime = Date.now(); // Запоминаем время начала игры
    }

    // Проверяем, выиграна ли игра
    function checkWin() {
        return tiles.every((index, i) => index === i);
    }

    // Поздравляем игрока с победой
    function congratulate() {
        const endTime = Date.now(); // Получаем время завершения игры
        const timeTaken = (endTime - startTime) / 1000; // Вычисляем время прохождения игры в секундах
        alert(`Поздравляем! Вы выиграли! Ваше время: ${timeTaken.toFixed(2)} секунды.`);
    }

    // Перемещаем плитку
    function moveTile(tileIndex) {
        const tileRow = Math.floor(tileIndex / cols); // Ряд текущей плитки
        const tileCol = tileIndex % cols; // Столбец текущей плитки

        // Проверяем, можно ли переместить плитку
        if ((Math.abs(tileRow - Math.floor(emptyTileIndex / cols)) === 1 && tileCol === emptyTileIndex % cols) ||
            (Math.abs(tileCol - emptyTileIndex % cols) === 1 && tileRow === Math.floor(emptyTileIndex / cols))) {

            // Анимация перемещения плитки
            const emptyTilePosition = $(".tile").eq(emptyTileIndex).position(); // Считаем позицию пустой плитки
            const emptyTileTop = emptyTilePosition.top;
            const emptyTileLeft = emptyTilePosition.left;
            $(".tile").eq(tileIndex).animate({ top: emptyTileTop, left: emptyTileLeft }, 300);

            // Перемещаем плитку в массиве
            const temp = tiles[emptyTileIndex];
            tiles[emptyTileIndex] = tiles[tileIndex];
            tiles[tileIndex] = temp;

            emptyTileIndex = tileIndex; // Обновляем индекс пустой плитки

            // Проверяем, выиграна ли игра после перемещения
            if (checkWin()) congratulate(); // Поздравляем с победой
        }
    }

    // Обработчик нажатия на кнопку "Начать заново"
    btn.on("click", function () {
        shuffleTiles(); // Инициализируем игру заново
        startTime = Date.now(); // Запоминаем время начала игры
    });

    // Обработчик клика на плитку
    board.on("click", ".tile", function () {
        const tileIndex = $(this).index();
        moveTile(tileIndex); // Перемещаем плитку
    });

    init(); // Инициализируем игру при загрузке страницы
});