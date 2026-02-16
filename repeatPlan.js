let a = 10

function foo() {
  console.log(a)
}

function bar() {
  let a = 5
  foo()
}

bar()

// 10