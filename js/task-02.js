const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsListEl = ingredients.map(ingredient => {
  const elementOfIngredientsList = document.createElement('li');
  elementOfIngredientsList.textContent = `${ingredient}`;
  elementOfIngredientsList.classList.add("item");
  return elementOfIngredientsList;
});
ingredientsList.append(...ingredientsListEl);