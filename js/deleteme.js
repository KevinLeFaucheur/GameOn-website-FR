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

// Letters only validation RegEx
const isLettersOnly = (string) => {
    return /^[a-z][a-z]+$/i.test(string);
};

// Email validation RegEX
const isEmailValid = (string) => {
    return /^[\w]+@[\w]+\.[\w]+$/.test(string);  
};

// String validation for First Name
const checkFirstName = () => {
    if(!isLettersOnly(firstName.value.trim())) {
        showError(firstName, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        valid = false;
    } else clearError(firstName);
}

// String validation for Last Name
const checkLastName = () => {
    if(!isLettersOnly(lastName.value.trim())) {
        showError(lastName, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        valid = false;
    } else clearError(lastName);
}

//
const checkEmail = () => {
    if(!isEmailValid(email.value)/*email.value.indexOf('@') == -1*/) {
        showError(email, 'Veuillez entrer une adresse mail valide.');
        valid = false;
    } else clearError(email);
}

// Check if quantity is a number
const checkTournamentQuantity = () => {
    if(isNaN(quantity.value) || quantity.value === '') {
        showError(quantity, 'Veuillez indiquer le nombre de tournois.');
        valid = false;
    } else clearError(quantity);
}

// 
const checkLocation = () => {
    let checked = false;

    for(let location of locations) {
        if(location.checked) {
            checked = true;
            break;
        }
    }

    if(!checked) { 
        showError(locations[0], 'Vous devez choisir une option.'); 
        valid = false;
    } else clearError(locations[0]);
}

// Terms of Service checkbox validation
const checkTermsOfService = () => {
    if(!checkbox.checked) {
        showError(checkbox, 'Vous devez vérifier que vous acceptez les termes et conditions.');
        valid = false;
    } else clearError(checkbox);
}

// Date object validation
const checkBirthdayDate = () => {
    let date = new Date(birthdate);
    if(isNaN(Date.parse(birthdate.value))) {
        showError(birthdate, 'Vous devez entrer votre date de naissance.');
        valid = false;
    } else clearError(birthdate);
};

// Form validation function, check if valid stay true for each input
const validate = (event) => {
    valid = true;

    checkFirstName();
    checkLastName();
    checkEmail();
    checkTournamentQuantity();
    checkLocation();
    checkTermsOfService();
    checkBirthdayDate();

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