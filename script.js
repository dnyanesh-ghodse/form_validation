const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById("password2");
const msgContainer = document.querySelector('.message-container');
const msg = document.getElementById('message');

let isValid = false;

function validateForm(){
    //contraint api
    isValid = form.checkValidity();
    // error msg
    msg.textContent = 'Please fill out all fields.';
    msg.style.color = 'red';
    msgContainer.style.borderColor = 'red';
}

function processFormData(e){
    e.preventDefault();
    validateForm();
}

//Event listener

form.addEventListener('submit',processFormData)
