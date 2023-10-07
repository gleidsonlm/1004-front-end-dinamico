import { events } from "./app.js";
import { meatCalculator, garlicBreadCalculator } from "./sectionCalculator.js";

const shoppingListMeat = () => {
    const shoppingListMeat = document.createElement("li");
    shoppingListMeat.classList.add("list-group-item");
    shoppingListMeat.innerText = "Total de Carne: 0 Kg";

    document.addEventListener(events.CALCULAR, (event) => {
        const meat = meatCalculator(event);
        shoppingListMeat.innerText = `Total de Carne: ${meat.toFixed(2)} Kg`;

        const eventResponse = new CustomEvent(events.CALCULO_REALIZADO, {
            detail: { ...event.detail, meat },
            bubbles: true
        });
        document.dispatchEvent(eventResponse);
    });

    return shoppingListMeat;
};

const shoppingListGarlicBread = () => {
    const shoppingListGarlicBread = document.createElement("li");
    shoppingListGarlicBread.classList.add("list-group-item");
    shoppingListGarlicBread.innerText = "Total de Pão de Alho: 0 Kg";

    document.addEventListener(events.CALCULAR, (event) => {
        const garlicBread = garlicBreadCalculator(event);
        shoppingListGarlicBread.innerText = `Total de Pão de Alho: ${garlicBread.toFixed()} unidades`;

        const eventResponse = new CustomEvent(events.CALCULO_REALIZADO, {
            detail: { ...event.detail, garlicBread },
            bubbles: true
        });
        document.dispatchEvent(eventResponse);
    });

    return shoppingListGarlicBread;
};



const shoppingList = () => {
    const shoppingList = document.createElement("ul");
    shoppingList.classList.add("list-group", "list-group-flush");
    shoppingList.appendChild(shoppingListMeat());
    shoppingList.appendChild(shoppingListGarlicBread());
    return shoppingList;
};

export const sectionShoppingList = () => {
    const sectionShoppingList = document.createElement("section");
    sectionShoppingList.id = "shopping-list";
    sectionShoppingList.classList.add("flex", "flex-column", "align-items-center", "card", "m-2", "d-none");
    sectionShoppingList.appendChild(shoppingList());
    return sectionShoppingList;
};
