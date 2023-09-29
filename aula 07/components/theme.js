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


function checkCurrentTheme(){
    let tema = localStorage.getItem(key);

    if(!tema){
        setTemaNoite();
        return;
    }

    if(tema === "noite"){
        setTemaNoite();
        return;
    }
    
    if(tema === "dia")
        setTemaDia();
    return;
}

function changeTheme(){
    let tema = localStorage.getItem(key);

    if(tema === "noite"){
        removeTemaNoite();
        setTemaDia();
        return;
    }
    
    if(tema === "dia"){
        removeTemaDia();
        setTemaNoite();
        return;
    }
}

function setTemaDia(){
    document.head.appendChild(temaDia);
    localStorage.setItem(key, "dia");
}

function setTemaNoite(){
    document.head.appendChild(temaNoite);
    localStorage.setItem(key, "noite"); 
}

function removeTemaNoite(){
    document.head.removeChild(temaNoite);
}

function removeTemaDia(){
    document.head.removeChild(temaDia);
}

temaButton.addEventListener("click", function(){
    changeTheme();
});

checkCurrentTheme();


