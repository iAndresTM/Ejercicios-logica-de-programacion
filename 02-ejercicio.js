// Realizar una funcion que almacene en un arreglo todos los numeros pares desde a hasta b

function arregloPar(numInicial = 0, numFinal = 0){
    let arregloDado = [];
    for(let i = numInicial; i <= numFinal; i++){
        if(i % 2 === 0){
            arregloDado.push(i);
        }
    }
    console.log(arregloDado)
}

arregloPar(2, 6);