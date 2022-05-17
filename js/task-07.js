const inputController = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = `${inputController.value}px`;
const onInputControllerClick = inputController.addEventListener('input', () => {
    textEl.style.fontSize = `${inputController.value}px`;
})