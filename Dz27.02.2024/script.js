function HtmlElement(tagName, isSelfClosing, textContent, attributes, styles, nestedElements) {
    this.tagName = tagName || 'div';
    this.isSelfClosing = isSelfClosing || false;
    this.textContent = textContent || '';
    this.attributes = attributes || [];
    this.styles = styles || [];
    this.nestedElements = nestedElements || [];
    this.setAttribute = function(name, value) {
        this.attributes.push({ name: name, value: value });
    };
    this.setStyle = function(property, value) {
        this.styles.push({ property: property, value: value });
    };
    this.addNestedElement = function(element, atBeginning) {
        if (atBeginning) this.nestedElements.unshift(element);
        else this.nestedElements.push(element);
    };
    this.getHtml = function() {
        let html = '<' + this.tagName;
        // Добавляем атрибуты
        for (let i = 0; i < this.attributes.length; i++)
            html += ' ' + this.attributes[i].name + '="' + this.attributes[i].value + '"';
        // Добавляем стили
        if (this.styles.length > 0) {
            html += ' style="';
            for (let i = 0; i < this.styles.length; i++)
                html += this.styles[i].property + ':' + this.styles[i].value + ';';
            html += '"';
        }
        // Закрываем тег или добавляем текстовое содержимое
        if (this.isSelfClosing) html += '/>';
        else {
            html += '>' + this.textContent;
            // Добавляем вложенные элементы
            for (let i = 0; i < this.nestedElements.length; i++)
                html += this.nestedElements[i].getHtml();
            html += '</' + this.tagName + '>';
        }
        return html;
    };
}

let wrapper = new HtmlElement('div', false, '', [{ name: 'id', value: 'wrapper' }, { name: 'style', value: 'display:flex;' }]);
// Создаем первый вложенный блок
let firstBlock = new HtmlElement('div', false, '', [{ name: 'style', value: 'width:300px; margin:10px;' }]);
// Добавляем заголовок к первому блоку
let firstHeading = new HtmlElement('h3', false, 'What is Lorem Ipsum?');
firstBlock.addNestedElement(firstHeading);
// Добавляем изображение к первому блоку
let firstImage = new HtmlElement('img', false, '', [{ name: 'style', value: 'width: 100%;' }, { name: 'src', value: 'textures/lipsum.jpg' }, { name: 'alt', value: 'Lorem Ipsum' }]);
firstBlock.addNestedElement(firstImage);
// Добавляем текст к первому блоку
let firstParagraph = new HtmlElement('p', false, '"In the depths of the azure abyss, elusive creatures dance with iridescent scales. The mercurial current carries whispers of ancient tales. Sunken wonders unveil a kaleidoscope of colors, where fins flutter like ethereal butterflies, creating a mesmerizing underwater symphony."');
firstBlock.addNestedElement(firstParagraph);
// Добавляем ссылку к первому блоку
let firstLink = new HtmlElement('a', false, 'More...', [{ name: 'href', value: 'https://www.lipsum.com/' }, { name: 'target', value: '_blank' }]);
firstParagraph.addNestedElement(firstLink);
// Добавляем первый вложенный блок к основному блоку
wrapper.addNestedElement(firstBlock);
// Создаем второй вложенный блок
let secondBlock = new HtmlElement('div', false, '', [{ name: 'style', value: 'width:300px; margin:10px;' }]);
let secondHeading = new HtmlElement('h3', false, 'What is Lorem Ipsum?');
secondBlock.addNestedElement(secondHeading);
var secondImage = new HtmlElement('img', false, '', [{ name: 'style', value: 'width: 100%;' }, { name: 'src', value: 'textures/lipsum.jpg' }, { name: 'alt', value: 'Lorem Ipsum' }]);
secondBlock.addNestedElement(secondImage);
var secondParagraph = new HtmlElement('p', false, '"In the depths of the azure abyss, elusive creatures dance with iridescent scales. The mercurial current carries whispers of ancient tales. Sunken wonders unveil a kaleidoscope of colors, where fins flutter like ethereal butterflies, creating a mesmerizing underwater symphony."');
secondBlock.addNestedElement(secondParagraph);
var secondLink = new HtmlElement('a', false, 'More...', [{ name: 'href', value: 'https://www.lipsum.com/' }, { name: 'target', value: '_blank' }]);
secondParagraph.addNestedElement(secondLink);
// Добавляем второй вложенный блок к основному блоку
wrapper.addNestedElement(secondBlock);
// Используем document.write() для добавления HTML-кода к документу
document.write(wrapper.getHtml());