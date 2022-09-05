// Build the error element
const error = () => {
    let newError = document.createElement('small');
    newError.classList.add('error');
    return newError;
};

// Show error element if it doesn't exist
const showError = (element, errorMessage) => {    
    if(element.parentElement.getElementsByClassName('error').length == 0) {
        element.parentElement.appendChild(error()).textContent = errorMessage;
        element.style.borderColor = "red";
    }
};

// Clear error element if it exists
const clearError = (element) => {   
    if(element.parentElement.getElementsByClassName('error').length > 0) {
        element.parentElement.querySelector('.error').remove();
        element.style.borderColor = "black";
    }
};