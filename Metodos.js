let busc = document.getElementById("Buscador");
let cont = document.getElementById("contado");
let acro = document.getElementById("Acronimo");

let contInnerBtn = document.getElementById("contar");

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

contInnerBtn.addEventListener("click", function(){
    let textoInput = document.getElementById("TextoCont");
    let textoInput_length = textoInput.length;
    let result = textoInput.value.split(" ");
    let result_length = result.length;
    textoInput_lengthWS = result[result_length-result_length+1].length + ;
    for (i in result_length) {
    result = result[i].trim();
    }

});