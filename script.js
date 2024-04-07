// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

let button = document.getElementById("addBtn");
let input = document.getElementById("userinput");


function inputLength() {
 return input.value.length;
}

// function createTask() {
//  var li = document.createElement("li");
//  li.appendChild(document.createTextNode(input.value));
//  ul.appendChild(li);
//  input.value = "";
//  var newDeleteButton = document.createElement("button");
//  newDeleteButton.appendChild(document.createTextNode("Delete"));
//  newDeleteButton.classList.add("delete");
//  li.appendChild(newDeleteButton);
// }

function addTaskAfterClick() {
 if (inputLength() > 0) {
  createTaskElement();
 }
}

function addTaskAfterKeydown(event) {
 if (inputLength() > 0 && event.keyCode === 13) {
  createTaskElement();
 }
}

// To add a row
let table = document.getElementById("todoTable");
let trElem = document.createElement("tr");
table.appendChild(trElem);

// Status
let statusElem = document.createElement("input");
statusElem.type = "checkbox";
let tdElem1 = document.createElement("td");
tdElem1.appendChild(statusElem);
trElem.appendChild(tdElem1);

// Task

// Category

// Client

// Delete

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown);
