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
    {
      id: "location",
      errormsg: "Veuillez choisir une localisation de tournoi.",
    },
    {
      id: "conditions",
      errormsg: "Veuillez accepter les conditions afin de poursuivre.",
    },
  ];

  inputs.forEach((input) => {
    let inputEl;

    if (input.id === "location") {
      inputEl = document.querySelector('input[type="radio"]');
    } else {
      inputEl = document.getElementById(`${input.id}`);
    }

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
  if (modalForm.checkValidity()) {
    console.log("Formulaire validé");
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
