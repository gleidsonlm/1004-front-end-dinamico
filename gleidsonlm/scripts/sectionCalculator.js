import { inputGroupDrinking, inputGroupMale, inputGroupFemale, inputGroupChildren } from "./inputGroup.js";
import { events } from "./app.js";

export function meatCalculator(event) {
    const {male,female,children} = event.detail;

    return (male * 0.4) + (female * 0.32) + (children * 0.2);
}

export function garlicBreadCalculator(event) {
    const {male,female,children} = event.detail;

    return (male * 2) + (female * 2) + (children * 1);
}



export const sectionCalculatorButton = () => {
    const sectionCalculatorButton = document.createElement("button");
    sectionCalculatorButton.id = "sectionCalculatorButton";
    sectionCalculatorButton.classList.add("btn", "btn-primary", "m-2", "d-none");
    sectionCalculatorButton.innerText = "Calcular";
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

        document.getElementById("shopping-list").classList.remove("d-none");            
    });

    return sectionCalculatorButton;
};

export const sectionCalculator = () => {
    const sectionCalculator = document.createElement("section");
    sectionCalculator.id = "sectionCalculator";
    sectionCalculator.classList.add("calculator", "flex", "flex-column", "align-items-center", "m-2", "d-none");
    sectionCalculator.appendChild(inputGroupMale());
    sectionCalculator.appendChild(inputGroupFemale());
    sectionCalculator.appendChild(inputGroupChildren());
    sectionCalculator.appendChild(inputGroupDrinking());
    
    return sectionCalculator;
};
