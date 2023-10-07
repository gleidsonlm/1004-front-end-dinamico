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

export function coalCalculator(event) {
    const {male,female,children} = event.detail;
    
    return (male * 1) + (female * 1) + (children * 1);
}

export function saltCalculator(event) {
    const {male,female,children} = event.detail;
    
    return (male * 0.04) + (female * 0.04) + (children * 0.04);
}

export function iceCalculator(event) {
    const {male,female,children} = event.detail;
    
    return (Number(male) + Number(female) + Number(children)) / 5;
}

export function sodaCalculator(event) {
    const {male,female,children} = event.detail;
    
    return (Number(male) + Number(female) + Number(children)) / 2.5;
}

export function waterCalculator(event) {
    const {male,female,children} = event.detail;
    
    return (Number(male) + Number(female) + Number(children)) / 5;
}

export function beerCalculator(event) {
    const {drinking} = event.detail;
    
    return drinking * 3;
}

export const sectionCalculatorButton = () => {
    const sectionCalculatorButton = document.createElement("button");
    sectionCalculatorButton.id = "sectionCalculatorButton";
    sectionCalculatorButton.classList.add("btn", "btn-primary", "m-2");
    sectionCalculatorButton.classList.add("d-none", "fade-animation");
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
        sectionCalculatorButton.classList.add("d-none","fade-animation");
        document.getElementById("sectionCalculator").classList.add("d-none","fade-animation");
        document.getElementById("sectionCalculatorButton").classList.add("d-none","fade-animation");
        document.getElementById("sectionOptions").classList.add("d-none","fade-animation");
    });

    return sectionCalculatorButton;
};

export const sectionCalculator = () => {
    const sectionCalculator = document.createElement("section");
    sectionCalculator.id = "sectionCalculator";
    sectionCalculator.classList.add("calculator", "flex", "flex-column", "align-items-center", "m-2");
    sectionCalculator.classList.add("d-none","fade-animation");
    sectionCalculator.appendChild(inputGroupMale());
    sectionCalculator.appendChild(inputGroupFemale());
    sectionCalculator.appendChild(inputGroupChildren());
    sectionCalculator.appendChild(inputGroupDrinking());
    
    return sectionCalculator;
};
