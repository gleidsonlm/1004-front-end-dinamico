const calculator = document.createElement("div");
calculator.classList.add("calculator");

calculator.addEventListener(events.INCREMENTAR, () => {

    document.getElementById("people").value++;
    
    console.log("RECEBIDO: " + events.INCREMENTAR);
});

calculator.addEventListener(events.CALCULAR, () => {

    let resultadoDoCalculo = document.getElementById("people").value * 0.2;
    console.log("RECEBIDO: " + events.CALCULAR);
    console.log("QUANTIDADE DE PICANHA: " + resultadoDoCalculo + " KG");


    calculator.dispatchEvent(new CustomEvent(events.CALCULO_REALIZADO, { detail: {
        quantidadeDePicanha: resultadoDoCalculo
    }, 
    bubbles: true }))
});