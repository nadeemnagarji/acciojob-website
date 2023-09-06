const nav_header = document.getElementById('header')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

const toggleNavbar = () =>{
    nav_header.classList.toggle('active')
}

navToggle.addEventListener("click" ,() => toggleNavbar());