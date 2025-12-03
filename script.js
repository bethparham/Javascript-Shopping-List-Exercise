var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li")



//Add Items to List
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	// Delete Button
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete")
    deleteButton.appendChild(document.createTextNode(" Delete "));
    ul>li.appendChild(deleteButton).addEventListener("click", removeItem);

    // Strike-through
    ul.appendChild(li).addEventListener("click", toggleList);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function removeItem() {
    this.parentNode.remove();
}

function toggleList () {
    this.classList.toggle("done");
}

//Strikethrough
var list = document.querySelectorAll('ul>li');
for (var i = 0; i < list.length; i++) {
list[i].addEventListener("click", toggleList);
}
function toggleList() {
  event.target.classList.toggle("done"); //or this.classList.toggle("done");
}

                      
//Delete List Items
var elements = document.getElementsByClassName("delete");
for (var i = 0; i < elements.length; i++){
  elements[i].addEventListener("click", removeItem);
}
  
function removeItem(){
this.parentNode.remove();
}  


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
