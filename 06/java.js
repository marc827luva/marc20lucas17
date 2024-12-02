function raizQuadrada(numero){
    const raiz = Math.sqrt(numero)
    alert("a raíz de "+numero+" é igual a "+ raiz)
}

function divEstatica(texto){
    document.getElementById("div-estatica").innerHTML = texto
}

function divDinamica(){
    var texto2 = prompt("digite um texto:")
    document.getElementById("div-dinamica").innerHTML = texto2 
}