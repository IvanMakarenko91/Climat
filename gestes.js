// Menu boutton toggle
var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");

toggle_menu.addEventListener('click', () => {
  toggle_menu.classList.toggle('active') ;
  menu.classList.toggle('responsive') ;
})


// Slide Toggle Down

var quoteContainer = document.querySelectorAll(".quote-container");
var down = document.getElementsByClassName("arrowIcon");
var appart = document.querySelectorAll(".appart");

let fleche = quoteContainer.length;

function enleverActiveImages() {
  for(let i = 0; i < fleche; i++) {
    quoteContainer[i].addEventListener('click', () => {
      down[i].classList.toggle("rotate");
      appart[i].classList.toggle("apparition");
    })
  }
}

enleverActiveImages();
