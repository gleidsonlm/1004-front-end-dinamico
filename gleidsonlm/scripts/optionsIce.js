import { events } from "./app.js";

const optionsIceInput = () => {
    const optionsIceInput = document.createElement("input");
    optionsIceInput.classList.add("form-check-input");
    optionsIceInput.id = "ice";
    optionsIceInput.type = "checkbox";
    optionsIceInput.name = "ice";
    optionsIceInput.checked = true;
    optionsIceInput.addEventListener("click", () => {
        const event = new CustomEvent(events.OPCAO_ATUALIZADA, {
            detail: {
                name: optionsIceInput.name,
                checked: optionsIceInput.checked,
            }, bubbles: true
        });
        document.dispatchEvent(event);
    });

    return optionsIceInput;
};
const optionsIceLabel = () => {
    const optionsIceLabel = document.createElement("label");
    optionsIceLabel.innerText = "Gelo KG";
    optionsIceLabel.classList.add("form-check-label");
    optionsIceLabel.for = "ice";
    return optionsIceLabel;
};
export const optionsIce = () => {
    const optionsIce = document.createElement("div");
    optionsIce.classList.add("form-check", "form-check-inline", "form-switch", "m-1");
    optionsIce.appendChild(optionsIceInput());
    optionsIce.appendChild(optionsIceLabel());
    return optionsIce;
};
