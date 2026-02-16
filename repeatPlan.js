const arr = [1, 2, 3];

const arr1 = JSON.parse(JSON.stringify(arr));
arr1.push(4);

console.log(arr1); 
console.log(arr);  
