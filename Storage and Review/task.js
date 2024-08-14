// wanna run some code when I click the button 

function submittedData() {
  //1) get the name the user submitted
  let textInput = document.getElementById("user-name");

  let name = textInput.value;

  console.log(name);
  //2) see the color they chhose
  let whiteBtn = document.getElementById("white");
  let blackBtn = document.getElementById("black");
  let purpleBtn = document.getElementById("purple");

  //3) update the message and bg color
  if (whiteBtn.checked == true) {
    document.body.style.backgroundColor = "White";
    document.body.style.color = "Black";
  } else if (blackBtn.checked == true) {
    document.body.style.backgroundColor = "Black";
    document.body.style.color = "White";
  } else if (purpleBtn.checked == true) {
    document.body.style.backgroundColor = "Purple";
    document.body.style.color = "White";
  } else {
    alert("Select a color");
  }

  let h1 = document.getElementById("message");
  h1.innerHTML = "Hi, " + name;

}

