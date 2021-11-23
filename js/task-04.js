
const decrement = document.querySelector("button[data-action='decrement']");
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

// console.log(decrement, increment, counterValue);

const updateValue = () => value.innerHTML = counterValue;

const onClickIncrese = () => {
    counterValue += 1;
    updateValue();
};

const onClickDecrease = () => {
    counterValue -= 1;
    updateValue();
};


decrement.addEventListener('click',onClickDecrease);

increment.addEventListener('click', onClickIncrese);



