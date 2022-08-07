// Menu boutton toggle
var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");

toggle_menu.addEventListener('click', () => {
  toggle_menu.classList.toggle('active') ;
  menu.classList.toggle('responsive') ;
})



// Onglet

const onglets = Array.from(document.querySelectorAll(".onglets")); // La méthode Array.from() permet de créer une nouvelle instance d'Array (une copie superficielle) à partir d'un objet itérable ou semblable à un tableau.
const contenu = Array.from(document.querySelectorAll(".contenu"));


onglets.forEach(onglet => {
  onglet.addEventListener("click", tabsAnimation)
})

let index = 0;

function tabsAnimation(e){

    const el = e.target;
    
    onglets[index].classList.remove("activer");
    contenu[index].classList.remove("activer-contenu");
    
    index = onglets.indexOf(el);
    
    onglets[index].classList.add("activer")
    contenu[index].classList.add("activer-contenu");
    
}

const payar = Array.from(document.querySelectorAll(".paiement")); // La méthode Array.from() permet de créer une nouvelle instance d'Array (une copie superficielle) à partir d'un objet itérable ou semblable à un tableau.
const reglementation = Array.from(document.querySelectorAll(".mon-reglement"));


payar.forEach(payars => {
  payars.addEventListener("click", payarAnimation)
})

let payer = 0;

function payarAnimation(e){

    const el = e.target;
    
    payar[payer].classList.remove("paiement-activer");
    reglementation[payer].classList.remove("mon-reglement-activer");
    
    payer = payar.indexOf(el);
    
    payar[payer].classList.add("paiement-activer")
    reglementation[payer].classList.add("mon-reglement-activer");
    
}


// Afficher le prix au clic et input

const button = Array.from(document.querySelectorAll(".button-color")); 
let prix1 = document.querySelector("#prix1");
let prix2 = document.querySelector("#prix2");
let libres = document.getElementById('recherches');
let libre = document.getElementById('recherche');

let testons = [
  {
    message: 50
  },
  {
    message: 90
  },
  {
    message: 100
  },
  {
    message: 150
  },
  {
    message: 200
  },
  {
    message: 500
  },
  {
    message: 10
  },
  {
    message: 20
  },
  {
    message: 30
  },
  {
    message: 50
  },
  {
    message: 75
  },
  {
    message: 100
  }
]

let fleche = button.length;

function afficherPrix() {
  for(let i = 0; i < fleche - 6; i++) {
    button[i].addEventListener('click', () => {
      prix1.style.color = '#00cd00';
      prix1.innerText = `Vous ne payez que ${(testons[i].message / 3).toFixed(2)}€ à la place de ${testons[i].message}€ après déduction.`;
      prix2.innerHTML = "";
      libre.value = "";
    })
    libre.addEventListener('input', () => {
      prix1.style.color = '#00cd00';
      button[i].classList.remove("button-active");
      prix1.innerText = `Vous ne payez que ${(libre.value / 3).toFixed(2)}€ à la place de ${libre.value}€ après déduction.`;
      prix2.innerHTML = "";
      libres.value = "";
      if(!Number(libre.value)) {
        prix1.innerText = "Sélectionnez ou saisissez un montant."
      }
    })
  }
  for(let j = 6; j < fleche; j++) {
    button[j].addEventListener('click', () => {
      prix2.style.color = '#00cd00';
      prix2.innerText = `Vous ne payez que ${(testons[j].message / 3).toFixed(2)}€ à la place de ${testons[j].message}€ après déduction.`;
      prix1.innerHTML = "";
      libres.value = "";
    })
    libres.addEventListener('input', () => {
      prix2.style.color = '#00cd00';
      button[j].classList.remove("button-active");
      prix2.innerText = `Vous ne payez que ${(libres.value / 3).toFixed(2)}€ à la place de ${libres.value}€ après déduction.`;
      prix1.innerHTML = "";
      libre.value = "";
      if(!Number(libres.value)) {
        prix2.innerText = "Sélectionnez ou saisissez un montant."
      }
    })
  }
}

afficherPrix();



// Afficher la couleur du boutton 

button.forEach(buttons => {
   buttons.addEventListener("click", buttonAnimation)
})

let nb = 1;

function buttonAnimation(e){
    const el = e.target;
    button[nb].classList.remove("button-active");
    nb = button.indexOf(el);
    button[nb].classList.add("button-active");
}


// Déclaration du formulaire
(function() { 
  'use strict'
  let form = document.getElementById('formulaire'); 
  let plateforme = document.getElementById('plateforme');
  form.addEventListener('submit', function(event) {
      
      Array.from(form.elements).forEach((input) => { 
          if (input.type !== "submit") { 
              if (!validateFields(input) & (prix1.value || prix2.value !== "")) { 
                  
                  event.preventDefault();
                  event.stopPropagation();
                  
                  input.classList.remove("is-valid"); 
                  input.classList.add("is-invalid");
                  // input.nextElementSibling.style.display = 'block';
                  plateforme.style.display = 'none';
              } 
              else {
                  input.nextElementSibling.style.display = 'none';
                  input.classList.remove("is-invalid"); 
                  input.classList.add("is-valid"); 
              }
          }
      });
  }, false)
})()






// Création des fonctions de verefications

// Validation d'un champ REQUIRED
function validateRequired(input) {
  return !(input.value == null || input.value == "");
}

// Validation des caractères : LATIN & LETTRES
function validateText(input) {
  return input.value.match("^[A-Za-z]+$");
}

// Validation de la CB
function validateCB(input) {
  return input.value.match("^[0-9]{16}$");
}

// Validation de l' expiration
function validateExpiration(input) {
  return input.value.match("(?:0[1-9]|1[0-2])/[0-9]{2}");
}

// Validation de CVC
function validateCvc(input) {
  return input.value.match("^[0-9]{3,4}");
}

// Validation du nombre de caractéres : MIN & MAX
function validateLenght(input, minLength, maxLength) {
    return !(input.value.length < minLength || input.value.length > maxLength);
}

// Validation d'un e-mail
function validateEmail(input) {
  let EMAIL = input.value;
  let POSAT = EMAIL.indexOf("@");
  let POSDOT = EMAIL.lastIndexOf(".");
  return !(POSAT < 1 || (POSDOT - POSAT < 2));
}




// Validation des champs de formulaires

function validateFields(input) {
  let fieldName = input.name;
  // Validaton de l'input PRENOM
  if (fieldName == "firstName") {
      if (!validateRequired(input)) {
          return false;
      }
      if (!validateLenght(input, 2, 20)) {
          return false;
      }
      if (!validateText(input)) {
          return false;
      }
      return (true);
  }

  // Validaton de l'input CB
  if (fieldName == "cb") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateCB(input)) {
        return false;
    }
    return (true);
  }

  // Validaton de l'expiration CB
  if (fieldName == "expiration") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateExpiration(input)) {
        return false;
    }
    return (true);
  }

  // Validaton du CVC
  if (fieldName == "cvc") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateCvc(input)) {
        return false;
    }
    return (true);
  }

  // Validaton de l'input NOM
  if (fieldName == "lastName") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateLenght(input, 2, 20)) {
        return false;
    }
    if (!validateText(input)) {
        return false;
    }
    return (true);
  }

  // Validaton de l'input EMAIL
  if (fieldName == "email") {
    if (!validateRequired(input)) {
        return false;
    }
    if (!validateEmail(input)) {
        return false;
    }
    return (true);
  }

  // Validaton de l'input Civilité
  if (fieldName == "civilite") {
    if (!validateRequired(input)) {
        return false;
    }
    return (true);
  }
}
