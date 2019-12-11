const resetBtn = document.querySelector("#reset-btn");
const submitBtn = document.querySelector("#submit-btn");

function checkEmail() {
  const emailInput = document.querySelector("#email-input");
  if (emailInput.value.includes("@")) {
    emailInput.classList.toggle("is-valid");
  } else {
    emailInput.classList.toggle("is-invalid");
  }
}

function checkPassword() {
  const passWordInput = document.querySelector("#password-input");
  if (passWordInput.value.length >= 10) {
    passWordInput.classList.toggle("is-valid");
  } else {
    passWordInput.classList.toggle("is-invalid");
  }
}

function resetClass() {
  const formElement = document.querySelectorAll(".form-control");
  formElement.forEach(element => {
    element.classList.remove("is-invalid");
    element.classList.remove("is-valid");
  });
}

function cleanInput() {
  const formElement = document.querySelectorAll(".form-control");
  formElement.forEach(element => {
    element.value = "";
  });
}

resetBtn.addEventListener("click", event => {
  event.preventDefault();
  resetClass();
  cleanInput();
});

submitBtn.addEventListener("click", event => {
  event.preventDefault();
  resetClass();
  checkEmail();
  checkPassword();
});
