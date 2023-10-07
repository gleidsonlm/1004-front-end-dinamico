import { events } from "./app.js";

const optionsWaterInput = () => {
    const optionsWaterInput = document.createElement("input");
    optionsWaterInput.classList.add("form-check-input");
    optionsWaterInput.id = "water";
    optionsWaterInput.type = "checkbox";
    optionsWaterInput.name = "water";
    optionsWaterInput.checked = true;
    optionsWaterInput.setAttribute('disabled', '')
    optionsWaterInput.addEventListener("click", () => {
        const event = new CustomEvent(events.OPCAO_ATUALIZADA, {
            detail: {
                name: optionsWaterInput.name,
                checked: optionsWaterInput.checked,
            }, bubbles: true
        });
        document.dispatchEvent(event);
    });

    return optionsWaterInput;
};
const optionsWaterLabel = () => {
    const optionsWaterLabel = document.createElement("label");
    optionsWaterLabel.innerText = "Água 1L";
    optionsWaterLabel.classList.add("form-check-label");
    optionsWaterLabel.for = "water";
    return optionsWaterLabel;
};
export const optionsWater = () => {
    const optionsWater = document.createElement("div");
    optionsWater.classList.add("form-check", "form-check-inline", "form-switch", "m-1");
    optionsWater.appendChild(optionsWaterInput());
    optionsWater.appendChild(optionsWaterLabel());
    return optionsWater;
};
