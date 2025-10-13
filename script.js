const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!"); // complete
  }, 1000);
});
