function ruidosa(funcion){
    return(...argumentos)=> {
        console.log("llamado con", argumentos);
        let resultado = funcion(...argumentos);
        console.log("llamada con", argumentos,", retorno", resultado);
        return resultado;
    };
}
ruidosa(math.min)(3, 2, 1);  