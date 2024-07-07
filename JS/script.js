const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const passConfirm = document.getElementById("password2");


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
};

const isValidEmail = email => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regexEmail.test(string(email).toLowerCase());
}

const validateInputs = () => {
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (nombreValue === '') {
        setError(nombre, 'Escriba su Nombre');
    } else {
        setSuccess(nombre);
    };

    if (emailValue === '') {
        setError(email, 'Escriba su Correo');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Escriba un Correo válido');
    } else {
        setSuccess(email);
    };

    if (passwordValue === '') {
        setError(password, 'Escriba su password');
    } else if (passwordValue.length < 8) {
        setError(password, 'Su password necesita mas de 8 caracteres.')
    } else {
        setSuccess(password);
    };

    if (password2Value === '') {
        setError(password2, 'Confirme su password');
    } else if (password2Value !== passwordValue) {
        setError(password2, 'Su confirmación no es correta.')
    } else {
        setSuccess(password2);
    };
};


