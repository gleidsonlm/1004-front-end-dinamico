import { events } from "./app.js";

const optionsSaltInput = () => {
    const optionsSaltInput = document.createElement("input");
    optionsSaltInput.classList.add("form-check-input");
    optionsSaltInput.id = "salt";
    optionsSaltInput.type = "checkbox";
    optionsSaltInput.name = "salt";
    optionsSaltInput.checked = true;
    optionsSaltInput.addEventListener("click", () => {
        const event = new CustomEvent(events.OPCAO_ATUALIZADA, {
            detail: {
                name: optionsSaltInput.name,
                checked: optionsSaltInput.checked,
            }, bubbles: true
        });
        document.dispatchEvent(event);
    });

    return optionsSaltInput;
};
const optionsSaltLabel = () => {
    const optionsSaltLabel = document.createElement("label");
    optionsSaltLabel.innerText = "Sal Grosso";
    optionsSaltLabel.classList.add("form-check-label");
    optionsSaltLabel.for = "salt";
    return optionsSaltLabel;
};
export const optionsSalt = () => {
    const optionsSalt = document.createElement("div");
    optionsSalt.classList.add("form-check", "form-check-inline", "form-switch", "m-1");
    optionsSalt.appendChild(optionsSaltInput());
    optionsSalt.appendChild(optionsSaltLabel());
    return optionsSalt;
};
