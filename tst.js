class Wallet {
    #money = 0;

    add(amount) {
        this.#money+=amount
        return this.#money  
    }

    show() {
        return this.#money
    }


}



const myWallet = new Wallet()


console.log(myWallet.add(50))
console.log(myWallet.add(50))
console.log(myWallet.show())