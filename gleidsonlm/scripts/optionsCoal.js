import { events } from "./app.js";

const optionsCoalInput = () => {
    const optionCoalInput = document.createElement("input");
    optionCoalInput.classList.add("form-check-input");
    optionCoalInput.id = "coal";
    optionCoalInput.type = "checkbox";
    optionCoalInput.name = "coal";
    optionCoalInput.checked = true;
    optionCoalInput.addEventListener("click", () => {
        const event = new CustomEvent(events.OPCAO_ATUALIZADA, {
            detail: {
                name: optionCoalInput.name,
                checked: optionCoalInput.checked,
            }, bubbles: true
        });
        document.dispatchEvent(event);
    });

    return optionCoalInput;
};
const optionsCoalLabel = () => {
    const optionCoalLabel = document.createElement("label");
    optionCoalLabel.innerText = "Carvão";
    optionCoalLabel.classList.add("form-check-label");
    optionCoalLabel.for = "coal";
    return optionCoalLabel;
};
export const optionsCoal = () => {
    const optionCoal = document.createElement("div");
    optionCoal.classList.add("form-check", "form-check-inline", "form-switch", "m-1");
    optionCoal.appendChild(optionsCoalInput());
    optionCoal.appendChild(optionsCoalLabel());
    return optionCoal;
};
