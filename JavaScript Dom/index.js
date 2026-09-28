let userNameDiv = document.getElementById("userNameDiv");
let passDiv = document.getElementById("passDiv");
let confirmDiv = document.getElementById("confirmDiv");
let successDiv = document.getElementById("successDiv");

let btn = document.getElementById("btn");

let userName = document.getElementById("userName");
let password = document.getElementById("password");
let confirm = document.getElementById("confirm");

userName.addEventListener("input", checkForm);

password.addEventListener("input", () => {
  validatPass(password.value);
  checkForm();
});

confirm.addEventListener("input", checkForm);

btn.addEventListener("click", () => {
  successDiv.textContent = "Registration successful!";
});

function checkForm() {
  const userNameValue = userName.value.trim();
  const passwordValue = password.value;
  const confirmValue = confirm.value;

  if (userNameValue === "") {
    userNameDiv.textContent = "Please fill this field";
  } else {
    userNameDiv.textContent = "";
  }

  if (passwordValue === "") {
    passDiv.textContent = "Please fill this field";
  }

  if (confirmValue === "") {
    confirmDiv.textContent = "Please fill this field";
  } else if (passwordValue !== confirmValue) {
    confirmDiv.textContent = "Passwords do not match";
  } else {
    confirmDiv.textContent = "";
  }

  btn.disabled =
    userNameValue === "" ||
    !validatPass(passwordValue) ||
    confirmValue === "" ||
    passwordValue !== confirmValue;
}

function validatPass(pass) {
  if (pass.length < 8) {
    passDiv.textContent = "Password must be at least 8 characters";
    return false;
  }

  if (!/[a-z]/.test(pass)) {
    passDiv.textContent = "Password must contain a lowercase letter";
    return false;
  }

  if (!/[A-Z]/.test(pass)) {
    passDiv.textContent = "Password must contain an uppercase letter";
    return false;
  }

  if (!/\d/.test(pass)) {
    passDiv.textContent = "Password must contain a number";
    return false;
  }

  if (!/[@$!%*?&]/.test(pass)) {
    passDiv.textContent =
      "Password must contain a special character (@, $, !, %, *, ?, &)";
    return false;
  }

  passDiv.textContent = "Password is valid";
  return true;
}
