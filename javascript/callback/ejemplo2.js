function operar(arr, operacion){
    let resultado = 0;
    for (let num of arr){
        resultado = operacion(resultado,num);
    }
    return resultado;
}

function suma(a, b){
    return a + b;
}
function producto(a,b ){
    return a * b;
}
const numeros = [1, 2, 3, 4, 5];
const sumaTotal = operar(numeros, suma); // resultado:15
const productoTotal = operar(numeros, producto);// resultado: 120 