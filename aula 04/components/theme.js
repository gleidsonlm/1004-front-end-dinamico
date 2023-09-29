let temaNoiteSelecionado = true;
const temaButton = document.createElement("button");
temaButton.textContent = "Tema"
temaButton.style.position = "absolute";
temaButton.style.right = "10px";
temaButton.style.top = "10px";

const temaDia =  document.createElement("style");
temaDia.innerHTML = `body {
    background-color: #fff;
}`;

const temaNoite  =  document.createElement("style");
temaNoite.innerHTML = `body {
    background: url(./background.jpg); 
}`;
