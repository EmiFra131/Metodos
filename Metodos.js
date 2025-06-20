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
    for( let i = 1 ; i < result_length ; i++){
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

    /*
    Tenían esto dentro del for: i = 0; match[match.length-1]!=-1; i=match[match.length-1]+1
    Lo anterior tiene varios errores:
        - La notación del for es for(i = inicio, i <>= comparación; aumento), si se fijan hay problemas ahí
        pues si bien el inicio es una asignación y se hace con un =; el hasta donde NO tiene ninguna comparación 
        con la i, no tiene i; y la forma en la que aumenta i es una asignación donde aumenta de "uno en uno".
        - match es un arreglo, un arreglo vacio con longitud 0, entonces cuando hacen match[match.length-1] hacen match[0 -1] eso da match[-1] lo que es un tipo 
        de dato primitivo llamado undefined, es decir que no está definido, pues esa localidad no existe en el arreglo y cuando hacen != -1 es true, porque cualquier undefined sí es distinto de -1.
        Entonces esa condicion SIEMPRE se cumple y entra en un ciclo infinito. Incluso si el arreglo tiene contenido se seguirá cumpliendo
        a menos de que se meta un -1 en el arreglo.
    */ 
                                    
    // for (i = 0; match[match.length-1]!= -1; i=match[match.length-1]+1){
    //     let indice = txt.indexOf(txtInside, i);
    //     if (indice != -1){
    //         match.push(txt.indexOf(txtInside, i));
    //         count++; 
    //     } else 
    //         break;
    // }
    
    let i = 0;
    let index = txt.indexOf(txtInside, i);
    while (index !== -1) {
        match.push(index);
        i = index + 1;
        index = txt.indexOf(txtInside, i);
        count++;
    }

    

    pabusc.textContent = txtInside;
    coins.textContent = count;
    positions.textContent = match;
});

acroInnerBtn.addEventListener("click", function(){
    let textAcro = document.getElementById("GetAcr").value;

    let palab = document.getElementById("palabra");
    let acron = document.getElementById("acro");

    palab.textContent = textAcro;

    let generateAcronims = textAcro.split(" ");
    let acronims = [];
    for (i = 1; i<acronims.length; i++){
        // Array of the acronims, each index is an acronim of a word in the text box
        acronims += generateAcronims[i].slice(0,1);
    }

    acron.textContent = acronims;
    
});