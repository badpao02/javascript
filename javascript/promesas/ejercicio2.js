// es una promesa api 

function getNombre(nomusu){
    const url = ` https://github.com/${nomusu}` ;

    //fecth es una promesa 
    fetch(url)
    .then(respuesta => respuesta.json())
        console.log(json.name);
}
getNombre("paola Araque")

//2. async - await 
async function getNombre(nomusu){
    const url = `link ...${nomusu}`; 

    const respuesta = await fetch(url);
    const json = await respuesta.json();

    console.log(json.name);
}
getNombre("paola araque")




