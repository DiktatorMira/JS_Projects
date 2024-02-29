class ExtendedDate extends Date {
    constructor(year, month, day) { super(year, month - 1, day); }
    print() {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const dateFormatter = new Intl.DateTimeFormat('ru-RU', options);
        return dateFormatter.format(this);
    }
    isFuture() {
        const today = new Date();
        return this >= today;
    }
    isLeap() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    next() {
        const nextDay = new Date(this);
        nextDay.setDate(nextDay.getDate() + 1);
        return new ExtendedDate(nextDay.getFullYear(), nextDay.getMonth() + 1, nextDay.getDate());
    }
    static checkDate(inputDate) {
        const match = inputDate.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
        if (!match) {
            alert('Введите корректную дату в формате дд.мм.гггг');
            return null;
        }
        const [, day, month, year] = match.map(Number);
        if (isNaN(year) || isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
            alert('Введите корректную дату в формате дд.мм.гггг');
            return null;
        }
        return { year, month, day };
    }
}

document.getElementById('print').addEventListener('click', function () {
    const inputDate = document.getElementById('input').value;
    const { year, month, day } = ExtendedDate.checkDate(inputDate);
    if (year === null) return;
    const extendedDate = new ExtendedDate(year, month, day);
    document.getElementById('info').innerText = extendedDate.print();
});
document.getElementById('check1').addEventListener('click', function () {
    const inputDate = document.getElementById('input').value;
    const { year, month, day } = ExtendedDate.checkDate(inputDate);
    if (year === null) return;
    const extendedDate = new ExtendedDate(year, month, day);
    const result = extendedDate.isFuture() ? 'Будущая или текущая дата' : 'Прошедшая дата';
    document.getElementById('info').innerText = result;
});
document.getElementById('check2').addEventListener('click', function () {
    const inputDate = document.getElementById('input').value;
    const { year, month, day } = ExtendedDate.checkDate(inputDate);
    if (year === null) return;
    const extendedDate = new ExtendedDate(year, month, day);
    const result = extendedDate.isLeap() ? 'Високосный год' : 'Невисокосный год';
    document.getElementById('info').innerText = result;
});
document.getElementById('next').addEventListener('click', function () {
    const inputDate = document.getElementById('input').value;
    const { year, month, day } = ExtendedDate.checkDate(inputDate);
    if (year === null) return;
    const extendedDate = new ExtendedDate(year, month, day);
    const nextDate = extendedDate.next();
    document.getElementById('info').innerText = nextDate.print();
});