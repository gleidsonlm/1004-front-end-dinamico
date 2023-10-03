const counter = function(id){

    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", id);
    input.setAttribute("value", "0");
    input.classList.add("input-valid");
    
    return input;
}