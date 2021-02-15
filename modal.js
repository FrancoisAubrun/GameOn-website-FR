function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close");
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity");
const loc1 = document.getElementById("location1");
const loc2 = document.getElementById("location2");
const loc3 = document.getElementById("location3");
const loc4 = document.getElementById("location4");
const loc5 = document.getElementById("location5");
const loc6 = document.getElementById("location6");
const bgroundAlert = document.querySelector(".bground_alert");
const btnSubmit = document.querySelector(".btn-submit");
document.getElementById("close_alert").addEventListener("click", function () {
  bgroundAlert.style.display = "none";
});


/* EVENTS */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach((elt) => elt.addEventListener("click", closeModal));

/* FORM */

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

//validate form

let expressionMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validate(event) {
  event.preventDefault();
  let validationCount = 0;

  if (firstName.value === "" || firstName.value.length < 2) {
    document.getElementById("text-control_error_first").innerHTML =
      "Veuillez remplir ce champs d'au moins 2 caractères";
  } else {
    document.getElementById("text-control_error_first").innerHTML = "";
    validationCount++;
  }
  if (lastName.value === "" || lastName.value.length < 2) {
    document.getElementById("text-control_error_last").innerHTML =
      "Veuillez remplir ce champs d'au moins 2 caractères";
  } else {
    document.getElementById("text-control_error_last").innerHTML = "";
    validationCount++;
  }
  if (!eMail.value.match(expressionMail)) {
    document.getElementById("text-control_error_mail").innerHTML =
      "Veuillez remplir ce champs avec une adresse mail valide";
  } else {
    document.getElementById("text-control_error_mail").innerHTML = "";
    validationCount++;
  }

  const dif = new Date().getTime() - new Date(birthDate.value).getTime();

  if (birthDate.value.length === 0) {
    document.getElementById("text-control_error_birthdate").innerHTML =
      "Veuillez remplir ce champs avec votre date de naissance";
      
  } else if (dif < 0) {
    document.getElementById("text-control_error_birthdate").innerHTML =
      "Veuillez remplir une date antérieure à la date du jour";
  } else {
    document.getElementById("text-control_error_birthdate").innerHTML = "";
    validationCount++;
  }

  if (quantityTournament.value === "") {
    document.getElementById("text-control_error_quantity").innerHTML =
      "Veuillez remplir ce champs d'un nombre supérieure ou égale à 0";
  } else {
    document.getElementById("text-control_error_quantity").innerHTML = "";
    validationCount++;
  }

  if (
    !loc1.checked &&
    !loc2.checked &&
    !loc3.checked &&
    !loc4.checked &&
    !loc5.checked &&
    !loc6.checked
  ) {
    document.getElementById("text-control_error_checked").innerHTML =
      "Veuillez choisir l'une de ces villes";
  } else {
    document.getElementById("text-control_error_checked").innerHTML = "";
    validationCount++;
  }

  if (!checkbox1.checked) {
    document.getElementById("text-control_error_checked1").innerHTML =
      "Veuillez accepter les conditions d'utilisation avant soumission du formulaire";
  } else {
    document.getElementById("text-control_error_checked1").innerHTML = "";
    validationCount++;
  }

  if (validationCount === 7) {
    // launch alert
    launchAlert();
  }
}

function launchAlert() {
  closeModal();
  bgroundAlert.style.display = "block";
}
