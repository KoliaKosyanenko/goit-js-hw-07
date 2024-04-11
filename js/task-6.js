function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes() {
  const amount = parseInt(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }

  let size = 30;
  let boxesHTML = "";

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesHTML += `<div style="width:${size}px; height:${size}px; background-color:${color};"></div>`;
    size += 10;
  }

  boxesContainer.innerHTML = boxesHTML;

  input.value = "";
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
