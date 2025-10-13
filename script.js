const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!"); // выполнение прошло успешно
  }, 1000);
});


myPromise
  .then(result => console.log("Result:", result))  // resolve
  .catch(error => console.log("Err:", error))      // reject
  .finally(() => console.log("End"))               // end


