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


// Button color

const button = Array.from(document.querySelectorAll(".button-color")); 
let prix1 = document.querySelector("#prix1");
let prix2 = document.querySelector("#prix2");

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
  },
]

let fleche = button.length;

function afficherPrix() {
  for(let i = 0; i < fleche - 6; i++) {
    button[i].addEventListener('click', () => {
      prix1.style.color = '#00cd00';
      prix1.innerText = `Vous ne payez que ${(testons[i].message / 3).toFixed(2)}€ à la place de ${testons[i].message}€ après déduction.`;
      prix2.innerHTML = "";
    })
  }
  for(let j = 6; j < fleche; j++) {
    button[j].addEventListener('click', () => {
      prix2.style.color = '#00cd00';
      prix2.innerText = `Vous ne payez que ${(testons[j].message / 3).toFixed(2)}€ à la place de ${testons[j].message}€ après déduction.`;
      prix1.innerHTML = "";
    })
  }
}

afficherPrix();


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