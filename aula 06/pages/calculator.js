const calculatorPage = function(){
  
    const container = document.createElement("div");
          container.classList.add("container");

    const calculator = document.createElement("div");
          calculator.classList.add("calculator");
          calculator.classList.add("row");

        calculator.addEventListener(events.INCREMENTAR, (event) => {
            var { targetId } = event.detail;
            document.getElementById(targetId).value++;
            console.log("RECEBIDO: " + events.INCREMENTAR);
        });

        calculator.addEventListener(events.DECREMENTAR, (event) => {
            var { targetId } = event.detail;
            document.getElementById(targetId).value--;
            console.log("RECEBIDO: " + events.DECREMENTAR);
        });

        calculator.addEventListener(events.CALCULAR, (event) => {

            let resultadoDoCalculo = document.getElementById("people").value * 0.2;
            console.log("RECEBIDO: " + events.CALCULAR);
            console.log("QUANTIDADE DE PICANHA: " + resultadoDoCalculo + " KG");

            event.target.dispatchEvent(new CustomEvent(events.CALCULO_REALIZADO, { detail: {
                quantidadeDePicanha: resultadoDoCalculo
            }, 
            bubbles: true }))
        });

        container.appendChild(title());
        calculator.appendChild(display("people","Pessoas"));             
        calculator.appendChild(calculateButton());
        container.appendChild(calculator);

    return container;
}