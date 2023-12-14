const datos = [
    {
        id: 1,
        title:"iron man",
        year:2008
    },
    {
        id:2,
        title:"spiderman: Homecoming",
        year:2017
    },
    {
        id:3,
        title:"The Avengers: endgame",
        year:2019
    },
];



//1.sincrono

//const getDatos = () => {
//    return datos;
//}
//console.log(getDatos())

//2.asincrono con callback

//const getDatos = () => {
  //  setTimeout ( () => {
    //    return datos;
   // }, 1500)
//}

//console.log(getDatos())

//3. promesas
const getDatos = () => {
    return new Promise((resolve,reject)=> {
        if(datos.length === 0) {
            reject(new Error("error. No existen datos."))
        }
        setTimeout ( () => {
            resolve(datos);
        },1500)
})
}

//getDatos()
//.then((datos) => { console.table(datos)})
//.catch((err) =>{ console.error(Err. message)})

async function obtenerDatos(){
    try{
        const datosObtenidos = await getDatos();
        console.table(datosObtenidos);
    }catch (error){
        console.error(error.message);
    }
}