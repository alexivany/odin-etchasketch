"use strict";

const button = document.querySelector("button");
const body = document.querySelector(".grid-container");

const gridDiv = document.createElement("div");
gridDiv.classList.add("grid");

body.appendChild(gridDiv);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createGrid() {
  for (let i = 0; i < gridSize ** 2; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    gridDiv.textContent = "";
    body.appendChild(gridDiv);
  }
}

// Load default states
let gridSize = 16;
createGrid();
drawGrid();

function drawGrid() {
  const gridArray = document.querySelectorAll(".grid");

  gridArray.forEach(function (grid) {
    grid.addEventListener("mouseover", (event) => {
      grid.classList.toggle("active");
      grid.style.backgroundColor = randomColor();
    });
    // grid.addEventListener("mouseleave", (event) => {
    //   grid.classList.remove("active");
    // });
  });
}

// Change Grid button behaviour
button.addEventListener("click", changeGrid);

function changeGrid() {
  removeAllChildNodes(body);
  const userGrid = prompt("How many squares per side?");
  gridSize = parseInt(userGrid);
  console.log(gridSize);
  body.style.gridTemplateColumns = `repeat(${userGrid}, 1fr)`;
  body.style.gridTemplateRows = `repeat(${userGrid}, 1fr)`;
  createGrid();
  drawGrid();
}

// Output random rgb string
function randomColor() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}
