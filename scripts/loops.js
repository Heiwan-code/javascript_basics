// const cardGeneratorNumber = document.getElementById("cardGeneratorNumber")
const cardGeneratorNumber = document.querySelector("#cardGeneratorNumber")
const cardGeneratorBtn = document.querySelector("#cardGeneratorBtn")
const cardGeneratorUpgrade = document.querySelector("#cardGeneratorUpgrade")
const cardGeneratorBtnClear = document.querySelector("#cardGeneratorBtnClear")

const cardGrid = document.querySelector("#cardGrid")

cardGeneratorBtn.addEventListener("click", generateCards)
cardGeneratorUpgrade.addEventListener("click", upgradeCards)
cardGeneratorBtnClear.addEventListener("click", clearAllCards)

function upgradeCards() {
    const allCards = document.querySelectorAll("#cardGrid .card")

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }

    allCards.forEach(card => {
        card.innerHTML+= `
        <button onclick="test(this)">
        Test Button
        </button>
        `
    })
}

function test() {
    console.log("test")
}

function generateCards() {
    // console.log(typeof(cardGeneratorNumber.value))
    let cardsToMake = ~~cardGeneratorNumber.value

    while (cardsToMake > 0) {
        makeCard(cardsToMake)
        if (decreaseLoopInteration) {
            cardsToMake--
        }
    }

    // for (
    //     let cardsToMake = ~~cardGeneratorNumber.value; 
    //     cardsToMake > 0; 
    //     cardsToMake--
    // ) {

    //     makeCard(cardsToMake)

    // }
}

function makeCard(cardIndex) {
    const cardCount = cardGrid.childElementCount
    const card = `
    <div class="card">
        <h1>Card #${cardCount}</h1>
        <p>Lorem</p>
    </div>`
    cardGrid.innerHTML += card
}

function clearAllCards() {
    cardGrid.innerHTML = ""
}