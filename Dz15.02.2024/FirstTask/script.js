document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
        if (event.target.tagName === "LI" && event.target.classList.contains("folder")) {
            let sublist = event.target.querySelector("ul");
            if (sublist) sublist.classList.toggle("collapsed");
        }
    });

    let listItems2 = document.querySelectorAll("li#b");
    listItems2.forEach(function (item) {
        item.addEventListener("mouseover", function (event) {
            event.target.classList.add("bold");
        });
        item.addEventListener("mouseout", function (event) {
            event.target.classList.remove("bold");
        });
    });
});