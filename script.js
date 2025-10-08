function wallet (startBalance) {
    balance = startBalance;


    return {

        add(amount) {
            balance += amount
            console.log(balance)
        },

        decrease(amount) {
            balance -= amount
            console.log(balance)
        },

        getBalance() {
            console.log(balance)
        }


    }

}

const MyWallet = wallet(100)
MyWallet.add(20)
MyWallet.decrease(100)
MyWallet.getBalance()
console.log(MyWallet.balance)
console.log(wallet.balance)