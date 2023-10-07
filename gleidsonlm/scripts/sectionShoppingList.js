import {events} from "./app.js";
import {calcProteinTotal } from "./sectionCalculator.js";

const shoppingItems = () => {
    const options = document.querySelectorAll("input[type=checkbox]:checked");
    console.log(options);
}

const shoppingItemTotal = () => {
    const shoppingItemTotal = document.createElement("li");
    shoppingItemTotal.classList.add("list-group-item");
    shoppingItemTotal.innerText = "Total de carne: 0 Kg";

    document.addEventListener(events.CALCULAR, (event) => {
        const total = calcProteinTotal(event);
        shoppingItemTotal.innerText = `Total de carne: ${total} Kg`;

        const eventResponse = new CustomEvent(events.CALCULO_REALIZADO, {
            detail: { ...event.detail, total },
            bubbles: true
        });
        document.dispatchEvent(eventResponse);
    });

    return shoppingItemTotal;
};
const shoppingList = () => {
    const shoppingList = document.createElement("ul");
    shoppingList.classList.add("list-group", "list-group-flush");
    shoppingList.appendChild(shoppingItemTotal());
    return shoppingList;
};
export const sectionShoppingList = () => {
    const sectionShoppingList = document.createElement("section");
    sectionShoppingList.id = "sectionShoppingList";
    sectionShoppingList.classList.add("shopping-list", "flex", "flex-column", "align-items-center", "card", "m-2", "d-none");
    sectionShoppingList.appendChild(shoppingList());
    return sectionShoppingList;
};
