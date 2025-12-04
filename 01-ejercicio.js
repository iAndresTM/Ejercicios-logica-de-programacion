// Realizar una función que nos permita hacer las 4 operaciones aritméticas, es decir, que nos permita sumar, restar, dividir y multiplicar. La función debe recibir 3 parámetros, dos de ellos deben ser los valores (a y b) y uno el nombre de la operación (en minúsculas). Si el parámetro de la operación no es válido que mande un error personalizado a la consola.
function calcular(a, b, operacion) {
    switch(operacion){
        case "suma":
            return console.log(a+b);
        case "resta":
            return console.log(a-b);
        case "multiplicacion":
            return console.log(a*b);
        case "division":
            return console.log(a/b);
        default:
            console.error("Error: Operación no válida");
    }
}

calcular(12, 5, "suma");


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