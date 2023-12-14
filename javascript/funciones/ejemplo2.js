function multiplicador(factor) {
    return function (numero) {
        return numero * factor;
};
}

const duplicar = multiplicador(2);
const triplicar = multiplicador(3);

console.log(duplicar(5)); // resultado 10 
console.log(triplicar(5));// resultado 15 