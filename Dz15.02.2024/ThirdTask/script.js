document.addEventListener("DOMContentLoaded", function () {
    let Text = document.getElementById("text"), Handle = document.getElementById("handle");
    let isResizing = false, startX, startY;
    // Событие нажатия мыши на ручке изменения размера
    Handle.addEventListener("mousedown", function (event) {
        isResizing = true;
        startX = event.clientX;
        startY = event.clientY;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", () => {
            isResizing = false;
            document.removeEventListener("mousemove", handleMouseMove);
        });
    });
    function handleMouseMove(event) {
        if (isResizing) {
            let resX = event.clientX - startX;
            let resY = event.clientY - startY;
            Text.style.width = Text.offsetWidth + resX + "px";
            Text.style.height = Text.offsetHeight + resY + "px";
            startX = event.clientX;
            startY = event.clientY;
        }
    }
});