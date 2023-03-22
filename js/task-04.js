let counterValue = 0;

const decr = document.querySelector('.button[data-action="decrement"]');
const incr = document.querySelector('.button[data-action="increment"]');
const span = document.getElementById('#value');

decr.addEventListener('click', onAddNumber);
incr.addEventListener('click', onRemoveNumber);

function onAddNumber(value) {
    counterValue += 1;
    span.textContent = counterValue;
}

function onRemoveNumber(value) {
    counterValue -= 1;
    span.textContent = counterValue;
}
