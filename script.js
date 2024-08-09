const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 0);
});

const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('.nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x'); // Assuming 'bx-x' is the class for the closed state
  nav.classList.toggle('open');
});

