
// Start of Javascript for BlackJack Game

// Object to show the player and amount of chips

let player = {
    name: "Nathan",
    chips: "200",
    sayHello: function() {
        console.log("Hello")
    }
}

// inital variables to setup the game 

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message =   ""


let messageEL = document.querySelector("#message-el")

let cardsEl = document.querySelector("#cards-el")

let sumEL = document.querySelector("#sum-el")

let playerEL = document.querySelector("#player-el")

playerEL.textContent = player.name + ": $" + player.chips


// function to draw a random card from the deck 
// if else statement to determine amount of cards in hand

function getRandomCard() {
let randomNumber =  Math.floor( Math.random() * 13 ) + 1  // cards from 1 to 13

if (randomNumber > 10) {
    return 10

} else if(randomNumber === 1) {
return 11

} else {
    return randomNumber
}                                           

}

// function to start the game

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}


//  function to render the game

function renderGame() {

    // render out first card and second card
    cardsEl.textContent = "Cards: " 

    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEL.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"

    } else if (sum === 21) {
        message = "You have BlackJack!"
        hasBlackJack = true

    } else {
        message = "You are out of the game!"
        isAlive = false;
    }
    
    messageEL.textContent = message
}

// function to grab the new card


function newCard() {

    if(isAlive === true && hasBlackJack === false) {

    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()

    }

}


// for simplicity the J Q and K card === 10 and the A === 11

// End of Javascript for BlackJack Game

// self practice below





