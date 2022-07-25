// Menu boutton toggle
var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");

toggle_menu.addEventListener('click', () => {
  toggle_menu.classList.toggle('active') ;
  menu.classList.toggle('responsive') ;
})


// Slider
let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nbr__img = img__slider.length;

function enleverActiveImages() {
  for(let i = 0; i < nbr__img; i++) {
    img__slider[i].classList.remove('activer');
  }
}

setInterval(function () {
  etape ++;
  if(etape >= nbr__img) {
    etape = 0;
  }
  enleverActiveImages();
  img__slider[etape].classList.add('activer');
}, 7000)