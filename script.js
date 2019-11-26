function rate(value) {
    clearRates(); //vacia clase active
    addRates(value); //añade clase active
}


//Aqui quitamos el color de las estrellas - Remove Active
function clearRates() { 
    for(var i=1; i<=5; i++) {
        document.getElementById("star" +i).classList.remove("active");
    }
}

//Aqui añadimos el color a las estrellas - Add Active
function addRates(value) { 
    for(var i=1; i<=value; i++) {
        document.getElementById("star" +i).classList.add("active");
    }
}

 //capturo cualquier click en cualquier sitio 
//si el click NO está dentro del div quitamos el color a las estrellas
window.addEventListener("click", function(click) {
    if(!document.getElementById("rate").contains(click.target)) { 
        clearRates();
    }
})