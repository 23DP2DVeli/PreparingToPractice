const cart = [
  { id: 1, 
    name: 'Phone', 
    price: 300, 
    count: 1 },
  { id: 2, name: 'Case', price: 20, count: 2 },
  { id: 3, name: 'Charger', price: 25, count: 1 }
]




function getCartTotal(cart) {
  let countTotal = 0
  
  for (let i = 0; i < cart.length; i++) {
    countTotal += (cart[i].count * cart[i].price)
  
  }
  
  console.log(countTotal)

}




function increaseCount(cart, productId) {
  const newArr = cart.map(item => ({ ...item }))

  const obj = newArr.find(obj => obj.id === productId)

  obj.count += 1

  console.log(newArr)
}



increaseCount(cart, 3)
