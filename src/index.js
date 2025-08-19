import './style.css';

const homebtn = document.getElementById("homebtn");
const menubtn = document.getElementById("menubtn");
const aboutbtn = document.getElementById("aboutbtn");
const main = document.getElementById("main");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const tomenu = document.getElementById("tomenu");

import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

// دالة لإظهار قسم وإخفاء الباقي
function showSection(sectionToShow) {
    const sections = [main, menu, about];
    sections.forEach(section => {
        if(section === sectionToShow) {
            section.classList.remove("hide");
        } else {
            section.classList.add("hide");
        }
    });
}

// أول مرة تظهر الهوم
loadHome();
showSection(main);

// أزرار التبديل
homebtn.addEventListener("click", () => {
    loadHome();
    showSection(main);
});

menubtn.addEventListener("click", () => {
    loadMenu();
    showSection(menu);
});

aboutbtn.addEventListener("click", () => {
    loadAbout();
    showSection(about);
});


