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
function validate(e) {
  e.preventDefault();
  if (firstName.value === "" || firstName.value.length < 3) {
    document.getElementById("text-control_error_first").innerHTML =
      "Veuillez remplir ce champs d'au moins 3 caractères";
  } 
  else {
    document.getElementById("text-control_error_first").innerHTML = "";
  }
  if (lastName.value === "" || lastName.value.length < 3) {
    document.getElementById("text-control_error_last").innerHTML =
      "Veuillez remplir ce champs d'au moins 3 caractères";
  } 
  else {
    document.getElementById("text-control_error_last").innerHTML = "";
  }
}

// form label
