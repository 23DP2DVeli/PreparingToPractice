const user = {
  name: 'Danik',
  age: 19,
  address: {
    city: 'Riga',
    street: 'Brivibas'
  }
}


// Требования:
// вернуть новый объект
// изменить только city
// оригинал нельзя менять
// address тоже должен быть новой ссылкой (вот тут многие ошибаются)
// 👉 после выполнения:
// const updated = changeCity(user, 'Jurmala')
// user.address.city должен остаться "Riga"


function changeCity(user, newCity) {
  return {
    ...user,
    address: {
      ...user.address,
      city: newCity
    }
  }
}

const updated = changeCity(user, 'Jurmala')

console.log(updated.address.city) 
console.log(user.address.city)    
