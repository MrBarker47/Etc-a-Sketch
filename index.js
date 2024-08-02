// Create 256 grid
for (let i = 0; i < 256; i++) {
  let newDiv = document.createElement("div");
  newDiv.id = "color";
  newDiv.addEventListener("mouseover", (event) => {
    newDiv.style.backgroundColor = "red";
  });
  container.appendChild(newDiv);
}

//Create a button at the top of the screen
let topOfScreen = document.createElement("button");
topOfScreen.textContent = "Reset";
button.appendChild(topOfScreen);

//button to change the size of the grid
function newButton() {
  topOfScreen.addEventListener("click", (e) => {
    console.log("Hello");
  });
}

newButton();
