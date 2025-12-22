const myPromise = new Promise((resolve, reject) => {
  // Tarea asincrona a realizar
  setTimeout(() => {
    resolve("Promise resolved");

    // Si algo sale mal
    reject("Promise rejected");
  }, 2000);
});

// Se ejecuta cuando la promesa se resuelve ya sea por "resolve" o "reject"
myPromise.then((message) => {
  console.log(`se resolvió la promesa: ${message}`);
// Si hubo un error lo atrapamos con "catch"  
}).catch(reason => {
    console.warn(`Hubo un error: ${reason}`);
// Finalmente se ejecuta siempre (haya sido resuelta o no la promesa)
}).finally(() => {
    console.log("Termina la promesa, sin importar su resultado");
});
