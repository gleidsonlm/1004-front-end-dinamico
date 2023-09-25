import { header } from "./header.js";
import { main } from "./main.js";



export const events = {
    CALCULAR: "CALCULO_SOLICITADO_EVENTO",
    CALCULO_REALIZADO: "CALCULO_REALIZADO_EVENTO",
    OPCAO_ATUALIZADA: "OPCAO_SELECIONADA_EVENTO",
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
