function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const creatrBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('#controls > input');
const bigBox = document.querySelector('#boxes');
  
creatrBtn.addEventListener('click', onInputChange );
  
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onInputChange() {
  inputEl.addEventListener('input', createBoxes(inputEl.value));
};
function onDestroyBtnClick() {
  return bigBox.innerHTML = ' ';
};

  function createBoxes(amount) {
    let boxSize = 30;
  
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box')
      box.style.marginBottom = '10px'
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = `${getRandomHexColor()}`
      bigBox.append(box);
      boxSize += 10;
    };
  }

