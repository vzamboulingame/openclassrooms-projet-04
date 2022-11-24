// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalCloseBtn = document.getElementById("modal-close-btn");
const modalForm = document.getElementById("modal-form");
const barIcon = document.getElementById("bar-icon");

// Functions
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

function testRegEx(inputId, inputName, regexPattern) {
  const inputValue = document.getElementById(inputId).value;
  const regex = new RegExp(`${regexPattern}`, "gi");
  if (regex.test(inputValue)) {
    console.log(`${inputName} value "${inputValue}" is valid`);
    return true;
  } else {
    console.log(`${inputName} value "${inputValue}" is not valid`);
    return false;
  }
}

function validateModalForm(event) {
  const firstNameIsValid = testRegEx("first", "firstName", "^.{2,}$");
  const lastNameIsValid = testRegEx("last", "lastName", "^.{2,}$");
  const emailIsValid = testRegEx(
    "email",
    "email",
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  );
  const quantityIsValid = testRegEx(
    "quantity",
    "quantity",
    "^([0-9]|([1-9][0-9]))$"
  );

  const locationIsValid = () => {
    const locations = document.getElementsByName("location");
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].checked) {
        console.log("A location has been selected");
        return true;
      }
    }
    console.log("No location has been selected");
    return false;
  };

  const checkbox1IsValid = () => {
    const checkbox1 = document.getElementById("checkbox1");
    if (checkbox1.checked) {
      console.log("Checkbox1 has been selected");
      return true;
    } else {
      console.log("Checkbox1 has not been selected");
      return false;
    }
  };

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    quantityIsValid &&
    locationIsValid() &&
    checkbox1IsValid()
  ) {
    console.log("Form inputs are valid");
    return true;
  } else {
    event.preventDefault();
    console.log("Form inputs are not valid");
    return false;
  }
}

// Event Listeners
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

modalCloseBtn.addEventListener("click", closeModal);

modalForm.addEventListener("submit", validateModalForm);

barIcon.addEventListener("click", editNav);
