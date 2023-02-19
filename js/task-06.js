const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length !== Number(inputText.dataset.length)) {
    inputText.classList.remove('valid');
    inputText.classList.add('invalid');
  } else {
    inputText.classList.remove('invalid');
    inputText.classList.add('valid');
  }
}
