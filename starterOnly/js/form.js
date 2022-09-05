//  
let valid = true;

/* form object contains for each input:
    - DOM element
    - error message
    - a validation function
*/
const form = [
    {
        element: document.getElementById('first'),
        errorMessage: 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
        validation: function() {
            return /^[a-z][a-z]+$/i.test(this.element.value.trim());
        }
    },
    {
        element: document.getElementById('last'),
        errorMessage: 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
        validation: function() {
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

// 
const validateInput = (element, message, validation) => {

    if(!validation) {
        showError(element, message);
        valid = false;
    } else clearError(element);
};

// Form validation function, check if valid stay true for each input
const validate = (event) => {
    valid = true;

    for(let item in form) {
        if(Array.isArray(form[item].element)) {
            console.log('is array');
            validateInput(form[item].element[0], form[item].errorMessage, form[item].validation());
        } else validateInput(form[item].element, form[item].errorMessage, form[item].validation());
    }

    console.log(`form is ${valid ? 'valid' : 'invalid'}`);

    if(valid) {
        showValidationMessage();
        showCloseButton();
    } /*else { event.preventDefault(); }*/

    // return false;
}