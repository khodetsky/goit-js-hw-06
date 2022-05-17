const counterValueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

var counterValue  = 0;
const onDecrementBtnClick = () => {
    counterValue  -= 1;
    counterValueEl.textContent = counterValue ;
    };
const onIncrementBtnClick = () => {
    counterValue  += 1;
    counterValueEl.textContent = counterValue ;
    };
decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);




