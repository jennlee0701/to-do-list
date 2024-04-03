var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// v2
var li = document.getElementsByTagName("li");
// v1
// var todo = document.querySelectorAll("li");
var deleteButton = document.getElementsByClassName("delete");

// v2
function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function inputLength() {
 return input.value.length;
}

function createListElement() {
 var li = document.createElement("li");
 li.appendChild(document.createTextNode(input.value));
 ul.appendChild(li);
 input.value = "";
 var newDeleteButton = document.createElement("button");
 newDeleteButton.appendChild(document.createTextNode("Delete"));
 newDeleteButton.classList.add("delete");
 li.appendChild(newDeleteButton);
}

// function createDeleteButton() {
//  var newDeleteButton = document.createElement("button");
//  newDeleteButton.appendChild(document.createTextNode("Delete"));
//  li.appendChild(newDeleteButton);
// }

function addListAfterClick() {
 if (inputLength() > 0) {
  createListElement();
  // createDeleteButton();
 }
}

function addListAfterKeydown(event) {
 if (inputLength() > 0 && event.keyCode === 13) {
  createListElement();
  // createDeleteButton();
 }
}

function deleteItemAfterClick(event) {
  if (event.target.className === "delete") {
      event.target.parentNode.remove();
    }
}


// v1
// function toggleItem(event) {
//   /** We can access event.currentTarget which refers to the DOM node we have added the event listener to. */
//   event.currentTarget.classList.toggle("done");
// }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown);


// v1
// todo.forEach(function(todoItem) {
//    todoItem.addEventListener("click", toggleItem)
// });


// v2
ul.addEventListener("click", strikeThrough);

ul.addEventListener("click", deleteItemAfterClick);



