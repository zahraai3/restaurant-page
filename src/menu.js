import risottoImg from "./images/risotto.jpg";
import steakImg from "./images/Tagliata-steak.jpg";
import gamberiImg from "./images/Gamberi.jpg";
import pizzaImg from "./images/pizza.jpg";
import tagliatelleImg from "./images/Tagliatelle.jpg";
import tiramisuImg from "./images/Tiramisu.jpg";


export function loadMenu(){
    const menuContent = document.getElementById("menu");
    menuContent.innerHTML=`

        <h1 id="h1menu">MENU</h1>

    <div id="container">
        <div class="wrapper">
            <div class="card">
                <div class="front-page">
                    <img src="${risottoImg}">
                    <div class="card-info">
                        <h2 class="card-title">Risotto al Tartufo</h2>
                        <p class="card-subtitle">$22</p>
                    </div>
                </div>

                <div class="back-page">
                    <div class="card-content">
                        <h3></h3>
                        <p class="card-description">Creamy risotto with black truffle and Parmesan cheese shavings.</p>
                        <button class="card-button">Add to Order</button>
                    </div class="card-content">
                </div>
            </div>
        </div>

        <div class="wrapper">
            <div class="card">
                <div class="front-page">
                    <img src="${steakImg}">
                    <div class="card-info">
                        <h2 class="card-title">Tagliata di Manzo</h2>
                        <p class="card-subtitle">$28</p>
                    </div>
                </div>

                <div class="back-page">
                    <div class="card-content">
                        <h3></h3>
                        <p class="card-description">Grilled beef slices with rosemary sauce and roasted potatoes.</p>
                        <button class="card-button">Add to Order</button>
                    </div class="card-content">
                </div>
            </div>
        </div>

        <div class="wrapper">
            <div class="card">
                <div class="front-page">
                    <img src="${gamberiImg}">
                    <div class="card-info">
                        <h2 class="card-title">Gamberi alla Griglia</h2>
                        <p class="card-subtitle">$24</p>
                    </div>
                </div>

                <div class="back-page">
                    <div class="card-content">
                        <h3></h3>
                        <p class="card-description">Grilled prawns with lemon-garlic sauce, served with green salad.</p>
                        <button class="card-button">Add to Order</button>
                    </div class="card-content">
                </div>
            </div>
        </div>


        <div class="wrapper">
            <div class="card">
                <div class="front-page">
                    <img src="${pizzaImg}">
                    <div class="card-info">
                        <h2 class="card-title">Pizza Bianca</h2>
                        <p class="card-subtitle">$18</p>
                    </div>
                </div>

                <div class="back-page">
                    <div class="card-content">
                        <h3></h3>
                        <p class="card-description">White pizza with Italian ham slices and fresh mozzarella.</p>
                        <button class="card-button">Add to Order</button>
                    </div class="card-content">
                </div>
            </div>
        </div>


        <div class="wrapper">
            <div class="card">
                <div class="front-page">
                    <img src="${tagliatelleImg}">
                    <div class="card-info">
                        <h2 class="card-title">Tagliatelle al Salmone</h2>
                        <p class="card-subtitle">$24</p>
                    </div>
                </div>

                <div class="back-page">
                    <div class="card-content">
                        <h3></h3>
                        <p class="card-description">Fresh tagliatelle with smoked cream sauce and smoked salmon pieces.</p>
                        <button class="card-button">Add to Order</button>
                    </div class="card-content">
                </div>
            </div>
        </div>


        <div class="wrapper">
            <div class="card">
                <div class="front-page">
                    <img src="${tiramisuImg}">
                    <div class="card-info">
                        <h2 class="card-title">Tiramisu Classico</h2>
                        <p class="card-subtitle">$29</p>
                    </div>
                </div>

                <div class="back-page">
                    <div class="card-content">
                        <h3></h3>
                        <p class="card-description">Authentic Italian tiramisu with espresso coffee and cocoa powder.</p>
                        <button class="card-button">Add to Order</button>
                    </div class="card-content">
                </div>
            </div>
        </div>
    </div>
    `;
}



