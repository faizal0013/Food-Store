const createAccountFrom = document.getElementById("create-account-from");

const showError = (element, massage) => {
  const div = document.createElement("div");
  div.classList.add("error");
  div.textContent = "🛈 " + massage;
  div.style.color = "red";
  element.parentNode.insertBefore(div, element.nextElementSibling);
};

const createAccountFromCheck = (event) => {
  // !input submit color

  document.querySelectorAll(".error").forEach((element) => element.remove());

  if (!createAccountFrom.userName.value) {
    console.log("userName is emty ");
    showError(createAccountFrom.userName, "Enter Username");
  } else if (createAccountFrom.userName.value.length <= 5) {
    showError(createAccountFrom.userName, "username is less");
    console.log("userName length is less then 5 ");
  }

  if (!createAccountFrom.userPassword.value) {
    showError(createAccountFrom.userPassword, "Enter password");
    console.log("userPassword is emty ");
  } else if (createAccountFrom.userPassword.value.length <= 7) {
    showError(createAccountFrom.userPassword, "Enter password");
    console.log("userPassword length is less then 7 ");
  }

  if (!createAccountFrom.userEmail.value) {
    showError(createAccountFrom.userEmail, "Enter Email");
    console.log("userEmail is emty ");
  }

  if (!createAccountFrom.userPhoneNumber.value) {
    showError(createAccountFrom.userPhoneNumber, "Enter Phonenumber");
    console.log("userPhoneNumber is emty ");
  } else if (createAccountFrom.userPhoneNumber.value.length <= 10) {
    showError(createAccountFrom.userPhoneNumber, "phonenumber is less");
    console.log("userName length is less then 5 ");
  }

  if (document.querySelectorAll(".error").length > 0) {
    event.preventDefault();
  }
};

createAccountFrom.addEventListener("submit", createAccountFromCheck);
