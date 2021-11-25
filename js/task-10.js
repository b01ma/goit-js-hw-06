function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');

const controls = document.querySelector('#controls');
const inputField = controls.children[0];
const createBtn = controls.children[1];
const destroyBtn = controls.children[2]

// console.log(inputField, createBtn, destroyBtn);

const onClickCreate = () => {
  console.log(inputField.value);
  
let x = 30;

  for (let i = 0; i < inputField.value; i += 1) {
    
    const el = document.createElement('div');

      x += 10;
      
    const widthOfBox = `${x}px`
    const heigthOfBox = `${x}px`

    el.style.width = widthOfBox;
    el.style.height = heigthOfBox;

    el.style.marginTop = '10px';
      
    el.style.backgroundColor = getRandomHexColor();
      
    boxes.append(el);
  }
};

const onClickDestroy = () => {
  
  for (let i = 0; i < inputField.value; i += 1) {
    boxes.lastChild.remove();
  }
  inputField.value = '0';
}

createBtn.addEventListener('click', onClickCreate);

destroyBtn.addEventListener('click', onClickDestroy);

