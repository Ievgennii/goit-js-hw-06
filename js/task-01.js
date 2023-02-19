
const categoriesItemsEl = document.querySelectorAll('.item');
// console.log(categoriesItemsEl);
console.log('Number of categories:', categoriesItemsEl.length);
categoriesItemsEl.forEach(function callback(element, index, array) {
  // Тело коллбек-функции
  console.log('');
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.querySelectorAll('li').length);
});
