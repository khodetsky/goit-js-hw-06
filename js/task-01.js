const categoriesList = document.querySelector('#categories');
const itemOfCategoriesList = document.querySelectorAll('li.item');

const numberOfCategories = categoriesList.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

itemOfCategoriesList.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});



