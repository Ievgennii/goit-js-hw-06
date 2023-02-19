let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counterValueText = document.querySelector('#value');

btnDecrement.addEventListener(
  'click',
  (event) =>
    (counterValueText.innerHTML = `<span id="value">${(counterValue -= 1)}</span>`)
);
btnIncrement.addEventListener(
  'click',
  (event) =>
    (counterValueText.innerHTML = `<span id="value">${(counterValue += 1)}</span>`)
);
