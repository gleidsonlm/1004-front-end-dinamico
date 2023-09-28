const key = "tema";
const temaButton = document.createElement("button");
temaButton.innerHTML = "&#9788;"
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

temaButton.addEventListener("click", function(){
    let tema = localStorage.getItem(key);
    
    if(tema === "noite"){
        document.head.removeChild(temaNoite);
        document.head.appendChild(temaDia);
        localStorage.setItem(key, "dia");
    }
    else{
        document.head.removeChild(temaDia);
        document.head.appendChild(temaNoite);
        localStorage.setItem(key, "noite");        
    }
     
})

//tema padrão
localStorage.setItem(key, "noite");
document.head.appendChild(temaNoite);