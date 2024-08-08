// Create 256 grid

// for (let i = 0; i < 256; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.id = "color";
//   newDiv.addEventListener("mouseover", (event) => {
//     newDiv.style.backgroundColor = "black";
//   });
//   container.appendChild(newDiv);
// }

function fullSize() {
  for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = "color";
    newDiv.addEventListener("mouseover", (event) => {
      newDiv.style.backgroundColor = "black";
    });
    container.appendChild(newDiv);
  }
}

function grid() {
  let newGrid = prompt("Change size?");
  if ((newGrid = 64)) {
  }
  for (let i = 0; i < 4096; i++) {
    let newSize = document.createElement("div");
    newSize.classList.add("content");
    newSize.addEventListener("mouseover", (event) => {
      newSize.style.backgroundColor = "black";
    });
    container.appendChild(newSize);
  }
}

//Create a button at the top of the screen
let topOfScreen = document.createElement("button");
topOfScreen.textContent = "Reset";
button.appendChild(topOfScreen);

//button to change the size of the grid
function newButton() {
  topOfScreen.addEventListener("click", (e) => {
    grid();
  });
}

fullSize();
newButton();
