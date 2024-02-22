document.addEventListener("keydown", function(e){
  if (e.ctrlKey && e.keyCode === 69){
    e.preventDefault();
    document.getElementById("textbox").style.resize = "both";
    document.getElementById("textbox").contentEditable = "true";
    document.getElementById("textbox").style.border = "2px solid lime";
  } else if(e.ctrlKey && e.keyCode === 83 || e.keyCode === 27){
    e.preventDefault();
    document.getElementById("textbox").style.resize = "none";
    document.getElementById("textbox").contentEditable = "false";
    document.getElementById("textbox").style.border = "2px solid gray";
  }
});

let firstname = document.getElementById("fname");
let lastname = document.getElementById("lname");
let age = document.getElementById("age");
let company = document.getElementById("company");

function sortTable(columnIndex) {
  let table = document.querySelector('table');
  let tbody = table.querySelector('tbody');
  let rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    let aValue = a.cells[columnIndex].textContent.trim();
    let bValue = b.cells[columnIndex].textContent.trim();
    if (columnIndex === 2) return parseInt(aValue, 10) - parseInt(bValue, 10);
    return aValue.localeCompare(bValue);
  });
  rows.forEach(row => tbody.removeChild(row));
  rows.forEach(row => tbody.appendChild(row));
}
firstname.addEventListener("click", function(e){
  sortTable(0);
});
lastname.addEventListener("click", function(e){
  sortTable(1); 
});
age.addEventListener("click", function(e){
  sortTable(2); 
});
company.addEventListener("click", function(e){
  sortTable(3);
});