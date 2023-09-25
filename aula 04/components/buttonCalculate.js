const buttonCalculate = document.createElement("button");
buttonCalculate.classList.add("input-group__button--big");
buttonCalculate.innerText = "Calcular";

buttonCalculate.addEventListener("click", () => {

    buttonPlus.dispatchEvent(new CustomEvent(events.CALCULAR, { bubbles: true}))
    console.log("DISPARADO: " + events.CALCULAR); 

})

