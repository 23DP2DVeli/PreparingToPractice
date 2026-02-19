// Создай объект user с полями:
// name: 'Danik'
// age: 18
// city: 'Riga'
// Создай массив чисел [1, 2, 3, 4, 5].
// Напиши функцию updateUser, которая:
// принимает объект пользователя
// увеличивает возраст на 1
// возвращает новый объект (не меняя оригинал) с помощью spread



const user = {
  name: 'Danik',
  age: 19,
  city: 'Riga'
}



function updateUser(person) {

  const draftPerson = JSON.parse(JSON.stringify(person))

  draftPerson.age += 1

  return console.log(draftPerson)
}




// Создай функцию processNumbers, которая:
// принимает массив чисел
// возвращает новый массив, где каждое число умножено на 2
// использует map и не изменяет исходный массив
// Выведи в консоль:
// оригинальный user
// новый объект пользователя
// оригинальный массив чисел
// новый массив чисел

const arr = [1, 2, 3, 4, 5]

function processNumbers (array) {
  const doubleArr = [...array]
  
  for (let i = 0; i < array.length; i++) {
    doubleArr[i] *= 2
    
  }

  console.log(doubleArr)



}

processNumbers(arr)

console.log(arr)


function processNumbersMap(array) {

  const newMap = new Map(
    array.map((value, index) => [index, value])
  );

  console.log(newMap);

}

processNumbersMap(arr)