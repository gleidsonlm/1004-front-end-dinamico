
const body = document.querySelector("body");
const app = document.querySelector("app");
app.appendChild(temaButton);

app.addEventListener(events.CALCULO_REALIZADO, (e) => {

    console.log("RECEBIDO: " + e.detail.quantidadeDePicanha + " KG");
})

const h1 = document.createElement("h1");
h1.innerText = "Churrascômetro";


container.appendChild(h1);
container.appendChild(calculator);

calculator.appendChild(firstRow);
firstRow.appendChild(firstInputGroup);
firstInputGroup.appendChild(label);

firstInputGroup.appendChild(input);
firstInputGroup.appendChild(buttonGroup);
buttonGroup.appendChild(buttonMinus);
buttonGroup.appendChild(buttonPlus);

calculator.appendChild(secondRow);
secondRow.appendChild(secondInputGroup);
secondInputGroup.append(buttonCalculate);

app.appendChild(container);