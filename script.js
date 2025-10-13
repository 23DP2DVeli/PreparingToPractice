console.log("1");

async function test() {
  console.log("2");
  await Promise.resolve();
  console.log("3");
}

test();

console.log("4");