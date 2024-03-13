$(function () {
    const board = $(".board"), btn = $(".btn");
    let emptyTileIndex, startTime;
    const tiles = [], rows = 4, cols = 4;
    // Создаем HTML элемент для плитки с указанным номером
    function createTile(number) {
        // Добавляем div с классом .tile с текстом номера
        const tile = $("<div>").addClass("tile").text(number + 1);
        // Если number 15, то присваиваем класс .empty
        if (number === rows * cols - 1) tile.addClass("empty");
        board.append(tile); // Добавляем созданную плитку на доску
        return tile;
    }
    // Перемешивание плиткок
    function shuffleTiles() {
        tiles.sort(() => Math.random() - 0.5); // Перемешиваем плитки случайным образом
        board.empty(); // Очищаем доску перед перемещением плиток
        tiles.forEach(index => board.append(createTile(index))); // Перемещаем перемешанные плитки на доску
    }
    // Инициализация игры
    function init() {
        for (let i = 0; i < rows * cols; i++)  tiles.push(i); // Добавляем индексы плиток в массив
        shuffleTiles(); // Перемешиваем плитки
        startTime = Date.now(); // Запоминаем время начала игры
    }
    // Проверяем, выиграна ли игра
    function checkWin() { return tiles.every((index, i) => index === i); }
    // Поздравляем игрока с победой
    function congratulate() {
        const endTime = Date.now(); // Получаем время завершения игры
        const timeTaken = (endTime - startTime) / 1000; // Вычисляем время прохождения игры в секундах
        board.off("click", ".tile");
        alert(`Поздравляем! Вы выиграли! Ваше время: ${timeTaken.toFixed(2)} секунды.`);
    }
    // Перемещаем плитку
    function moveTile(tileIndex) {
        // Проверка на нахождение пустой плитки, если истинно - меняем их местами
        if (tiles[tileIndex - 4] === 15) {
            tiles[tileIndex - 4] = tiles[tileIndex];
            tiles[tileIndex] = 15;
        } else if (tiles[tileIndex - 1] === 15 && (tileIndex - 1) % 4 !== 3) {
            tiles[tileIndex - 1] = tiles[tileIndex];
            tiles[tileIndex] = 15;
        } else if (tiles[tileIndex + 1] === 15 && (tileIndex + 1) % 4 !== 0) {
            tiles[tileIndex + 1] = tiles[tileIndex];
            tiles[tileIndex] = 15;
        } else if (tiles[tileIndex + 4] === 15) {
            tiles[tileIndex + 4] = tiles[tileIndex];
            tiles[tileIndex] = 15;
        } else return; // Если условия не выполнились не пересоздаем доску, для производительности
        board.empty(); // Очищаем доску
        tiles.forEach(index => board.append(createTile(index))); // Пересоздаем доску с новыми индексами
        // Проверяем, выиграна ли игра после перемещения
        if (checkWin()) congratulate(); // Поздравляем с победой
    }
    // Обработчик нажатия на кнопку "Начать заново"
    btn.on("click", function () {
        shuffleTiles(); // Перемешиваем плитки заново
        startTime = Date.now(); // Запоминаем время начала игры
    });
    // Обработчик клика на плитку
    board.on("click", ".tile", function () {
        moveTile($(this).index()); // Перемещаем плитку, передав её индекс
    });
    init(); // Инициализируем игру при загрузке страницы
});