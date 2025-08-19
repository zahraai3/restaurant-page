
export function loadHome() {
    
    const content = document.getElementById("main");
        content.innerHTML = `
        <div id="homeinfo">
             <h1 id="h1main">Bellavista</h1>
             <p id="pmain">At Bellavista, we transform dining into a full sensory experience. Using the finest Italian ingredients with contemporary touches, we create dishes that delight the senses. Whether it’s a romantic dinner, business meeting, or a moment to relax, our warm and elegant atmosphere ensures every visit feels special.</p>
             <button  id="tomenu">GO TO MENU</button>
             </div>`;

             
    // هنا نضيف الـ listener للزر بعد إضافته
    const tomenu = document.getElementById("tomenu");
    tomenu.addEventListener("click", () => {
        // هذا نفس اللي بصير لما تضغطين على menubtn
        const menu = document.getElementById("menu");
        const main = document.getElementById("main");
        const about = document.getElementById("about");

        // استدعاء loadMenu إذا عندك
        import("./menu.js").then(module => {
            module.loadMenu();
        });

        // إظهار menu وإخفاء الباقي
        main.classList.add("hide");
        menu.classList.remove("hide");
        about.classList.add("hide");
    });
}


                