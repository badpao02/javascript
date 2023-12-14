async function doTask(iterations) {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
      const number = Math.floor(Math.random() * 6) + 1; // avoid 0
      numbers.push(number);
      if (number === 6) {
        throw {
          error: true,
          iter: i + 1,
          message: "Se ha sacado un 6",
        };
      }
    }
    return {
      error: false,
      value: numbers,
    };
  }
  
  (async () => {
    try {
      const result = await doTask(10);
      console.log(result); // { error: false, value: [...] }sddfsdf
    } catch (error) {
      console.error(error); // { error: true, iter: ..., message: ... }
    }
  })();
  