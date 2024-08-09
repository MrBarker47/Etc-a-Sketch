// Create 256 grid

// for (let i = 0; i < 256; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.id = "color";
//   newDiv.addEventListener("mouseover", (event) => {
//     newDiv.style.backgroundColor = "black";
//   });
//   container.appendChild(newDiv);
// }

function grid() {
  for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = "color";
    let node = document.getElementById("color");
    node.parentNode.removeChild(node);
  }

  for (let i = 0; i < 960; i++) {
    let newSize = document.createElement("div");
    newSize.classList.add("content");
    newSize.addEventListener("mouseover", (event) => {
      newSize.style.backgroundColor = "black";
    });
    container.appendChild(newSize);
  }
}

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

//Create a button at the top of the screen
let topOfScreen = document.createElement("button");
topOfScreen.textContent = "Change to 64px";
button.appendChild(topOfScreen);

// let topOfScreen2 = document.createElement("button");
// topOfScreen2.textContent = "Change to 64px";
// button.appendChild(topOfScreen2);

//button to change the size of the grid
function newButton() {
  topOfScreen.addEventListener("click", (e) => {
    grid();
  });
}

fullSize();
newButton();
