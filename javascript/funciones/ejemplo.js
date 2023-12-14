function realizarTareaAsincronica(callback){
    setTimeout(function(){
        console.log("tarea ascincronica completada");
        callback();
    }, 2000);
}

function miCallback(){// funcion de callback
console.log("el callback se ha ejecutado");
}

//llamando ala funcion asincronica y pasando el callback
realizarTareaAsincronica(miCallback);
console.log("tarea principal continua");
