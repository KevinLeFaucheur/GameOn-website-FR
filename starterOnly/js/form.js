const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('input[type="radio"]');
const checkbox = document.getElementById('checkbox1');

let valid = true;

const isLettersOnly = (string) => {
    return /^[a-z][a-z]+$/i.test(string);
};

const checkFirstName = () => {
    if(!isLettersOnly(firstName.value.trim())) {
        showError(firstName, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        valid = false;
    } else clearError(firstName);
}

const checkLastName = () => {
    if(!isLettersOnly(lastName.value.trim())) {
        showError(lastName, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        valid = false;
    } else clearError(lastName);
}

const checkEmail = () => {
    if(email.value.indexOf('@') == -1) {
        showError(email, 'Veuillez entrer une adresse mail valide.');
        valid = false;
    } else clearError(email);
}

const checkTournamentQuantity = () => {
    if(isNaN(quantity.value) || quantity.value === '') {
        showError(quantity, 'Veuillez indiquer le nombre de tournois.');
        valid = false;
    } else clearError(quantity);
}

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

const checkTermsOfService = () => {
    if(!checkbox.checked) {
        showError(checkbox, 'Vous devez vérifier que vous acceptez les termes et conditions.');
        valid = false;
    } else clearError(checkbox);
}

const checkBirthdayDate = () => {
    let date = new Date(birthdate);
    console.log(Date.parse(birthdate.value));
    if(isNaN(Date.parse(birthdate.value))) {
        showError(birthdate, 'Vous devez entrer votre date de naissance.');
        valid = false;
    } else clearError(birthdate);
};

const validate = (event) => {
    valid = true;

    checkFirstName();
    checkLastName();
    checkEmail();
    checkTournamentQuantity();
    checkLocation();
    checkTermsOfService();

    checkBirthdayDate();

    console.log(`form is ${valid ? 'valid' : 'invalid'}`);

    if(valid) {
        showValidationMessage();
        showCloseButton();
    } /*else { event.preventDefault(); }*/

    // return false;
}