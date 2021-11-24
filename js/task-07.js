const input = document.querySelector('#font-size-control');
// console.dir(input.value);
const text = document.querySelector('#text');
// console.log(text);

text.style.fontSize = `${input.valueAsNumber}px`;

const onSlideChange = (event) => {
    
    console.log(`${event.currentTarget.valueAsNumber}px`);
    text.style.fontSize = `${event.currentTarget.valueAsNumber}px`;
};

input.addEventListener('input', onSlideChange);