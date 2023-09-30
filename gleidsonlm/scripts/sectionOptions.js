import { events } from "./app.js";

export const sectionOptions = () => {
    const optionsSection = document.createElement("section");
    optionsSection.classList.add("options", "flex", "flex-column", "align-items-center", "card", "p-2", "m-2");
    optionsSection.appendChild(optionsTitle());
    optionsSection.appendChild(optionsText());
    optionsSection.appendChild(optionsSectionOptions());
    return optionsSection;
};
const optionsPicanhaInput = () => {
    const optionPicanhaInput = document.createElement("input");
    optionPicanhaInput.classList.add("form-check-input");
    optionPicanhaInput.id = "picanha";
    optionPicanhaInput.type = "checkbox";
    optionPicanhaInput.name = "picanha";
    optionPicanhaInput.checked = true;
    optionPicanhaInput.addEventListener("click", () => {
        const event = new CustomEvent(events.OPCAO_ATUALIZADA, {
            detail: {
                name: optionPicanhaInput.name,
                checked: optionPicanhaInput.checked,
            }, bubbles: true
        });
        document.dispatchEvent(event);
    });

    return optionPicanhaInput;
};
const optionsPicanhaLabel = () => {
    const optionPicanhaLabel = document.createElement("label");
    optionPicanhaLabel.innerText = "Picanha";
    optionPicanhaLabel.classList.add("form-check-label");
    optionPicanhaLabel.for = "picanha";
    return optionPicanhaLabel;
};
const optionsPicanha = () => {
    const optionPicanha = document.createElement("div");
    optionPicanha.classList.add("form-check", "form-switch", "m-1");
    optionPicanha.appendChild(optionsPicanhaInput());
    optionPicanha.appendChild(optionsPicanhaLabel());
    return optionPicanha;
};
const optionsFraldinhaInput = () => {
    const optionPicanhaInput = document.createElement("input");
    optionPicanhaInput.classList.add("form-check-input");
    optionPicanhaInput.id = "fraldinha";
    optionPicanhaInput.type = "checkbox";
    optionPicanhaInput.name = "fraldinha";
    optionPicanhaInput.checked = true;
    optionPicanhaInput.addEventListener("click", () => {
        const event = new CustomEvent(events.OPCAO_ATUALIZADA, {
            detail: {
                name: optionPicanhaInput.name,
                checked: optionPicanhaInput.checked,
            }, bubbles: true
        });
        document.dispatchEvent(event);
    });

    return optionPicanhaInput;
};
const optionsFraldinhaLabel = () => {
    const optionPicanhaLabel = document.createElement("label");
    optionPicanhaLabel.innerText = "Fraldinha";
    optionPicanhaLabel.classList.add("form-check-label");
    optionPicanhaLabel.for = "fraldinha";
    return optionPicanhaLabel;
};
const optionsFraldinha = () => {
    const optionFraldinha = document.createElement("div");
    optionFraldinha.classList.add("form-check", "form-switch", "m-1");
    optionFraldinha.appendChild(optionsFraldinhaInput());
    optionFraldinha.appendChild(optionsFraldinhaLabel());
    return optionFraldinha;
};


const optionsTitle = () => {
    const optionsTitle = document.createElement("h2");
    optionsTitle.innerText = "Opções";
    optionsTitle.classList.add("card-title");
    return optionsTitle;
};
const optionsText = () => {
    const optionsText = document.createElement("p");
    optionsText.innerText = "Selecione as opções do seu churrasco.";
    optionsText.classList.add("card-text");
    return optionsText;
};
const optionsSectionOptions = () => {
    const optionsSectionOptions = document.createElement("section");
    optionsSectionOptions.classList.add("options", "flex", "flex-column", "align-items-center", "card");
    optionsSectionOptions.appendChild(optionsPicanha());
    optionsSectionOptions.appendChild(optionsFraldinha());
    return optionsSectionOptions;
};
