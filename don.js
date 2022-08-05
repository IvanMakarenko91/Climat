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