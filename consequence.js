// Menu boutton toggle
var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");

toggle_menu.addEventListener('click', () => {
  toggle_menu.classList.toggle('active') ;
  menu.classList.toggle('responsive') ;
})

// Reponse apparition

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

const response = document.getElementById("reponse");
const response2 = document.getElementById("reponse2");

let red = () => {
  response.classList.add('show-response');
  response.style.background = "red";
}

btn1.addEventListener("click", () => {
  red();
  setTimeout(() => { 
    response2.classList.add('show-response');
  },1200);
})

btn2.addEventListener("click", () => {
  response.classList.add('show-response');
  response.style.background = "green";
  setTimeout(() => { 
    response2.classList.add('show-response');
  },1200);
})

btn3.addEventListener("click", () => {
  red();
  setTimeout(() => { 
    response2.classList.add('show-response');
  },1200);
})