// DOM Elements
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('input[type="radio"]');
const checkbox = document.getElementById('checkbox1');

// Messages
const firstNameErrorMessage = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
const lastNameErrorMessage = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
const emailErrorMessage = 'Veuillez entrer une adresse mail valide.';
const quantityErrorMessage = 'Veuillez indiquer le nombre de tournois.';
const locationsErrorMessage = 'Vous devez choisir une option.';
const birthdateErrorMessage = 'Vous devez entrer votre date de naissance.';
const termsOfServiceErrorMessage = 'Vous devez vérifier que vous acceptez les termes et conditions.';

// 
let valid = true;

// String validation RegEx for first and last names
const validateName = (element) => {
    return !/^[a-z][a-z]+$/i.test(element.value.trim());
}

// Email validation RegEx
const validateEmail = (element) => {
    return !/^[\w]+@[\w]+\.[\w]+$/.test(element.value); /*email.value.indexOf('@') == -1*/
}

// Check if quantity is a number
const validateTournamentQuantity = (element) => {
    return isNaN(element.value) || element.value === '';
}

// 
const validateLocationChoice = () => {
    let checked = false;
    for(let location of locations) {
        if(location.checked) {
            checked = true;
            break;
        }
    }
    return !checked;
}

// Terms of Service checkbox validation
const validateTermsOfService = () => {
    return !checkbox.checked;
};

// Date object validation
const validateDate = (element) => {
    return isNaN(Date.parse(element.value));
};

// 
const validateInput = (validation, element, message) => {
    if(validation) {
        showError(element, message);
        valid = false;
    } else clearError(element);
};

// Form validation function, check if valid stay true for each input
const validate = (event) => {
    valid = true;

    validateInput(validateName(firstName), firstName, firstNameErrorMessage);
    validateInput(validateName(lastName), lastName, lastNameErrorMessage);
    validateInput(validateEmail(email), email, emailErrorMessage);
    validateInput(validateDate(birthdate), birthdate, birthdateErrorMessage);
    validateInput(validateLocationChoice(), locations[0], locationsErrorMessage);
    validateInput(validateTournamentQuantity(quantity), quantity, quantityErrorMessage);
    validateInput(validateTermsOfService(), checkbox, termsOfServiceErrorMessage);

    console.log(`form is ${valid ? 'valid' : 'invalid'}`);

    if(valid) {
        showValidationMessage();
        showCloseButton();
    } /*else { event.preventDefault(); }*/

    // return false;
}