// CREATING BLACK JACK GAME



let firstCard = 10
let secondCard = 6
let sum = firstCard + secondCard 
let hasBlackJack = false 
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = ("Do you want to draw another card?")
        
    } else if (sum === 21){
        message = ("Hurray you've got Blackjack!")
        hasBlackJack = true
    }else{
        message = ("You are out of the game.")
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    console.log("Drawing a new card from the deck!")
    let card = 7
    sum += card
    renderGame()
}













// FINISHED FIRST AND SECOND SECTION OF LEARNING TO CREATE A PASSENGER COUNTER APP

// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// function add(){
//     let sumResult = num1 + num2
//     document.getElementById("sum-el").textContent = "sum " + sumResult
// }

// function sub(){
//     let sumResult = num1 - num2
//     document.getElementById("sum-el").textContent  = "sum " + sumResult
// }

// function divide(){
//     let sumResult = num1 / num2
//     document.getElementById("sum-el").textContent  = "sum " + sumResult
// }

// function multiply(){
//     let sumResult = num1 * num2
//     document.getElementById("sum-el").textContent  = "sum " + sumResult
// }



// let errorEl = document.getElementById("error")

// function error(){
//     errorEl.innerText = "Something went wrong, please try again"
// }


// saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-number")
// let count = 0

// function button(){
//     count += 1
//     countEl.innerText = count
// }

// function save(){
//     let busEntries = " " + count + " - "
//     saveEl.innerText += busEntries
//     countEl.innerText = 0
//     count = 0
//     console.log(count)
// }

// let welcomeEl = document.getElementById("welcome")
// let name = "Effiong Israel Robert"
// let greeting = "Hi  Welcome back to the course "

// welcomeEl.innerText = greeting + name 


// welcomeEl.innerText += " emoji"




// let countNumber = document.getElementById("count-number")
// let count = 0
// function button(){
//     count += 1
//     countNumber.innerText = count
// }
// function buttonMinus(){
//     count -= 1
//     countNumber.innerText = count
// }

// function save(){
//     console.log(count)
// }
