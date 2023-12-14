const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("¡operacion completada con exito");
    }, 2000);
});

console.log("inicio de la operacion");

miPromesa
.then(resultado => {
    console.log(resultado);
})
.catch(error => {
    console.error ("Error:" , error)
});

console.log("tareas completadas")