function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
console.log(input);
const boxDiv = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {createBoxes(input.value)});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  let elements = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }
  boxDiv.append(...elements);
}

function destroyBoxes() {
  boxDiv.innerHTML = '';
  input.value = '';
}
