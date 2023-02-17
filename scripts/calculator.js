var calculatorButton = document.getElementById("calculator__add-btn-01")
var calculatorInput = document.getElementById("calculator__input-01")
var calculatorSum = document.getElementById("calculator__sum-01")

calculatorButton.addEventListener("click", addToSum);

// var initialSum = 0
var InitialSum = 3400
initSum()

function initSum () {
    calculatorSum.innerText = InitialSum
}

function addToSum () {
    var nextValue = ~~calculatorSum.innerText + ~~calculatorInput.value
    calculatorSum.innerText = nextValue
}


function addPredifnedToSum(valueToAdd) {
    var nextValue = ~~calculatorSum.innerText + ~~valueToAdd
    calculatorSum.innerText = nextValue
}