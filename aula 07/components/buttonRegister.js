const registerButton = function(){
    
    const div = document.createElement("div");
          div.classList.add("input-group");

    const buttonRegister = document.createElement("button");
          buttonRegister.classList.add("input-group__button--big");
          buttonRegister.innerText = "Cadastrar";

        buttonRegister.addEventListener("click", () => {

        buttonRegister.dispatchEvent(new CustomEvent(events.REGISTER, { bubbles: true }))
    })

    div.appendChild(buttonRegister);
    return div;
}
