import { events } from "./app.js";
import { meatCalculator, garlicBreadCalculator, coalCalculator, saltCalculator , iceCalculator, sodaCalculator, waterCalculator, beerCalculator } from "./sectionCalculator.js";
import { deliveryAddress } from "./deliveryAddress.js";

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
    shoppingListGarlicBread.innerText = "Total de Pão de Alho: 0 unidades";

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

const shoppingListCoal = () => {
    const shoppingListCoal = document.createElement("li");
    shoppingListCoal.classList.add("list-group-item");
    shoppingListCoal.innerText = "Total de Carvão: 0 Kg";

    document.addEventListener(events.CALCULAR, (event) => {
        const coal = coalCalculator(event);
        shoppingListCoal.innerText = `Total de Carvão: ${coal.toFixed(2)} KG`;

        const eventResponse = new CustomEvent(events.CALCULO_REALIZADO, {
            detail: { ...event.detail, coal },
            bubbles: true
        });
        document.dispatchEvent(eventResponse);
    });

    return shoppingListCoal;
};

const shoppingListSalt = () => {
    const shoppingListSalt = document.createElement("li");
    shoppingListSalt.classList.add("list-group-item");
    shoppingListSalt.innerText = "Total de Sal Grosso: 0 Kg";

    document.addEventListener(events.CALCULAR, (event) => {
        const salt = saltCalculator(event);
        shoppingListSalt.innerText = `Total de Sal Grosso: ${salt.toFixed(2)} KG`;

        const eventResponse = new CustomEvent(events.CALCULO_REALIZADO, {
            detail: { ...event.detail, salt },
            bubbles: true
        });
        document.dispatchEvent(eventResponse);
    });

    return shoppingListSalt;
};

const shoppingListIce = () => {
    const shoppingListIce = document.createElement("li");
    shoppingListIce.classList.add("list-group-item");
    shoppingListIce.innerText = "Total de Gelo: 0 Kg";

    document.addEventListener(events.CALCULAR, (event) => {
        const ice = iceCalculator(event);
        shoppingListIce.innerText = `Total de Gelo: ${ice.toFixed()} KG`;

        const eventResponse = new CustomEvent(events.CALCULO_REALIZADO, {
            detail: { ...event.detail, ice },
            bubbles: true
        });
        document.dispatchEvent(eventResponse);
    });

    return shoppingListIce;
};

const shoppingListSoda = () => {
    const shoppingListSoda = document.createElement("li");
    shoppingListSoda.classList.add("list-group-item");
    shoppingListSoda.innerText = "Total de Refrigerante: 0 L";

    document.addEventListener(events.CALCULAR, (event) => {
        const soda = sodaCalculator(event);
        shoppingListSoda.innerText = `Total de Refrigerante: ${soda.toFixed()} L`;

        const eventResponse = new CustomEvent(events.CALCULO_REALIZADO, {
            detail: { ...event.detail, soda },
            bubbles: true
        });
        document.dispatchEvent(eventResponse);
    });

    return shoppingListSoda;
};

const shoppingListWater = () => {
    const shoppingListWater = document.createElement("li");
    shoppingListWater.classList.add("list-group-item");
    shoppingListWater.innerText = "Total de Água: 0 L";

    document.addEventListener(events.CALCULAR, (event) => {
        const water = waterCalculator(event);
        shoppingListWater.innerText = `Total de Água: ${water.toFixed()} L`;

        const eventResponse = new CustomEvent(events.CALCULO_REALIZADO, {
            detail: { ...event.detail, water },
            bubbles: true
        });
        document.dispatchEvent(eventResponse);
    });

    return shoppingListWater;
};

const shoppingListBeer = () => {
    const shoppingListBeer = document.createElement("li");
    shoppingListBeer.classList.add("list-group-item");
    shoppingListBeer.innerText = "Total de Cerveja: 0 Long Neck (600ml)";

    document.addEventListener(events.CALCULAR, (event) => {
        const beer = beerCalculator(event);
        shoppingListBeer.innerText = `Total de Refrigerante: ${beer.toFixed()} Long Neck (600ml)`;

        const eventResponse = new CustomEvent(events.CALCULO_REALIZADO, {
            detail: { ...event.detail, beer },
            bubbles: true
        });
        document.dispatchEvent(eventResponse);
    });

    return shoppingListBeer;
};

const shoppingListAddress = () => {
    const shoppingListAddress = document.createElement("li");
    shoppingListAddress.classList.add("list-group-item");
    shoppingListAddress.innerText = "Endereço de Entrega:";

    document.addEventListener(events.CALCULAR, (event) => {
        deliveryAddress().then((address) => {
            shoppingListAddress.innerText = `Endereço de Entrega: ${address.logradouro}, ${address.bairro}, ${address.localidade}, ${address.uf}`;
        }).catch((error) => {
            shoppingListAddress.innerText = `Endereço de Entrega: ${error}`;
        });
    });

    return shoppingListAddress;
};
    
const shoppingList = () => {
    const shoppingList = document.createElement("ul");
    shoppingList.classList.add("list-group", "list-group-flush");
    shoppingList.appendChild(shoppingListMeat());
    shoppingList.appendChild(shoppingListGarlicBread());
    shoppingList.appendChild(shoppingListCoal());
    shoppingList.appendChild(shoppingListSalt());
    shoppingList.appendChild(shoppingListIce());
    shoppingList.appendChild(shoppingListSoda());
    shoppingList.appendChild(shoppingListWater());
    shoppingList.appendChild(shoppingListBeer());
    shoppingList.appendChild(shoppingListAddress());

    return shoppingList;
};

const shoppingListReload = () => {
    const buttonReload = document.createElement("button");
    buttonReload.classList.add("btn", "btn-primary", "m-2");
    buttonReload.innerText = "Calcular Novamente";
    buttonReload.addEventListener("click", () => {
        window.location.reload();
    });

    return buttonReload;
}

export const sectionShoppingList = () => {
    const sectionShoppingList = document.createElement("section");
    sectionShoppingList.id = "shopping-list";
    sectionShoppingList.classList.add("flex", "flex-column", "align-items-center", "card", "m-2");
    sectionShoppingList.classList.add("d-none");
    sectionShoppingList.appendChild(shoppingList());
    sectionShoppingList.appendChild(shoppingListReload());
    
    return sectionShoppingList;
};
