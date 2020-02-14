
const mobileMenu = document.querySelector('.navigation__navmenu-wrapper');
const hamburger = document.querySelector('.hamburger');

function toggleMenu(visible){
document.querySelector('.menu')classList.toggle('show', visible);
};

hamburger.addEventListener('click', function(){
    event.preventDefault();
   mobileMenu.ClassList.toggle('.active')
});

