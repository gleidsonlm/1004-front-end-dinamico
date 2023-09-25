import { inputGroupDrinking, inputGroupMale, inputGroupFemale, inputGroupChildren } from "./inputGroup.js";
import { events } from "./app.js";

export const calcProteinTotal = (event) => {
    const { drinking, male, female, children } = event.detail;
    const total = (drinking * 0.3) + (male * 0.4) + (female * 0.3) + (children * 0.2);
    return total;
};

export const sectionCalculatorButton = () => {
    const sectionCalculatorButton = document.createElement("button");
    sectionCalculatorButton.innerText = "Calcular";
    sectionCalculatorButton.classList.add("btn", "btn-primary", "m-2");
    sectionCalculatorButton.addEventListener("click", () => {
        const inputGroupDrinkingInput = document.getElementById("drinking");
        const inputGroupMaleInput = document.getElementById("male");
        const inputGroupFemaleInput = document.getElementById("female");
        const inputGroupChildrenInput = document.getElementById("children");

        const event = new CustomEvent(events.CALCULAR, {
            detail: {
                drinking: inputGroupDrinkingInput.value,
                male: inputGroupMaleInput.value,
                female: inputGroupFemaleInput.value,
                children: inputGroupChildrenInput.value,
            }, bubbles: true
        });
        document.dispatchEvent(event);
    });

    return sectionCalculatorButton;
};

export const sectionCalculator = () => {
    const sectionCalculator = document.createElement("section");
    sectionCalculator.classList.add("calculator", "flex", "flex-column", "align-items-center", "m-2");
    sectionCalculator.appendChild(inputGroupDrinking());
    sectionCalculator.appendChild(inputGroupMale());
    sectionCalculator.appendChild(inputGroupFemale());
    sectionCalculator.appendChild(inputGroupChildren());
    return sectionCalculator;
};
