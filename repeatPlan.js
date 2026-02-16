let a = 10

function foo() {
  let a = 5
  function bar() {
    console.log(a)
  }
  bar()
}

foo()

// 5