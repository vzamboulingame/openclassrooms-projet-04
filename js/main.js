// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
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

function testRegEx(inputId, regexPattern) {
  const inputValue = document.getElementById(inputId).value;
  const regex = new RegExp(`${regexPattern}`, "gi");
  return regex.test(inputValue);
}

function validateModalForm(event) {
  const firstNameIsValid = testRegEx("first", "^.{2,}$");
  const lastNameIsValid = testRegEx("last", "^.{2,}$");
  const emailIsValid = testRegEx(
    "email",
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  );
  const quantityIsValid = testRegEx("quantity", "^([0-9]|([1-9][0-9]))$");

  const locationIsValid = () => {
    const locations = document.getElementsByName("location");
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].checked) {
        return true;
      }
    }
    return false;
  };

  const checkbox1IsValid = () => {
    const checkbox1 = document.getElementById("checkbox1");
    return checkbox1.checked;
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
