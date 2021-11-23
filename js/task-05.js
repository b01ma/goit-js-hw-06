const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const onInputChange = (event) => {
    // console.log(event.currentTarget.value);

    if (event.currentTarget.value === "") {
        // console.log('working')
        nameOutput.textContent = "Anonymus";
        return nameOutput.textContent;
    }

    nameOutput.textContent = event.currentTarget.value
};

nameInput.addEventListener('input', onInputChange);
