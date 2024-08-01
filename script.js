let aux = 0;
let notas = [];
console.log(notas);

function showNota(lista) {
    aux++;
    let nota = document.createElement("p");
    let blocoNotas = document.querySelector(".midBody");
    nota.innerText = "A nota " + aux + " foi " + document.getElementById("inputNota").value;

    lista.push(document.getElementById("inputNota").value);
    console.log(lista);
    divNota = document.createElement("div");
    divNota.append(nota);
    blocoNotas.append(divNota);
}

function calcNota(lista) {
    let acum = 0;
    for(let i = 0; i < lista.length; i++){
        acum += parseFloat(lista[i]);
    }
    let media = document.querySelector(".lowerBody p");
    media.innerText = "A média é: " + (acum / lista.length).toFixed(2);
}

let buttonAdd = document.getElementById("buttonAdd");
buttonAdd.addEventListener("click", () => {
    if (document.getElementById("inputNota").value == ""){
        alert("Por favor, insira uma nota");
    }
    else if (isNaN(document.getElementById("inputNota").value)) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        document.getElementById("inputNota").value = ""
    }
    else if (parseFloat(document.getElementById("inputNota").value) > 10 ||
            parseInt(document.getElementById("inputNota").value) < 0
    ) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        document.getElementById("inputNota").value = ""
    }
    else{
        showNota(notas);
        document.getElementById("inputNota").value = ""
    }
});

let buttonMed = document.getElementById("buttonMed");
buttonMed.addEventListener("click", () => {
    if (notas.length == 0){
        alert("Nenhuma nota cadastrada!");
    }
    else{
        calcNota(notas);
    }
});