// Choosing elements we will be using

const contactForm = document.querySelector("#contact-us-form");
const closePopupButton = document.querySelector("#close-popup-button");
const overlay = document.querySelector("#overlay");
const popup = document.querySelector("#popup");

// Form elements here
const username = document.querySelector("#name");
const surname = document.querySelector("#surname");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

// here are events to submit form and open a pop-up

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {

// count represents points of validation, count increases for the * inputs
  let count = 0;

//   Validating name using generic function validateInput() defined below
  count = validateInput(username, isNameValid, count);

// Validating surname
  count = validateInput(surname, isNameValid, count);

//   Validating phone numer (manually since it's not * and there is error on " " input)
  if (phone.value !== "") {
    if (!isPhoneValid(phone.value)) {
        setErrorFor(phone, "Veuillez saisir un numéro de téléphone valide"); // translation: Please enter a valid phone number
      } else {
        setSuccessFor(phone);
      }
  }

  // Validating email
  count = validateInput(email, isEmailValid, count);

  // Validating message
  count = validateInput(message, isMessageValid, count);

  // show the pop-up if everything is successful, I'll use count for that

  if (count === 4) {
    console.log({
        name: username.value,
        surname: surname.value,
        phone: phone.value,
        email: email.value,
        message: message.value
    });
    // reset colors of input once the form is submitted
    resetSuccessError(username);
    resetSuccessError(surname);
    resetSuccessError(phone);
    resetSuccessError(email);
    resetSuccessError(message);
    // create a pop-up
    popup.classList.add("active");
    overlay.classList.add("active");
  }
}

// Creating functions for displaying error and success messages below:

function setErrorFor(input, message) {
  const formElement = input.parentElement;

  const errorMessage = formElement.querySelector(".error-message");

  // adding error message inside small tag
  errorMessage.innerText = message;
  formElement.classList.add("error");
}

function setSuccessFor(input) {
  const formElement = input.parentElement;
  formElement.classList.add("success");
}

// Function to reset styles 

function resetSuccessError(input) {
  const formElement = input.parentElement;
  formElement.classList.remove("success");
  formElement.classList.remove("error");
}

// Generic function to validate input using setSuccess and serError functions 

function validateInput(inputElement, validateFunction, count) {
  const inputValue = inputElement.value.trim();
  if (inputValue === "") {
    // show error by adding error class or success with success class, I'll create separate functions for it below
    setErrorFor(
      inputElement,
      `${inputValue} d’utilisateur ne peut pas être vide`
    ); // translation: Input cannot be blank
    return count;
  } else if (!validateFunction(inputValue)) {
    setErrorFor(inputElement, "S’il vous plaît utiliser valide caractères"); // translation: Please use valid characters
    return count;
} else {
    setSuccessFor(inputElement);
    count++
    return count;
  }
}

//Function to validate name and surname (text only)

function isNameValid(input) {
  return /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(input);
}

//Function to validate phone

function isPhoneValid(phone) {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
    phone
  );
}

//Function to validate email

function isEmailValid(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Validating message

function isMessageValid(message) {
    return message.length >= 10 && /^[A-Za-z\s]/.test(message);
}

// Closing the pop-up on click of the popup button

closePopupButton.addEventListener("click", () => {
  popup.classList.remove("active");
  overlay.classList.remove("active");
  contactForm.reset();
});
