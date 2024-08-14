const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inputDate = document.getElementById("taskDeadline");

function addTask() {
  if (inputBox.value == '') {
    alert("You must write something!");
  }
  else if ( inputDate.value == '') {
    alert("You must fill out the date!");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value + " (" + inputDate.value + ")";
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
    inputDate.value = "";
  }

  saveData();
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false); 

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
