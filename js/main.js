/*****************************************
 * VARIABLES
 *****************************************/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalForm = document.getElementById("modal-form");
const barIcon = document.getElementById("bar-icon");

/*****************************************
 * FUNCTIONS
 *****************************************/
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

function customizeInputErrorMessage() {
  const inputs = [
    {
      id: "first",
      errormsg: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
    },
    {
      id: "last",
      errormsg: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
    },
    {
      id: "email",
      errormsg: "Veuillez saisir une adresse email valide.",
    },
    {
      id: "birthdate",
      errormsg: "Veuillez indiquer une date de naissance valide.",
    },
    {
      id: "quantity",
      errormsg: "Veuillez indiquer une valeur entre 0 et 99.",
    },
  ];

  inputs.forEach((input) => {
    const inputEl = document.getElementById(`${input.id}`);

    inputEl.addEventListener("input", () => {
      inputEl.setCustomValidity("");
      inputEl.checkValidity();
    });

    inputEl.addEventListener("invalid", () => {
      if (inputEl.value === "") {
        inputEl.setCustomValidity("La saisie de ce champ est obligatoire.");
      } else {
        inputEl.setCustomValidity(`${input.errormsg}`);
      }
    });
  });
}

function validateModalForm(event) {
  const firstNameIsValid = document.getElementById("first").checkValidity();
  const lastNameIsValid = document.getElementById("last").checkValidity();
  const emailIsValid = document.getElementById("email").checkValidity();
  const birthDateIsValid = document.getElementById("birthdate").checkValidity();
  const quantityIsValid = document.getElementById("quantity").checkValidity();
  const locationIsValid = document
    .querySelectorAll('input[name="location"]')
    .checkValidity();
  const checkbox1IsValid = document.getElementById("checkbox1").checkValidity();

  // Checks if all inputs are valid on form submit
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    birthDateIsValid &&
    quantityIsValid &&
    locationIsValid &&
    checkbox1IsValid
  ) {
    window.alert("Formulaire validé.");
  } else {
    event.preventDefault();
  }
}

/*****************************************
 * MAIN PROGRAM
 *****************************************/

customizeInputErrorMessage();

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

modalCloseBtn.addEventListener("click", closeModal);

modalForm.addEventListener("submit", validateModalForm);

barIcon.addEventListener("click", editNav);
