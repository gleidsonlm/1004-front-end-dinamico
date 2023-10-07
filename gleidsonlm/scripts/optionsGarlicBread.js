import { events } from "./app.js";

const optionsGarlicBreadInput = () => {
    const optionsGarlicBreadInput = document.createElement("input");
    optionsGarlicBreadInput.classList.add("form-check-input");
    optionsGarlicBreadInput.id = "garlic-bread";
    optionsGarlicBreadInput.type = "checkbox";
    optionsGarlicBreadInput.name = "garlic-bread";
    optionsGarlicBreadInput.checked = true;
    optionsGarlicBreadInput.addEventListener("click", () => {
        const event = new CustomEvent(events.OPCAO_ATUALIZADA, {
            detail: {
                name: optionsGarlicBreadInput.name,
                checked: optionsGarlicBreadInput.checked,
            }, bubbles: true
        });
        document.dispatchEvent(event);
    });

    return optionsGarlicBreadInput;
};
const optionsGarlicBreadLabel = () => {
    const optionsGarlicBreadLabel = document.createElement("label");
    optionsGarlicBreadLabel.innerText = "Pão de Alho";
    optionsGarlicBreadLabel.classList.add("form-check-label");
    optionsGarlicBreadLabel.for = "garlic-bread";
    return optionsGarlicBreadLabel;
};
export const optionsGarlicBread = () => {
    const optionFraldinha = document.createElement("div");
    optionFraldinha.classList.add("form-check", "form-check-inline", "form-switch", "m-1");
    optionFraldinha.appendChild(optionsGarlicBreadInput());
    optionFraldinha.appendChild(optionsGarlicBreadLabel());
    return optionFraldinha;
};
