const form = document.querySelector('.login-form');


const onSubmitForm = (event) => {
    event.preventDefault();
    
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '') {
        alert('Поле Email пустое, введите Email')
    } 

    if (password === '') {
        alert('Поле Password пустое, введите Password')
    }

    if (email !== '' && password !== '') {

         const dataFrom = {
        email, password,
         }
        console.log(dataFrom);

        return dataFrom;
    }
   
}

form.addEventListener('submit', onSubmitForm);









