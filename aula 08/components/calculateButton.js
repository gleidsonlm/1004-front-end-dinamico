const calculateButton = function(){

    const solicitaCalculo = function(event){
        event.target.dispatchEvent(new CustomEvent(events.CALCULAR, { bubbles: true}));
        console.log("DISPARADO: " + events.CALCULAR); 
    };

    const calculateButtonRow = document.createElement("div");
    calculateButtonRow.classList.add("row");

    const buttonCalculateInputGroup = document.createElement("div");
            buttonCalculateInputGroup.classList.add("input-group");
        
    const buttonCalculate = document.createElement("button");
            buttonCalculate.classList.add("input-group__button--big");
            buttonCalculate.innerText = "Calcular";
            buttonCalculate.addEventListener("click", solicitaCalculo);

    buttonCalculateInputGroup.appendChild(buttonCalculate);
    calculateButtonRow.appendChild(buttonCalculateInputGroup);
    
    return calculateButtonRow;
}