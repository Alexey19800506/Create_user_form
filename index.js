const baseUrl = 'https://63f611d99daf59d1ad81329e.mockapi.io/api/v1/user';

const buttonElem = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');

function getUsersList() {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(result => alert(JSON.stringify(result)));
}

function createUser(formData) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formData),
    });
}

const onFormValidity = event => {
    event.preventDefault();
    if (formElem.reportValidity()) {
        buttonElem.removeAttribute('disabled');
    }
}

formElem.addEventListener('input', onFormValidity);

const onFormSubmit = event => {
    event.preventDefault();
    
    const formData = [...new FormData(formElem)].reduce((acc, [field, value]) => ({...acc, [field]: value }), {});

    createUser(formData);

    getUsersList();

    formElem.reset();
    buttonElem.setAttribute('disabled', false);
}

formElem.addEventListener('submit', onFormSubmit);

