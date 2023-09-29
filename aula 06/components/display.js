const display = function (id, name){

    const inputCounter = counter(id);

    const displayRow = document.createElement("div");
          displayRow.classList.add("row");

    const displayInputGroup = document.createElement("div");
          displayInputGroup.classList.add("input-group");
          
    const displayLabel = document.createElement("label");
          displayLabel.setAttribute("for","people");
          displayLabel.innerText = name;

    const buttonGroup = document.createElement("div");
          buttonGroup.classList.add("button-group");

    const buttonMinus = document.createElement("button");
          buttonMinus.classList.add("input-group__button--small");
          buttonMinus.innerText = "-";

    const buttonPlus = document.createElement("button");
          buttonPlus.classList.add("input-group__button--small");
          buttonPlus.innerText = "+";
    
    const incrementar = () =>
      buttonPlus.dispatchEvent(new CustomEvent(events.INCREMENTAR, { detail: {targetId: id }, bubbles: true})); 

    const decrementar = ()=>
      buttonPlus.dispatchEvent(new CustomEvent(events.DECREMENTAR, { detail: {targetId: id }, bubbles: true}))
     
    buttonMinus.addEventListener("click", decrementar);
    buttonPlus.addEventListener("click", incrementar);
        
        displayRow.appendChild(displayInputGroup);
        displayInputGroup.appendChild(displayLabel);
        displayInputGroup.appendChild(inputCounter);
        displayInputGroup.appendChild(buttonGroup);
        buttonGroup.appendChild(buttonMinus);
        buttonGroup.appendChild(buttonPlus);

    return displayRow;
}