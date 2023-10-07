import { events } from "./app.js";

const optionsBeerInput = () => {
    const optionsBeerInput = document.createElement("input");
    optionsBeerInput.classList.add("form-check-input");
    optionsBeerInput.id = "beer";
    optionsBeerInput.type = "checkbox";
    optionsBeerInput.name = "beer";
    optionsBeerInput.checked = true;
    optionsBeerInput.setAttribute('disabled', '')
    optionsBeerInput.addEventListener("click", () => {
        const event = new CustomEvent(events.OPCAO_ATUALIZADA, {
            detail: {
                name: optionsBeerInput.name,
                checked: optionsBeerInput.checked,
            }, bubbles: true
        });
        document.dispatchEvent(event);
    });

    return optionsBeerInput;
};
const optionsBeerLabel = () => {
    const optionsBeerLabel = document.createElement("label");
    optionsBeerLabel.innerText = "Cerveja 600ml";
    optionsBeerLabel.classList.add("form-check-label");
    optionsBeerLabel.for = "beer";
    return optionsBeerLabel;
};
export const optionsBeer = () => {
    const optionsBeer = document.createElement("div");
    optionsBeer.classList.add("form-check", "form-check-inline", "form-switch", "m-1");
    optionsBeer.appendChild(optionsBeerInput());
    optionsBeer.appendChild(optionsBeerLabel());
    return optionsBeer;
};
