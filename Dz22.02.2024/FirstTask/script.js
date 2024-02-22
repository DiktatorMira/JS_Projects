let textInput = document.getElementById('inp');
textInput.addEventListener('input', function(event) {
    let value = event.target.value;
    let lastChar = value.charAt(value.length - 1);
    if (!isNaN(lastChar)) event.target.value = value.slice(0, -1);
});

let openDivId = null;
let divs = document.getElementsByClassName("divs");
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function(event) {
    let clickedDivId = event.target.id.charAt(event.target.id.length - 1);
    toggleDiv(clickedDivId);
  });
}
function toggleDiv(id) {
  let contentId = "content" + id;
  let contentElement = document.getElementById(contentId);
  if (openDivId !== null) {
    let openContentElement = document.getElementById("content" + openDivId);
    openContentElement.style.display = "none";
    if (openDivId === id) {
      openDivId = null;
      return;
    }
  }
  contentElement.style.display = "flex";
  openDivId = id;
}