function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValue = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');


const getColor = () => {
document.body.style.backgroundColor = `${getRandomHexColor()}`;
colorValue.textContent = `${getRandomHexColor()}`;
}
const onChangeColorButtonClick = changeColorButton.addEventListener('click', getColor);
