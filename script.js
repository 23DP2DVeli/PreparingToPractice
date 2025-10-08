function createSafe(password) {

    let money = 0;

        
        return {

            deposit(amount, pass) {
                if (pass === password) {
                money += amount
                console.log(money)
                } else {
                    console.log("Access denied")
                }
            },


            withdraw(amount, pass) {
                if (pass === password) {
                money -= amount
                console.log(money)
                } else {
                    console.log("Access denied")
                }
            },


            checkBalance(pass) {
                if (pass === password){
                console.log(money)
            } else {
                console.log('Access denied')
            }
            }
        }


}


let mySafe = createSafe(123)
mySafe.deposit(52, 123)
mySafe.deposit(52, 1234)

mySafe.withdraw(2,123)
mySafe.withdraw(2,124)

mySafe.checkBalance(123)
mySafe.checkBalance(1234)

console.log(mySafe.money)