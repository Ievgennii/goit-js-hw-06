const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
input.addEventListener('input', onFontSizeControl);

function onFontSizeControl(event) {
  // console.log(event.target.value);
  // text.textContent = event.target.value;
  text.style.fontSize = `${event.target.value}px`;
}