const btnChangeColor = document.querySelector('.change-color');
const spanNameColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
  const newColor = getRandomHexColor();
  // console.log(newColor);
  document.body.style.backgroundColor = newColor;
  spanNameColor.textContent = newColor;
}
