const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('ul');
console.log(listIngredients);

const listItems = ingredients.map(content => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = content;
  console.log(itemEl);
  return itemEl;
});

console.log(listItems);

listIngredients.append(...listItems);
