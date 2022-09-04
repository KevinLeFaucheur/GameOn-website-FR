// DOM Elements
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = [...document.querySelectorAll('input[type="radio"]')];
console.log(locations[0]);
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

const form = [
    {
        element: document.getElementById('first'),
        errorMessage: 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
        validation: function() {
            // console.log('first name: ' + this.element.value);
            return /^[a-z][a-z]+$/i.test(this.element.value.trim());
        }
    },
    {
        element: document.getElementById('last'),
        errorMessage: 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
        validation: function() {
            // console.log('last name: ' + this.element.value);
            return /^[a-z][a-z]+$/i.test(this.element.value.trim());
        }
    },
    {
        element: document.getElementById('email'),
        errorMessage: 'Veuillez entrer une adresse mail valide.',
        validation: function() {
            return /^[\w]+@[\w]+\.[\w]+$/.test(this.element.value);
        }
    },
    {
        element: document.getElementById('birthdate'),
        errorMessage: 'Vous devez entrer votre date de naissance.',
        validation: function() {
            return !isNaN(Date.parse(this.element.value));
        }
    },
    {
        element: document.getElementById('quantity'),
        errorMessage: 'Veuillez indiquer le nombre de tournois.',
        validation: function() {
            return !(isNaN(this.element.value) || this.element.value === '');
        }
    },
    {
        element: [...document.querySelectorAll('input[type="radio"]')],
        errorMessage: 'Vous devez choisir une option.',
        validation: function() {
            let checked = false;
            for(let location of this.element) {
                if(location.checked) {
                    checked = true;
                    break;
                }
            }
            return checked;
        }
    },
    {
        element: document.getElementById('checkbox1'),
        errorMessage: 'Vous devez vérifier que vous acceptez les termes et conditions.',
        validation: function() {
            return this.element.checked;
        }
    }
];

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
const validateLocationChoice = (element) => {
    let checked = false;
    for(let location of element) {
        console.log(element);
        if(location.checked) {
            console.log(location.checked);
            checked = true;
            break;
        }
    }
    return checked;
}

// Terms of Service checkbox validation
const validateTermsOfService = (element) => {
    return !element.checked;
};

// Date object validation
const validateDate = (element) => {
    return isNaN(Date.parse(element.value));
};

// 
const validateInput = (element, message, validation) => {

    // console.log(`${element} ${message} ${validation}`);

    if(!validation) {
        showError(element, message);
        valid = false;
    } else clearError(element);
};

// Form validation function, check if valid stay true for each input
const validate = (event) => {
    valid = true;

    // form.forEach(item = () => validateInput(item.validation, item.))
    for(let item in form) {
        // valid = form[item].validation();
        // console.log(`${form[item].element} ${form[item].errorMessage} ${form[item].validation()}`);
        if(Array.isArray(form[item].element)) {
            console.log('is array');
            validateInput(form[item].element[0], form[item].errorMessage, form[item].validation());
        } else validateInput(form[item].element, form[item].errorMessage, form[item].validation());

        // for(let key in form[item]) {
        //     console.log(`${form[item][key]}`);
        // }
    }

    // validateInput(validateName(firstName), firstName, firstNameErrorMessage);
    // validateInput(validateName(lastName), lastName, lastNameErrorMessage);
    // validateInput(validateEmail(email), email, emailErrorMessage);
    // validateInput(validateDate(birthdate), birthdate, birthdateErrorMessage);
    // validateInput(validateLocationChoice(), locations[0], locationsErrorMessage);
    // validateInput(validateTournamentQuantity(quantity), quantity, quantityErrorMessage);
    // validateInput(validateTermsOfService(), checkbox, termsOfServiceErrorMessage);

    console.log(`form is ${valid ? 'valid' : 'invalid'}`);

    if(valid) {
        showValidationMessage();
        showCloseButton();
    } /*else { event.preventDefault(); }*/

    // return false;
}