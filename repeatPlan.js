function test() {
  console.log(a)
  var a = 5
}

test()

function test() {
  var a;       // <-- hoisting
  console.log(a)
  a = 5
}

