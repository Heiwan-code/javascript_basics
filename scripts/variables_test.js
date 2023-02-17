console.log("This is JS!")


// variables / maīgie


// string - text
var username = "Heiwan"
// bool - boolean (true, false)
var isAdmin = false

var isLoggedIn = true
// number - integer
var score = 9001
// number - double
var scoreAddition = 0.1

console.log("Hello, ",username, " your score is: ", score, ", admin: ", isAdmin)
score = score + scoreAddition
console.log(username, " your score now is: ", score)

// contidionals / loģiskie testi

9 == "9" // true

9 === "9" // false

if ( isAdmin && isLoggedIn ) {
    console.log("You are an admin!")
} 
else if ( isLoggedIn ) {
    console.log("Welcome, ", username)

    if ( score > 1000 ) {
        console.log("You have a big score!")
    } else if (score > 800) {
        console.log("You're almost in the leaderboard!")
    } else if (score > 400) {
        console.log("Keep going!")
    } else {
        console.log("There's miles to go!")
    }

} 
else {
    console.log("You are now a guest!")
}



*if 

else if

else if

else if


(var but tikai 1)else



// if ( isAdmin == false) {
//     console.log("You are not an admin! Access denied!")
// }


// loops / cikli

