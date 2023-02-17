var toDoListNextItem = 
    document.getElementById("toDoListNextItem")

var toDoListButton = 
    document.getElementById("toDoListAddItem")

var toDoListRemoveLast = 
    document.getElementById("toDoListRemoveLast")

var toDoListReset = 
    document.getElementById("toDoListReset")

var toDoListAllItems = 
    document.getElementById("toDoListAllItems")

toDoListButton.addEventListener("click", addToList)
toDoListReset.addEventListener("click", reset)
toDoListRemoveLast.addEventListener("click", removeLastItem)

var listOfItems = []

function addToList() {

    var textToAdd = toDoListNextItem.value

    if (textToAdd == "secretPass") {
        textToAdd += " You win!"
    }

    listOfItems.push(textToAdd)

    toDoListNextItem.value = ""
    var elementToAdd = 
    `<div class='todo-list__item'>
        ${textToAdd}$
        <button onclick="deleteSelf(this)">
        X
        </button>
    </div>`

    toDoListAllItems.innerHTML += elementToAdd

    // toDoListAllItems.innerText = listOfItems

}

function deleteSelf(item) {
    // console.log("delete self");
    // console.log(item)
    
    // console.log(item.parentElement)
    item.parentElement.remove()
}

function reset() {
    toDoListAllItems.innerHTML = "";
}

function removeLastItem() {
    toDoListAllItems.lastChild.remove()

    // listOfItems.pop()
    // toDoListAllItems.innerText = listOfItems
}