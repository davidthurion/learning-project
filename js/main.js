const $resetBtn = document.querySelector("#reset-btn");
const $submitBtn = document.querySelector("#submit-btn");

function checkEmail() {
  const $emailInput = document.querySelector("#email-input");
  if ($emailInput.value.includes("@")) {
    // tester l'email avec une regexp
    $emailInput.classList.toggle("is-valid");
    // validField($emailInput);
  } else {
    $emailInput.classList.toggle("is-invalid");
  }
}

function checkPassword() {
  const $passWordInput = document.querySelector("#password-input");
  if ($passWordInput.value.length >= 10) {
    // Le mot de passe doit contenir une majuscule, un chiffre
    $passWordInput.classList.toggle("is-valid");
  } else {
    $passWordInput.classList.toggle("is-invalid");
  }
}

function resetFormValidation($formElement) {
  $formElement.forEach($element => {
    $element.classList.remove("is-invalid");
    $element.classList.remove("is-valid");
  });
}

function cleanInput($formElement) {
  $formElement.forEach($element => {
    $element.value = "";
  });
}

$resetBtn.addEventListener("click", () => {
  const $formElement = document.querySelectorAll(".form-control");
  resetFormValidation($formElement);
  cleanInput($formElement);
});

$submitBtn.addEventListener("click", event => {
  const $formElement = document.querySelectorAll(".form-control");
  event.preventDefault();
  resetFormValidation($formElement);
  checkEmail();
  checkPassword();

  // Envoyer le formulaire si tout est valide via une action ajax SendForm
});
