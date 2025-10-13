console.log("start");

setTimeout(() => console.log("task"), 0); // macrotask
Promise.resolve().then(() => console.log("micro")); // microtask

console.log("end");