const buttonPlus = document.createElement("button");
buttonPlus.classList.add("input-group__button--small");
buttonPlus.innerText = "+";

buttonPlus.addEventListener("click", ()=>{
    console.log("DISPARADO: " + events.INCREMENTAR); 
    buttonPlus.dispatchEvent(new CustomEvent(events.INCREMENTAR, {bubbles: true}))
})

