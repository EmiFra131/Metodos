let busc = document.getElementById("Buscador");
let cont = document.getElementById("contado");
let acro = document.getElementById("Acronimo");

busc.addEventListener("click", function(){
    let dispCont = document.getElementById("ContarPalabras");
    dispCont.style.display = "none";
    let dispBusc = document.getElementById("BuscarPalabras");
    dispBusc.style.display = "flex";
    let dispAcro = document.getElementById("GenerarAcronimos");
    dispAcro.style.display = "none";  
});

cont.addEventListener("click", function(){
    let dispCont = document.getElementById("ContarPalabras");
    dispCont.style.display = "flex";
    let dispBusc = document.getElementById("BuscarPalabras");
    dispBusc.style.display = "none";
    let dispAcro = document.getElementById("GenerarAcronimos");
    dispAcro.style.display = "none";
});

acro.addEventListener("click", function(){
    let dispCont = document.getElementById("ContarPalabras");
    dispCont.style.display = "none";
    let dispBusc = document.getElementById("BuscarPalabras");
    dispBusc.style.display = "none";
    let dispAcro = document.getElementById("GenerarAcronimos");
    dispAcro.style.display = "flex";
});
/*let result = textoInput.value.split(" ");
result = result.trim();*/