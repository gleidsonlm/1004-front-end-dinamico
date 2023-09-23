const events = {
    CALCULAR: "CALCULO_SOLICITADO_EVENTO",
    CALCULO_REALIZADO: "CALCULO_REALIZADO_EVENTO",
    OPCAO_ATUALIZADA: "OPCAO_SELECIONADA_EVENTO",
}

const title = () => {
    const title = document.createElement("h1");
    title.innerText = "Churrascômetro";
    title.classList.add("card-header","flex-grow-1");
    return title;
}

const logo = () => {
    const logo = document.createElement("img");
    logo.src = "./assets/logo.png";
    logo.alt = "Logo";
    logo.width = "100";
    logo.height = "100";
    logo.classList.add("float-start","rounded");
    return logo;
}

const header = () => {
    const header = document.createElement("header");
    header.classList.add("header","flex","flex-row","align-items-center", "card");
    header.appendChild(logo());
    header.appendChild(title());
    return header;
}

const mainTitle = () => {
    const mainTitle = document.createElement("h2");
    mainTitle.innerText = "Calculadora de Churrasco";
    mainTitle.classList.add("card-title");
    return mainTitle;
}

const mainText = () => {
    const mainText = document.createElement("p");
    mainText.innerText = "Use o Churrascômetro para planejar o seu churrasco, calculando uma estimativa de quanto de carne você vai precisar comprar.";
    mainText.classList.add("card-text");
    return mainText;
}

const inputGroupDrinkingMinus = () => {
    const inputGroupDrinkingMinus = document.createElement("button");
    inputGroupDrinkingMinus.innerText = "-";
    inputGroupDrinkingMinus.classList.add("btn","btn-outline-secondary");
    inputGroupDrinkingMinus.addEventListener("click", () => {
        const inputGroupDrinkingInput = inputGroupDrinkingMinus.parentElement.querySelector("input");
        inputGroupDrinkingInput.value = inputGroupDrinkingInput.value > 0 ? parseInt(inputGroupDrinkingInput.value) - 1 : 0;
    });
    return inputGroupDrinkingMinus;
}

const inputGroupDrinkingPlus = () => {
    const inputGroupDrinkingPlus = document.createElement("button");
    inputGroupDrinkingPlus.innerText = "+";
    inputGroupDrinkingPlus.classList.add("btn","btn-outline-secondary");
    inputGroupDrinkingPlus.addEventListener("click", () => {
        const inputGroupDrinkingInput = inputGroupDrinkingPlus.parentElement.querySelector("input");
        inputGroupDrinkingInput.value = parseInt(inputGroupDrinkingInput.value) + 1;
    });
    return inputGroupDrinkingPlus;
}

const inputGroupDrinkingInput = () => {
    const inputGroupDrinkingInput = document.createElement("input");
    inputGroupDrinkingInput.type = "number";
    inputGroupDrinkingInput.value = "0";
    inputGroupDrinkingInput.disabled = true;
    inputGroupDrinkingInput.name = "drinking";
    inputGroupDrinkingInput.id = "drinking";
    inputGroupDrinkingInput.classList.add("form-control");
    return inputGroupDrinkingInput;
}

const inputGroupDrinkingLabel = () => {
    const inputGroupDrinkingLabel = document.createElement("label");
    inputGroupDrinkingLabel.innerText = "Borrachos";
    inputGroupDrinkingLabel.classList.add("input-group-text", "flex-grow-1","col-sm-7");
    return inputGroupDrinkingLabel;
}

const inputGroupDrinking = () => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");
    inputGroup.appendChild(inputGroupDrinkingLabel());
    inputGroup.appendChild(inputGroupDrinkingMinus());
    inputGroup.appendChild(inputGroupDrinkingInput());
    inputGroup.appendChild(inputGroupDrinkingPlus());
    return inputGroup;
}

const inputGroupMaleMinus = () => {
    const inputGroupMaleMinus = document.createElement("button");
    inputGroupMaleMinus.innerText = "-";
    inputGroupMaleMinus.classList.add("btn","btn-outline-secondary");
    inputGroupMaleMinus.addEventListener("click", () => {
        const inputGroupMaleInput = inputGroupMaleMinus.parentElement.querySelector("input");
        inputGroupMaleInput.value = inputGroupMaleInput.value > 0 ? parseInt(inputGroupMaleInput.value) - 1 : 0;
    });
    return inputGroupMaleMinus;
}

const inputGroupMalePlus = () => {
    const inputGroupMalePlus = document.createElement("button");
    inputGroupMalePlus.innerText = "+";
    inputGroupMalePlus.classList.add("btn","btn-outline-secondary");
    inputGroupMalePlus.addEventListener("click", () => {
        const inputGroupMaleInput = inputGroupMalePlus.parentElement.querySelector("input");
        inputGroupMaleInput.value = parseInt(inputGroupMaleInput.value) + 1;
    });
    return inputGroupMalePlus;
}

const inputGroupMaleInput = () => {
    const inputGroupMaleInput = document.createElement("input");
    inputGroupMaleInput.type = "number";
    inputGroupMaleInput.value = "0";
    inputGroupMaleInput.disabled = true;
    inputGroupMaleInput.name = "male";
    inputGroupMaleInput.id = "male";
    inputGroupMaleInput.classList.add("form-control");
    return inputGroupMaleInput;
}

const inputGroupMaleLabel = () => {
    const inputGroupMaleLabel = document.createElement("label");
    inputGroupMaleLabel.innerText = "Peões";
    inputGroupMaleLabel.classList.add("input-group-text", "flex-grow-1", "col-sm-7");
    return inputGroupMaleLabel;
}

const inputGroupMale = () => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group",);
    inputGroup.appendChild(inputGroupMaleLabel());
    inputGroup.appendChild(inputGroupMaleMinus());
    inputGroup.appendChild(inputGroupMaleInput());
    inputGroup.appendChild(inputGroupMalePlus());
    return inputGroup;
}

const inputGroupFemaleMinus = () => {
    const inputGroupFemaleMinus = document.createElement("button");
    inputGroupFemaleMinus.innerText = "-";
    inputGroupFemaleMinus.classList.add("btn","btn-outline-secondary");
    inputGroupFemaleMinus.addEventListener("click", () => {
        const inputGroupFemaleInput = inputGroupFemaleMinus.parentElement.querySelector("input");
        inputGroupFemaleInput.value = inputGroupFemaleInput.value > 0 ? parseInt(inputGroupFemaleInput.value) - 1 : 0;
    });
    return inputGroupFemaleMinus;
}

const inputGroupFemalePlus = () => {
    const inputGroupFemalePlus = document.createElement("button");
    inputGroupFemalePlus.innerText = "+";
    inputGroupFemalePlus.classList.add("btn","btn-outline-secondary");
    inputGroupFemalePlus.addEventListener("click", () => {
        const inputGroupFemaleInput = inputGroupFemalePlus.parentElement.querySelector("input");
        inputGroupFemaleInput.value = parseInt(inputGroupFemaleInput.value) + 1;
    });
    return inputGroupFemalePlus;
}

const inputGroupFemaleInput = () => {
    const inputGroupFemaleInput = document.createElement("input");
    inputGroupFemaleInput.type = "number";
    inputGroupFemaleInput.value = "0";
    inputGroupFemaleInput.disabled = true;
    inputGroupFemaleInput.name = 'female';
    inputGroupFemaleInput.id = 'female';
    inputGroupFemaleInput.classList.add("form-control");
    return inputGroupFemaleInput;
}

const inputGroupFemaleLabel = () => {
    const inputGroupFemaleLabel = document.createElement("label");
    inputGroupFemaleLabel.innerText = "Prendas";
    inputGroupFemaleLabel.classList.add("input-group-text", "flex-grow-1","col-sm-7");
    return inputGroupFemaleLabel;
}

const inputGroupFemale = () => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");
    inputGroup.appendChild(inputGroupFemaleLabel());
    inputGroup.appendChild(inputGroupFemaleMinus());
    inputGroup.appendChild(inputGroupFemaleInput());
    inputGroup.appendChild(inputGroupFemalePlus());
    return inputGroup;
}

const inputGroupChildrenMinus = () => {
    const inputGroupChildrenMinus = document.createElement("button");
    inputGroupChildrenMinus.innerText = "-";
    inputGroupChildrenMinus.classList.add("btn","btn-outline-secondary");
    inputGroupChildrenMinus.addEventListener("click", () => {
        const inputGroupChildrenInput = inputGroupChildrenMinus.parentElement.querySelector("input");
        inputGroupChildrenInput.value = inputGroupChildrenInput.value > 0 ? parseInt(inputGroupChildrenInput.value) - 1 : 0;
    });
    return inputGroupChildrenMinus;
}

const inputGroupChildrenPlus = () => {
    const inputGroupChildrenPlus = document.createElement("button");
    inputGroupChildrenPlus.innerText = "+";
    inputGroupChildrenPlus.classList.add("btn","btn-outline-secondary");
    inputGroupChildrenPlus.addEventListener("click", () => {
        const inputGroupChildrenInput = inputGroupChildrenPlus.parentElement.querySelector("input");
        inputGroupChildrenInput.value = parseInt(inputGroupChildrenInput.value) + 1;
    });
    return inputGroupChildrenPlus;
}

const inputGroupChildrenInput = () => {
    const inputGroupChildrenInput = document.createElement("input");
    inputGroupChildrenInput.type = "number";
    inputGroupChildrenInput.value = "0";
    inputGroupChildrenInput.disabled = true;
    inputGroupChildrenInput.name = "children";
    inputGroupChildrenInput.id = "children";
    inputGroupChildrenInput.classList.add("form-control");
    return inputGroupChildrenInput;
}

const inputGroupChildrenLabel = () => {
    const inputGroupChildrenLabel = document.createElement("label");
    inputGroupChildrenLabel.innerText = "Piás";
    inputGroupChildrenLabel.classList.add("input-group-text", "flex-grow-1","col-sm-7");
    return inputGroupChildrenLabel;
}

const inputGroupChildren = () => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");
    inputGroup.appendChild(inputGroupChildrenLabel());
    inputGroup.appendChild(inputGroupChildrenMinus());
    inputGroup.appendChild(inputGroupChildrenInput());
    inputGroup.appendChild(inputGroupChildrenPlus());
    return inputGroup;
}

const sectionCalculatorButton = () => {
    const sectionCalculatorButton = document.createElement("button");
    sectionCalculatorButton.innerText = "Calcular";
    sectionCalculatorButton.classList.add("btn","btn-primary","m-2");
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
}

const sectionCalculator = () => {
    const sectionCalculator = document.createElement("section");
    sectionCalculator.classList.add("calculator","flex","flex-column","align-items-center", "m-2");
    sectionCalculator.appendChild(inputGroupDrinking());
    sectionCalculator.appendChild(inputGroupMale());
    sectionCalculator.appendChild(inputGroupFemale());
    sectionCalculator.appendChild(inputGroupChildren());
    return sectionCalculator;
}

const calcProteinTotal = (event) => {
    const { drinking, male, female, children } = event.detail;
    const total = (drinking * 0.3) + (male * 0.4) + (female * 0.3) + (children * 0.2);
    return total;
};

const shoppingItems = () => {
    const options = document.querySelectorAll("input[type=checkbox]:checked");
    console.log(options);
}

const shoppingItemTotal = () => {
    const shoppingItemTotal = document.createElement("li");
    shoppingItemTotal.classList.add("list-group-item");
    shoppingItemTotal.innerText = "Total de carne: 0 Kg";

    document.addEventListener(events.CALCULAR, (event) => {
        const total = calcProteinTotal(event);
        shoppingItemTotal.innerText = `Total de carne: ${total} Kg`;          

        const eventResponse = new CustomEvent(events.CALCULO_REALIZADO, {
            detail: {...event.detail,total},
            bubbles: true
        });
        document.dispatchEvent(eventResponse);
    }); 

    return shoppingItemTotal;
}

const shoppingList = () => {
    const shoppingList = document.createElement("ul");
    shoppingList.classList.add("list-group","list-group-flush");
    shoppingList.appendChild(shoppingItemTotal());
    return shoppingList;
}

const sectionShoppingList = () => {
    const sectionShoppingList = document.createElement("section");
    sectionShoppingList.classList.add("shopping-list","flex","flex-column","align-items-center","card", "m-2");
    sectionShoppingList.appendChild(shoppingList());
    return sectionShoppingList;
}

const sectionOptions = () => {
    const optionsSection = document.createElement("section");
    optionsSection.classList.add("options","flex","flex-column","align-items-center","card", "p-2", "m-2");
    optionsSection.appendChild(optionsTitle());
    optionsSection.appendChild(optionsText());
    optionsSection.appendChild(optionsSectionOptions());
    return optionsSection;
}

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
}

const optionsPicanhaLabel = () => {
    const optionPicanhaLabel = document.createElement("label");
    optionPicanhaLabel.innerText = "Picanha";
    optionPicanhaLabel.classList.add("form-check-label");
    optionPicanhaLabel.for = "picanha";
    return optionPicanhaLabel;
}

const optionsPicanha = () => {
    const optionPicanha = document.createElement("div");
    optionPicanha.classList.add("form-check","form-switch", "m-1");
    optionPicanha.appendChild(optionsPicanhaInput());
    optionPicanha.appendChild(optionsPicanhaLabel());
    return optionPicanha;
}

const optionsTitle = () => {
    const optionsTitle = document.createElement("h2");
    optionsTitle.innerText = "Opções";
    optionsTitle.classList.add("card-title");
    return optionsTitle;
}

const optionsText = () => {
    const optionsText = document.createElement("p");
    optionsText.innerText = "Selecione as opções do seu churrasco.";
    optionsText.classList.add("card-text");
    return optionsText;
}

const optionsSectionOptions = () => {
    const optionsSectionOptions = document.createElement("section");
    optionsSectionOptions.classList.add("options","flex","flex-column","align-items-center","card");
    optionsSectionOptions.appendChild(optionsPicanha());
    return optionsSectionOptions;
}

const main = () => {
    const main = document.createElement("main");
    main.id = "main";
    main.classList.add("main", "card-body", "flex", "flex-column", "align-items-center", "card");
    main.appendChild(mainTitle());
    main.appendChild(mainText());
    main.appendChild(sectionShoppingList());
    main.appendChild(sectionCalculator());
    main.appendChild(sectionCalculatorButton());
    main.appendChild(sectionOptions());
    return main;
}

const app = () => {
    const app = document.createElement("app-calc-churrasco");
    app.classList.add("app");
    app.appendChild(header());
    app.appendChild(main());
    return app;
}

const body = () => {
    const body = document.querySelector("body");
    body.classList.add("flex","flex-column","align-items-center","justify-content-center");
    body.appendChild(app());
}

body();
