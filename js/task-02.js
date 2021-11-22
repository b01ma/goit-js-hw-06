const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addIngredients = (item) => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = item;
  listItemRef.classList.add('item');

  return listItemRef;
};

const listOfIngredients = ingredients.map(addIngredients);

document.querySelector('ul').append(...listOfIngredients);
