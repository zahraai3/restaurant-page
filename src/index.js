import './style.css';

console.log("HHIIIIIIIIIII");

const homebtn = document.getElementById("homebtn");
const menubtn = document.getElementById("menubtn");
const aboutbtn = document.getElementById("aboutbtn");
const menu = document.getElementById("menu");
const main = document.getElementById("main");
const about = document.getElementById("about");


import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

loadHome();

homebtn.addEventListener("click",()=>{
    loadHome();
    main.classList.remove("hide");
    menu.classList.add("hide");
    about.classList.add("hide"); 
});

menubtn.addEventListener("click",()=>{
    loadMenu();
    menu.classList.remove("hide");
    main.classList.add("hide");
    about.classList.add("hide"); 
});

aboutbtn.addEventListener("click",()=>{
    loadAbout();
    about.classList.remove("hide");
    main.classList.add("hide");
    menu.classList.add("hide"); 
})