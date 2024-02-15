document.addEventListener("DOMContentLoaded", function () {
    let bookList = document.getElementById("bookList");
    let selectedItems = [];
    bookList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            if (event.ctrlKey || event.metaKey) event.target.classList.toggle("selected");
            else if (event.shiftKey) {
                let items = Array.from(bookList.children);
                let startIndex = items.indexOf(event.target);
                let endIndex = items.indexOf(selectedItems[selectedItems.length - 1]);
                if (endIndex < startIndex) [startIndex, endIndex] = [endIndex, startIndex];
                for (let i = startIndex; i <= endIndex; i++) items[i].classList.add("selected");
            } else {
                bookList.querySelectorAll("li").forEach(function (item) {
                    item.classList.remove("selected");
                });
                event.target.classList.add("selected");
            }
            selectedItems = Array.from(bookList.querySelectorAll("li.selected"));
        }
    });
});