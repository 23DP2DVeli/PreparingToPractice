function phoneBattery() {
    let charge = 100

 
    return {

        use(percent) {       
            charge -= percent;

            if (charge < 0) {
                console.log('Error')
                charge += percent
            }


        },


        chargeUp(percent) {
            charge += percent;
            if (charge > 100) {
                console.log('Error')
                charge -= percent
            }
        },
        
        
        status() {
            console.log(charge)
        }




    }

}


const iPhone = phoneBattery()

iPhone.use(500)
iPhone.status()