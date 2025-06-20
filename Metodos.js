let busc = document.getElementById("Buscador");
let cont = document.getElementById("contado");
let acro = document.getElementById("Acronimo");

let contInnerBtn = document.getElementById("contar");
let buscInnerBtn = document.getElementById("buscar");
let acroInnerBtn = document.getElementById("generar");

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
    let textoInput_length = textoInput.value.length;
    let result = textoInput.value.split(" ");
    let result_length = result.length;
    let caraccetxt = document.getElementById("cce"); 
    let caracsetxt = document.getElementById("cse");
    let numpalabr = document.getElementById("ndp");
    let palalarg = document.getElementById("pml");

    for (i in result_length) {
    result = result[i].trim();
    }

    let nospace = 0;
    let biggest = [result[1]];
    for( let i = 0 ; i < result_length ; i++){
        nospace += result[i].length; //ARRAY = [" ", yfd, ufui, jvu];
        //       ^--- summed each iteration           ^[1]  ^[2] ^----result[3].length = 3
        let arrayOfLengths = [];
        arrayOfLengths += result[i].length;
        if(arrayOfLengths[i-1]>arrayOfLengths[i] && arrayOfLengths[i]!=null){
            biggest = result[i];
        } else if(arrayOfLengths[i-1]==arrayOfLengths[i] && arrayOfLengths[i]!=null){
            biggest += result[i];
        } 
    }

    console.log(nospace); /*numero de caracteres sin espacios*/
    console.log(result_length); /*numero de palabras*/
    console.log(textoInput_length); /*numero de caracteres con espacios*/

    caraccetxt.textContent = textoInput_length;
    numpalabr.textContent = result_length;
    palalarg.textContent = biggest;
    caracsetxt.textContent = nospace;



    console.log(textoInput.value) 
});

buscInnerBtn.addEventListener("click", function(){
    let txt = document.getElementById("BuscadorText").value;
    let txtInside = document.getElementById("wordInText").value;
    let txtInside_length = txtInside.length; 
    let pabusc = document.getElementById("pab");
    let coins = document.getElementById("coinsidencias");
    let positions = document.getElementById("pos");

    let match = [];
    let count = 0;

    for (i = 0; match[match.length-1]!=-1; i=match[match.length-1]+1){
        match += txt.indexOf(txtInside, i); // Every index in this array is a coincidence between small text in big text
        count++; // Number of coincidences
    }

    pabusc.textContent = txtInside.value;
    coins.textContent = match;
    positions.textContent = count;

    // Display from txt[match] to txt[match+txtInside_length]
    // Display count variable
    
});

acroInnerBtn.addEventListener("click", function(){
    console.log("si se ejecuta");
    let textAcro = document.getElementById("GenAcr");

    let palab = document.getElementById("palabra");
    let acron = document.getElementById("acro");

    

    let generateAcronims = textAcro.value.split(" ");
    let acronims = [];
    for (i = 1; i<acronims.length; i++){
        // Array of the acronims, each index is an acronim of a word in the text box
        acronims += generateAcronims[i].slice(0,1);
    }

    for (i = 0; i<acronims.length; i++){
        acron.textContent += acronims[i];
    }
    palab.textContent = textAcro.value;
});