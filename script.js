function Stepper(name) {
    this.name = name
    let stepCounter = 0;

    return {

        walk(amount) {
            stepCounter += amount
            console.log(name, stepCounter)
        },


        getSteps() {
            console.log(name, stepCounter)
        }


    }
}


const User = new Stepper('Danik')

User.walk(1589127589)
User.walk(1)
User.getSteps()