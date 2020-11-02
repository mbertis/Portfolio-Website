(function () {
    let form = document.querySelector("#contact-form");
    let emailInput = document.querySelector("#contact-email");
    let phoneInput = document.querySelector("#contact-tel");
    let messageInput = document.querySelector("#contact-message");

function validateEmail() {
    let value = emailInput.value;

    if (!value) {
        showErrorMessage(emailInput, "Email is required");
        return false;
    }


if (value.indexOf("@") === -1) {
    showErrorMessage(emailInput, "Please enter a valid email address");
    return false;
}

showErrorMessage(emailInput, null);
return true;
}

function validateTelephone() {
    let value = phoneInput.value;

    if(!value) {
        showErrorMessage(phoneInput, "Phone number is required");
        return false;
    }

    if(value.length < 10) {
        showErrorMessage(phoneInput, "Phone number must include US area code");
        return false;
    }

    showErrorMessage(phoneInput, null);
    return true;
}

function validateMessage() {
    let value = messageInput.value;

    if(!value) {
        showErrorMessage(messageInput, "Message is required");
        return false;
    }

    showErrorMessage(messageInput, null);
    return true;
}

function showErrorMessage(input, message) {
    let container = input.parentElement;
    let error = container.querySelector(".error-message");
    if(error) {
        container.removeChild(error);
    }
    if(message) {
        let error = document.createElement("div");
        error.classList.add("error-message");
        error.innerText = message;
        container.appendChild(error);
    }
}

function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPhone = validateTelephone();
    let isValidMessage = validateMessage();
    return isValidEmail && isValidPhone && isValidMessage;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(validateForm()) {
        alert("Message Sent!");
    }
});

emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validateTelephone);
messageInput.addEventListener("input", validateMessage);

})();