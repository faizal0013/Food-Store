const loginAccountFrom = document.getElementById("login-account-from");

const showError = (element, massage) => {
  const div = document.createElement("div");
  div.classList.add("error");
  div.textContent = "🛈 " + massage;
  div.style.color = "red";
  element.parentNode.insertBefore(div, element.nextElementSibling);
};

const loginAccountFromCheck = (event) => {
  // !input submit color
  document.querySelectorAll(".error").forEach((element) => element.remove());

  if (!loginAccountFrom.userName.value) {
    console.log("userName is emty ");
    showError(loginAccountFrom.userName, " Enter Username");
  }

  if (!loginAccountFrom.userPassword.value) {
    console.log("userPassword is emty ");
    showError(loginAccountFrom.userPassword, "Enter Password");
  }

  if (document.querySelectorAll(".error").length >= 0) {
    event.preventDefault();
  }
};

loginAccountFrom.addEventListener("submit", loginAccountFromCheck);
