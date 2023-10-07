import {sectionShoppingList} from "./sectionShoppingList.js";
import {sectionCalculator, sectionCalculatorButton} from "./sectionCalculator.js";
import {sectionOptions} from "./sectionOptions.js";
import {sectionNewsletter} from "./sectionNewsletter.js";

const mainTitle = () => {
    const mainTitle = document.createElement("h2");
    mainTitle.innerText = "Calculadora de Churrasco";
    mainTitle.classList.add("card-title");
    return mainTitle;
};
const mainText = () => {
    const mainText = document.createElement("p");
    mainText.innerText = "Use o Churrascômetro para planejar o seu churrasco, e receba a lista de compras no seu e-mail.";
    mainText.classList.add("card-text");
    return mainText;
};
export const main = () => {
    const main = document.createElement("main");
    main.id = "main";
    main.classList.add("main", "card-body", "flex", "flex-column", "align-items-center", "card");
    main.appendChild(mainTitle());
    main.appendChild(mainText());
    main.appendChild(sectionNewsletter());
    main.appendChild(sectionShoppingList());
    main.appendChild(sectionCalculator());
    main.appendChild(sectionCalculatorButton());
    main.appendChild(sectionOptions());
    return main;
};
