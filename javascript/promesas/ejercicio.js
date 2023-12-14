const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
        const exito = true;
        if (exito) {
            resolve("¡ la promesa se cumplio con exito");
        } else {
            reject("hubo un error al cumplir la promesa <()" );
        }
    }, 2000 ); 

});

miPromesa
.then(resultado => {
    console.log("exito")
})
