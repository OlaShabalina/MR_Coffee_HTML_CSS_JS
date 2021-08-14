// Assigning all the variables first

const submitButton = document.querySelector("#form-button");
const contactForm = document.querySelector('#contact-us-form')
const closePopupButton = document.querySelector("#close-popup-button");
const overlay = document.querySelector("#overlay");
const popup = document.querySelector("#popup");

// Form elements here 
const username = document.querySelector('#name');
const surname = document.querySelector('#surname');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

// here are events to submit form and open a pop-up


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // checkInputs();
    popup.classList.add('active');
    overlay.classList.add('active');
})



function checkInputs() {
 // get values from inputs
    const nameValue = username.value.trim();
    const surnameValue = surname.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
// used .trim() to remove white spaces

// Validating name first
    if (nameValue === '') {
        // show error by adding error class or success with success class, I'll create separate functions for it below
        setErrorFor(username, "Le nom d’utilisateur ne peut pas être vide") // translation: Username cannot be blank
    } else {
        setSuccessFor(username);
    }

// Validating surname the same way as name
    if (surnameValue === '') {
        // show error by adding error class or success with success class, I'll create separate functions for it below
        setErrorFor(surname, "Le nom de famille ne peut pas être vide") // translation: Surname cannot be blank
    } else {
        setSuccessFor(surname);
    }

//Validating phone numer 
    if (!isPhoneValid(phoneValue)) {
        setErrorFor(phone, "Veuillez saisir un numéro de téléphone valide"); // translation: Please enter a valid phone number
    } else {
        setSuccessFor(phone);
    }

// Validating email 
    if (emailValue === '') {
        setErrorFor(email, "L’e-mail ne peut pas être vide"); // translation: Email cannot be blank
    } else if (!isEmailValid(emailValue)) {
        setErrorFor(email, "Veuillez saisir une adresse e-mail valide"); // translation: Please enter a valid email address
    } else {
        setSuccessFor(email);
    }

// Validating message

    if (messageValue === '') {
        setErrorFor(message, "Veuillez ajouter un message"); // translation: Please add a message
    } else {
        setSuccessFor(message)
    }

// show the pop-up if everything is successful

    

}


// Creating functions for displaying error and success messages below:

function setErrorFor (input, message) {
    const formElement = input.parentElement; 
    const errorMessage = formElement.querySelector('.error-message');
    
    // adding error message inside small tag
    errorMessage.innerText = message;
    formElement.classList.add('error');
}

function setSuccessFor (input) {
    const formElement = input.parentElement; 
    formElement.classList.add('success');
}

//Function to validate phone will be here

function isPhoneValid(phone) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);
}


//Function to validate email will be here

function isEmailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// Closing the pop-up on click of the popup button

closePopupButton.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
})
