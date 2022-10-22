const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const ingredientList = () => {
  return ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient
      item.classList.add('item');
    return item;
})
};
 
const elements = ingredientList(ingredients);
listEl.append(...elements);
