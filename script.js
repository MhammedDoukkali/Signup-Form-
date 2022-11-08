const form = document.querySelector("#form");

let checkTheTerms = document.getElementById("agree");

const password = document.getElementById("pass");

const redbox = document.getElementById("pass");

const confirmPassword = document.getElementById("confirm");

const focusConfirmPass = document.getElementById("confirm");

const checkPass = false;

const passwordVerification = (event) => {
  // if the check terms is
  if (checkTheTerms.checked == false) {
    event.preventDefault();
    let error = document.querySelector(".message");

    alert("Need to agree to the terms.");

    return;
  }
  if (redbox.value.length < 10) {
    event.preventDefault();
    redbox.focus();

    let passwordErrorBox = document.querySelector(".password-errorbox");
    passwordErrorBox.innerText =
      "Your password is too short! Please provide a password that is at least 10 characters long.";
    passwordErrorBox.classList.add("pinkbox");

    return;
  } else if (redbox.value !== confirmPassword.value) {
    event.preventDefault();
    focusConfirmPass.focus();
    let messageConfirmPassword = document.querySelector(".confirm-pass");
    messageConfirmPassword.innerText = "The password don't match";
    messageConfirmPassword.classList.add("pinkbox");
    return;
  }
};

form.addEventListener("submit", passwordVerification);
