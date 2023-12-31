const doTask = (iterations, callback) => {
    const numbers = []; 
    for (let i = 0; i < iterations; i++){
        const number = 1 + Math.floor(math.random()* 6);
        number.push(number);
        if (number === 6) {
            callback({
                error: true,
                iter: i, 
                message: "se ha sacado un 6"
            });
            return;
        }

    }
    /* termina bucle y no se hga sacado 6*/
    return callback (null , {
        error: false,
        value: numbers
    });
}

doTask(10, function(err, result){
    if (err) {
        console.error(">>Error:", err.message);
        console.log(err);
        return;
    }
    console.log("tiradas correctas: ", result.value);
});
