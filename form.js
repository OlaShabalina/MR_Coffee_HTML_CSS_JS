const submitButton = document.querySelector("#form-button");
const contactForm = document.querySelector('#contact-us-form')
const closePopupButton = document.querySelector("#close-popup-button");
const overlay = document.querySelector("#overlay");
const popup = document.querySelector("#popup")

// here are events to submit form and close pop-up
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    popup.classList.add('active');
    overlay.classList.add('active');
})

closePopupButton.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
})