function addNewList() {
    const listItemText = document.getElementById('inp1').value;
    if (listItemText.trim() !== '') {
        const newList = document.createElement('ul');
        newList.className = 'nested-list';
        const listItem = createListItem(listItemText);
        newList.appendChild(listItem);
        document.body.appendChild(newList);
    } else alert('Введите текст элемента списка.');
}
function createListItem(text) {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.textContent = text;
    listItem.onclick = function (event) {
        event.stopPropagation();
        handleListItemClick(this);
    };
    return listItem;
}
function insertNewList() {
    const listItemText = document.getElementById('inp2').value;
    const position = document.getElementById('value1').value;
    if (listItemText.trim() !== '') {
        const newList = document.createElement('ul');
        newList.className = 'nested-list';
        const listItem = createListItem(listItemText);
        if (position.trim() !== '' && !isNaN(position)) {
            const positionIndex = parseInt(position) - 1;
            const existingLists = document.querySelectorAll('.nested-list');
            if (positionIndex >= 0 && positionIndex <= existingLists.length) {
                const targetList = existingLists[positionIndex];
                targetList.insertBefore(listItem, targetList.children[0]);
            } else alert('Некорректная позиция. Введите число от 1 до ' + (existingLists.length + 1));
        } else {
            newList.appendChild(listItem);
            document.body.appendChild(newList);
        }
    } else alert('Введите текст элемента списка.');
}
function changeListItemText() {
    const newText = document.getElementById('inp3').value;
    const index = document.getElementById('value2').value;
    if (newText.trim() !== '' && !isNaN(index)) {
        const listItems = document.querySelectorAll('.nested-list .list-item');
        const targetIndex = parseInt(index) - 1;
        if (targetIndex >= 0 && targetIndex < listItems.length) {
            const targetItem = listItems[targetIndex];
            targetItem.textContent = newText;
        } else alert('Некорректный индекс. Введите число от 1 до ' + listItems.length);
    } else alert('Введите текст и корректный индекс.');
}
function addInsertedItem() {
    const newText = document.getElementById('inp4').value;
    const index = document.getElementById('value3').value;
    if (newText.trim() !== '' && !isNaN(index)) {
        const listItems = document.querySelectorAll('.nested-list .list-item');
        const targetIndex = parseInt(index) - 1;
        if (targetIndex >= 0 && targetIndex < listItems.length) {
            const targetItem = listItems[targetIndex];
            const nestedList = document.createElement('ul');
            nestedList.className = 'nested-list';
            const listItem = createListItem(newText);
            nestedList.appendChild(listItem);
            targetItem.appendChild(nestedList);
        } else alert('Некорректный индекс. Введите число от 1 до ' + listItems.length);
    } else alert('Введите текст и корректный индекс.');
}
function deleteListItem() {
    const index = document.getElementById('value4').value;
    if (!isNaN(index)) {
        const listItems = document.querySelectorAll('.nested-list .list-item');
        const targetIndex = parseInt(index) - 1;
        if (targetIndex >= 0 && targetIndex < listItems.length) {
            const targetItem = listItems[targetIndex];
            targetItem.parentElement.removeChild(targetItem);
        } else alert('Некорректный индекс. Введите число от 1 до ' + listItems.length);
    } else alert('Введите корректный индекс.');
}
