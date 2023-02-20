const storage = {

    vegetables: {
        carrots: 0,
        potatoes: 0,
        tomatoes: 0,
        gurkis: 0,
        kirbis: 0
    },

    addSingle(btn, vegetable) {

        const vegetableInputField = btn.parentElement.querySelector('input')
        const vegetableAddValue = vegetableInputField.value

        console.log(vegetableAddValue);
        this.vegetables[vegetable] += ~~vegetableAddValue
        console.log(this.vegetables[vegetable])
    },

    addSinglePredefined(vegetable, howMuch) {
        this.vegetables[vegetable] += ~~howMuch
        console.log(this.vegetables[vegetable])
    },

    seeAll() {
        
        // console.log(this.storage)
        for (const [key, value] of Object.entries(this.vegetables)) {
            console.log(`${key}: ${value}`);
        }
        // console.log("carrots", this.carrots)
        // console.log("potatoes", this.potatoes)
        // console.log("tomatoes", this.tomatoes)
    
    }

    
}