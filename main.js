const form = document.getElementById("form");

const email = document.getElementById("mail");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  if (
    !checkEmailValue() ||
    !checkCountryValue() ||
    !checkZipcodeValue() ||
    !checkPasswordValue() ||
    !checkPassword2Value()
  ) {
    e.preventDefault();
  } else {
    form.submit();
    alert("Form submitted!");
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

// Validate email input
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

function checkEmailValue() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required.");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Entered value needs to be an email address.");
  } else if (emailValue.length < 8) {
    setError(email, "Email should be at least 8 characters.");
  } else {
    setSuccess(email);
    return true;
  }
}

email.addEventListener("input", (e) => {
  checkEmailValue();
});

// Validate country input
const isValidCountry = (country) => {
  const re = /^[a-zA-Z][^0-9~`!@#$%^()_={}[\]:;,<>+\/?]+$/;
  return re.test(String(country));
};

function checkCountryValue() {
  const countryValue = country.value.trim();

  if (countryValue === "") {
    setError(country, "Country is required.");
  } else if (!isValidCountry(countryValue)) {
    setError(country, "Entered value needs to be a country.");
  } else {
    setSuccess(country);
    return true;
  }
}

country.addEventListener("input", (e) => {
  checkCountryValue();
});

// Validate zipcode input
const isValidZipcode = (zipcode) => {
  const re = /[\d]{5,}/;
  return re.test(String(zipcode));
};

function checkZipcodeValue() {
  const zipcodeValue = zipcode.value.trim();

  if (zipcodeValue === "") {
    setError(zipcode, "Zipcode is required.");
  } else if (!isValidZipcode(zipcodeValue)) {
    setError(zipcode, "Entered value needs to be a zipcode.");
  } else {
    setSuccess(zipcode);
    return true;
  }
}

zipcode.addEventListener("input", (e) => {
  checkZipcodeValue();
});

// Validate password input
// Make sure password contains at least one digit, one lower case, one upper case, at least 8 characters.
const isValidPassword = (password) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return re.test(String(password));
};

function checkPasswordValue() {
  const passwordValue = password.value.trim();

  if (passwordValue === "") {
    setError(password, "Password is required.");
  } else if (!isValidPassword(passwordValue)) {
    setError(
      password,
      "Password must contain at least one digit, one uppercase and lowercase letter, and be at least 8 characters in length."
    );
  } else {
    setSuccess(password);
    return true;
  }
}

password.addEventListener("input", (e) => {
  checkPasswordValue();
});

// Validate password confirmation input
function checkPassword2Value() {
  const password2Value = password2.value.trim();
  const passwordValue = password.value.trim();

  if (password2Value === "") {
    setError(password2, "Confirmation required.");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords don't match.");
  } else if (password2Value === passwordValue) {
    setSuccess(password2);
    return true;
  }
}

password2.addEventListener("input", (e) => {
  checkPassword2Value();
});
