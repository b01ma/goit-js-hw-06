const input = document.querySelector('#validation-input');
const dataSetOfInput = Number(input.dataset.length);


const onChangeEvent = (event) => {
    const inputLength = event.currentTarget.value.length;
    console.log(`Введено: ${inputLength}, должно быть: ${dataSetOfInput} `);
    
   
    if (inputLength === dataSetOfInput) {
        console.log('working')

        input.classList.add('valid');
        input.classList.remove('invalid');
        
    } else {
        console.log('not working')

        input.classList.remove('valid');
        input.classList.add('invalid');
        
    }

}

input.addEventListener('change', onChangeEvent);