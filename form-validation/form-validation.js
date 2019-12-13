const $emailInput = document.querySelector("#email-input");
const $passWordInput = document.querySelector("#password-input");
const $resetBtn = document.querySelector("#reset-btn");
const $submitBtn = document.querySelector("#submit-btn");

function validField($element) {
  $element.classList.toggle("is-valid");
}

function invalidField($element) {
  $element.classList.toggle("is-invalid");
}

function checkEmail() {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if ($emailInput.value.match(mailFormat)) {
    validField($emailInput);
    return true;
  } else {
    invalidField($emailInput);
    return false;
  }
}

function checkPassword() {
  const passwordFormat = /(?:[A-Z].*[0-9])|(?:[0-9].*[A-Z])/;
  //https://regexr.com/ https://regex101.com/
  if ($passWordInput.value.match(passwordFormat)) {
    validField($passWordInput);
    return true;
  } else {
    invalidField($passWordInput);
    return false;
  }
}

function resetInputValidation($formElement) {
  $formElement.classList.remove("is-invalid");
  $formElement.classList.remove("is-valid");
}

function resetFormValidation($formElement) {
  $formElement.forEach($element => {
    resetInputValidation($element);
  });
}

function cleanInput($formElement) {
  $formElement.forEach($element => {
    $element.value = "";
  });
}

$emailInput.addEventListener("change", () => {
  resetInputValidation($emailInput);
  checkEmail();
});

$passWordInput.addEventListener("change", () => {
  resetInputValidation($passWordInput);
  checkPassword();
});

$resetBtn.addEventListener("click", () => {
  const $formElement = document.querySelectorAll(".form-control");
  resetFormValidation($formElement);
  cleanInput($formElement);
});

$submitBtn.addEventListener("click", event => {
  event.preventDefault();
  checkEmail();
  checkPassword();

  if (checkEmail() && checkPassword()) {
    console.log("all true");
  } else {
    console.log("not true");
  }
  // Envoyer le formulaire si tout est valide via une action ajax SendForm
});
