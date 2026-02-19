// Создай объект user с полями:
// name: 'Danik'
// age: 18
// city: 'Riga'
// Создай массив чисел [1, 2, 3, 4, 5].
// Напиши функцию updateUser, которая:
// принимает объект пользователя
// увеличивает возраст на 1
// возвращает новый объект (не меняя оригинал) с помощью spread

// Создай функцию processNumbers, которая:
// принимает массив чисел
// возвращает новый массив, где каждое число умножено на 2
// использует map и не изменяет исходный массив
// Выведи в консоль:
// оригинальный user
// новый объект пользователя
// оригинальный массив чисел
// новый массив чисел


const user = {
  name: 'Danik',
  age: 19,
  city: 'Riga'
}

const arr = [1, 2, 3, 4, 5]

function updateUser(person) {

  const draftPerson = {...person}

  draftPerson.age += 1

  return console.log(draftPerson)
}

console.log(user)

updateUser(user)
console.log(user)
updateUser(user)

