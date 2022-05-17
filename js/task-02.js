const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsListEl = ingredients.forEach(ingredient => {
  const elementOfIngredientsList = document.createElement('li');
  elementOfIngredientsList.textContent = `${ingredient}`;
  elementOfIngredientsList.classList.add("item");
  return ingredientsList.append(elementOfIngredientsList);
});
