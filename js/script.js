let dark = document.getElementById('dark');
dark.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
})

let menubutoon = document.getElementById('menubutoon');
let menuslide = document.getElementById('menuslide');
let closemenu = document.getElementById('close');
menubutoon.addEventListener('click',()=>{
    menuslide.setAttribute("style","display: block");
})
closemenu.addEventListener('click',()=>{
    menuslide.setAttribute("style","display: none");
})




