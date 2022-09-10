var barButton = document.querySelector(".fa-bars");
var sideNav = document.querySelector('.sideContainer')
var navBar = document.querySelector('nav'); 
var xButton = document.querySelector('.x');
barButton.addEventListener("click", activeSideNav );
xButton.addEventListener('click', closeSideNav);


function show (element) {
    element.style.display = "flex";
}

function hide (element) {
    element.style.display = "none";
}

function activeSideNav (){
    show(sideNav);
}

function closeSideNav() {
hide(sideNav);
}