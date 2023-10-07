import { events } from "./app.js";

const optionsSodaInput = () => {
    const optionsSodaInput = document.createElement("input");
    optionsSodaInput.classList.add("form-check-input");
    optionsSodaInput.id = "soda";
    optionsSodaInput.type = "checkbox";
    optionsSodaInput.name = "soda";
    optionsSodaInput.checked = true;
    optionsSodaInput.setAttribute('disabled', '')
    optionsSodaInput.addEventListener("click", () => {
        const event = new CustomEvent(events.OPCAO_ATUALIZADA, {
            detail: {
                name: optionsSodaInput.name,
                checked: optionsSodaInput.checked,
            }, bubbles: true
        });
        document.dispatchEvent(event);
    });

    return optionsSodaInput;
};
const optionsSodaLabel = () => {
    const optionsSodaLabel = document.createElement("label");
    optionsSodaLabel.innerText = "Refrigerante 2L";
    optionsSodaLabel.classList.add("form-check-label");
    optionsSodaLabel.for = "soda";
    return optionsSodaLabel;
};
export const optionsSoda = () => {
    const optionsSoda = document.createElement("div");
    optionsSoda.classList.add("form-check", "form-check-inline", "form-switch", "m-1");
    optionsSoda.appendChild(optionsSodaInput());
    optionsSoda.appendChild(optionsSodaLabel());
    return optionsSoda;
};
