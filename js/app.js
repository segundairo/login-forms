// select the form elements
const firstName = document.getElementById("firstname"),
  lastName = document.getElementById("lastname"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  password2 = document.getElementById("password2"),
  btn = document.getElementById("btn-submit"),
  form = document.getElementById("signup__form");

//show error message for invalid input
function showError(item, message) {
  const parent = item.parentElement;
  const error = parent.querySelector("small");
  error.innerText = message;
  parent.classList.add("error");
  console.log(message);
}

// show success data entry box
function showSuccess(item) {
  const parent = item.parentElement;
  parent.classList.add("success");
}

// function to get field name
function getInputName(item) {
  return item.id.charAt(0).toUpperCase() + item.id.slice(1).toLowerCase();
}

// function to check for if input values are empty
function checkEmpty(inputValues) {
  inputValues.forEach((item) => {
    if (item.value.trim() === "") {
      showError(item, `${getInputName(item)} cannot be empty or blank`);
    } else {
      showSuccess(item);
    }
  });
}

// check for valid email address
function checkEmail(item) {
  if (isEmail(item)) {
    showSuccess(item);
  } else {
    showError(item, "Looks like this is not an email");
  }
}

// regEx to check valid email address
function isEmail(item) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(item.value).toLowerCase());
}

// check if password match
function checkPassword(item1, item2) {
  if (item1.value === item2.value) {
    showSuccess(item1);
    showSuccess(item2);
  } else {
    showError(item1, "Password must match");
    showError(item2, "Passwrod must match");
  }
}

// checks the minimum lenght of an input value
function checkLength(item, lent) {
  console.log(item.value.length);
  if (item.value.length < lent) {
    showError(item, `Value must be at least ${lent} characters`);
  } else {
    showSuccess(item);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmpty([firstName, lastName, email, password, password2]);
  checkEmail(email);
  checkPassword(password, password2);
  checkLength(password, 5);
  checkLength(password2, 5);
});
