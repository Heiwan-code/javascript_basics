const inputField = document.querySelector("#addItems")
const counter = document.querySelector("#counter")
const fillCapacity = document.querySelector("#fillCapacity")


const storage = {
    alus: 0,
    maxCapacity: 1000, 

    addToStorage() {
        const addition = ~~inputField.value
        if (this.enoughSpace(addition)) {
            this.alus += addition
            this.checkStock()
        } else {
            alert(`Not enough capacity! 
            You can store ${this.maxCapacity - this.alus}`)
        }
    },

    enoughSpace(wantToAdd) {
        if (this.alus + wantToAdd <= this.maxCapacity) {
            return true
        } else {
            return false
        }
    },

    checkStock() {
        const percentage = (this.alus / this.maxCapacity) * 100
        counter.innerHTML = this.alus
        fillCapacity.style.width = percentage + "%"
    }

}
