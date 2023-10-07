import { events } from "./app.js";

const optionsMeatInput = () => {
    const optionMeatInput = document.createElement("input");
    optionMeatInput.classList.add("form-check-input");
    optionMeatInput.id = "carne";
    optionMeatInput.type = "checkbox";
    optionMeatInput.name = "carne";
    optionMeatInput.checked = true;
    optionMeatInput.setAttribute('disabled', '')
    optionMeatInput.addEventListener("click", () => {
        const event = new CustomEvent(events.OPCAO_ATUALIZADA, {
            detail: {
                name: optionMeatInput.name,
                checked: optionMeatInput.checked,
            }, bubbles: true
        });
        document.dispatchEvent(event);
    });

    return optionMeatInput;
};
const optionsMeatLabel = () => {
    const optionMeatLabel = document.createElement("label");
    optionMeatLabel.classList.add("form-check-label");
    optionMeatLabel.innerText = "Carne";
    optionMeatLabel.for = "carne";
    return optionMeatLabel;
};
export const optionsMeat = () => {
    const optionMeat = document.createElement("div");
    optionMeat.classList.add("form-check","form-check-inline", "form-switch", "m-1");
    optionMeat.appendChild(optionsMeatInput());
    optionMeat.appendChild(optionsMeatLabel());
    return optionMeat;
};
