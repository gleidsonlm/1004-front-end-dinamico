const inputGroupDrinkingMinus = () => {
    const inputGroupDrinkingMinus = document.createElement("button");
    inputGroupDrinkingMinus.innerText = "-";
    inputGroupDrinkingMinus.classList.add("btn", "btn-outline-secondary");
    inputGroupDrinkingMinus.addEventListener("click", () => {
        const inputGroupDrinkingInput = inputGroupDrinkingMinus.parentElement.querySelector("input");

        inputGroupDrinkingInput.value = inputGroupDrinkingInput.value > 0 ? parseInt(inputGroupDrinkingInput.value) - 1 : 0;
    });
    return inputGroupDrinkingMinus;
};
const inputGroupDrinkingPlus = () => {
    const inputGroupDrinkingPlus = document.createElement("button");
    inputGroupDrinkingPlus.innerText = "+";
    inputGroupDrinkingPlus.classList.add("btn", "btn-outline-secondary");
    inputGroupDrinkingPlus.addEventListener("click", () => {      
        const inputGroupDrinkingInput = inputGroupDrinkingPlus.parentElement.querySelector("input");
        const inputGroupMaleInput = document.getElementById('male');
        const inputGroupFemaleInput = document.getElementById('female');

        // it can only be equal or lower than male and female together
        if (inputGroupDrinkingInput.value >= parseInt(inputGroupMaleInput.value) + parseInt(inputGroupFemaleInput.value)) {
            return alert("O número de borrachos não pode ser maior que o número de peões e prendas juntos.");
        }

        inputGroupDrinkingInput.value = parseInt(inputGroupDrinkingInput.value) + 1;
    });

    return inputGroupDrinkingPlus;
};
const inputGroupDrinkingInput = () => {
    const inputGroupDrinkingInput = document.createElement("input");
    inputGroupDrinkingInput.type = "number";
    inputGroupDrinkingInput.value = "0";
    inputGroupDrinkingInput.disabled = true;
    inputGroupDrinkingInput.name = "drinking";
    inputGroupDrinkingInput.id = "drinking";
    inputGroupDrinkingInput.classList.add("form-control");
    return inputGroupDrinkingInput;
};
const inputGroupDrinkingLabel = () => {
    const inputGroupDrinkingLabel = document.createElement("label");
    inputGroupDrinkingLabel.innerText = "Borrachos: ";
    inputGroupDrinkingLabel.classList.add("input-group-text", "flex-grow-1", "col-sm-7");
    return inputGroupDrinkingLabel;
};

export const inputGroupDrinking = () => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");
    inputGroup.appendChild(inputGroupDrinkingMinus());
    inputGroup.appendChild(inputGroupDrinkingLabel());
    inputGroup.appendChild(inputGroupDrinkingInput());
    inputGroup.appendChild(inputGroupDrinkingPlus());
    return inputGroup;
};
const inputGroupMaleMinus = () => {
    const inputGroupMaleMinus = document.createElement("button");
    inputGroupMaleMinus.innerText = "-";
    inputGroupMaleMinus.classList.add("btn", "btn-outline-secondary");
    inputGroupMaleMinus.addEventListener("click", () => {
        const inputGroupMaleInput = inputGroupMaleMinus.parentElement.querySelector("input");
        const inputGroupFemaleInput = document.getElementById('female');
        const inputGroupDrinkingInput = document.getElementById('drinking');

        // when lowering male, if drinking is higher than male + female, lower drinking
        if (inputGroupDrinkingInput.value > parseInt(inputGroupMaleInput.value) + parseInt(inputGroupFemaleInput.value)) {
            inputGroupDrinkingInput.value = parseInt(inputGroupDrinkingInput.value) - 1;
        }

        inputGroupMaleInput.value = inputGroupMaleInput.value > 0 ? parseInt(inputGroupMaleInput.value) - 1 : 0;
    });
    return inputGroupMaleMinus;
};
const inputGroupMalePlus = () => {
    const inputGroupMalePlus = document.createElement("button");
    inputGroupMalePlus.innerText = "+";
    inputGroupMalePlus.classList.add("btn", "btn-outline-secondary");
    inputGroupMalePlus.addEventListener("click", () => {
        const inputGroupMaleInput = inputGroupMalePlus.parentElement.querySelector("input");
        inputGroupMaleInput.value = parseInt(inputGroupMaleInput.value) + 1;
    });
    return inputGroupMalePlus;
};
const inputGroupMaleInput = () => {
    const inputGroupMaleInput = document.createElement("input");
    inputGroupMaleInput.type = "number";
    inputGroupMaleInput.value = "0";
    inputGroupMaleInput.disabled = true;
    inputGroupMaleInput.name = "male";
    inputGroupMaleInput.id = "male";
    inputGroupMaleInput.classList.add("form-control");
    return inputGroupMaleInput;
};
const inputGroupMaleLabel = () => {
    const inputGroupMaleLabel = document.createElement("label");
    inputGroupMaleLabel.innerText = "Peões";
    inputGroupMaleLabel.classList.add("input-group-text", "flex-grow-1", "col-sm-7");
    return inputGroupMaleLabel;
};
export const inputGroupMale = () => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");
    inputGroup.appendChild(inputGroupMaleMinus());
    inputGroup.appendChild(inputGroupMaleLabel());
    inputGroup.appendChild(inputGroupMaleInput());
    inputGroup.appendChild(inputGroupMalePlus());
    return inputGroup;
};
const inputGroupFemaleMinus = () => {
    const inputGroupFemaleMinus = document.createElement("button");
    inputGroupFemaleMinus.innerText = "-";
    inputGroupFemaleMinus.classList.add("btn", "btn-outline-secondary");
    inputGroupFemaleMinus.addEventListener("click", () => {
        const inputGroupFemaleInput = inputGroupFemaleMinus.parentElement.querySelector("input");
        const inputGroupMaleInput = document.getElementById('male');
        const inputGroupDrinkingInput = document.getElementById('drinking');

        if(inputGroupDrinkingInput.value > parseInt(inputGroupMaleInput.value) + parseInt(inputGroupFemaleInput.value)) {
            inputGroupDrinkingInput.value = parseInt(inputGroupDrinkingInput.value) - 1;
        }

        inputGroupFemaleInput.value = inputGroupFemaleInput.value > 0 ? parseInt(inputGroupFemaleInput.value) - 1 : 0;
    });
    return inputGroupFemaleMinus;
};
const inputGroupFemalePlus = () => {
    const inputGroupFemalePlus = document.createElement("button");
    inputGroupFemalePlus.innerText = "+";
    inputGroupFemalePlus.classList.add("btn", "btn-outline-secondary");
    inputGroupFemalePlus.addEventListener("click", () => {
        const inputGroupFemaleInput = inputGroupFemalePlus.parentElement.querySelector("input");
        inputGroupFemaleInput.value = parseInt(inputGroupFemaleInput.value) + 1;
    });
    return inputGroupFemalePlus;
};
const inputGroupFemaleInput = () => {
    const inputGroupFemaleInput = document.createElement("input");
    inputGroupFemaleInput.type = "number";
    inputGroupFemaleInput.value = "0";
    inputGroupFemaleInput.disabled = true;
    inputGroupFemaleInput.name = 'female';
    inputGroupFemaleInput.id = 'female';
    inputGroupFemaleInput.classList.add("form-control");
    return inputGroupFemaleInput;
};
const inputGroupFemaleLabel = () => {
    const inputGroupFemaleLabel = document.createElement("label");
    inputGroupFemaleLabel.innerText = "Prendas";
    inputGroupFemaleLabel.classList.add("input-group-text", "flex-grow-1", "col-sm-7");
    return inputGroupFemaleLabel;
};
export const inputGroupFemale = () => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");
    inputGroup.appendChild(inputGroupFemaleMinus());
    inputGroup.appendChild(inputGroupFemaleLabel());
    inputGroup.appendChild(inputGroupFemaleInput());
    inputGroup.appendChild(inputGroupFemalePlus());
    return inputGroup;
};
const inputGroupChildrenMinus = () => {
    const inputGroupChildrenMinus = document.createElement("button");
    inputGroupChildrenMinus.innerText = "-";
    inputGroupChildrenMinus.classList.add("btn", "btn-outline-secondary");
    inputGroupChildrenMinus.addEventListener("click", () => {
        const inputGroupChildrenInput = inputGroupChildrenMinus.parentElement.querySelector("input");
        inputGroupChildrenInput.value = inputGroupChildrenInput.value > 0 ? parseInt(inputGroupChildrenInput.value) - 1 : 0;
    });
    return inputGroupChildrenMinus;
};
const inputGroupChildrenPlus = () => {
    const inputGroupChildrenPlus = document.createElement("button");
    inputGroupChildrenPlus.innerText = "+";
    inputGroupChildrenPlus.classList.add("btn", "btn-outline-secondary");
    inputGroupChildrenPlus.addEventListener("click", () => {
        const inputGroupChildrenInput = inputGroupChildrenPlus.parentElement.querySelector("input");
        inputGroupChildrenInput.value = parseInt(inputGroupChildrenInput.value) + 1;
    });
    return inputGroupChildrenPlus;
};
const inputGroupChildrenInput = () => {
    const inputGroupChildrenInput = document.createElement("input");
    inputGroupChildrenInput.type = "number";
    inputGroupChildrenInput.value = "0";
    inputGroupChildrenInput.disabled = true;
    inputGroupChildrenInput.name = "children";
    inputGroupChildrenInput.id = "children";
    inputGroupChildrenInput.classList.add("form-control");
    return inputGroupChildrenInput;
};
const inputGroupChildrenLabel = () => {
    const inputGroupChildrenLabel = document.createElement("label");
    inputGroupChildrenLabel.innerText = "Piás";
    inputGroupChildrenLabel.classList.add("input-group-text", "flex-grow-1", "col-sm-7");
    return inputGroupChildrenLabel;
};
export const inputGroupChildren = () => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");
    inputGroup.appendChild(inputGroupChildrenMinus());
    inputGroup.appendChild(inputGroupChildrenLabel());
    inputGroup.appendChild(inputGroupChildrenInput());
    inputGroup.appendChild(inputGroupChildrenPlus());
    return inputGroup;
};
