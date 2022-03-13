
let player = {
	name: "Ifeanyi",
	chips: 200
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEL = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')
let playerEl = document.getElementById("player-el")
let betEl = document.getElementById("bet-el")
betEl.textContent += 0
let bet = 0


// This  prints out the player's details and earnings
playerEl.textContent = player.name + ": $" + player.chips

//This function is generates random numbers from 1 - 11
function getRandomCard() {
	let randomCard = Math.floor(Math.random() * 13) + 1
	if(randomCard === 1){
		return 11
	}
	if (randomCard > 10) {
		return 10
	}
	return randomCard
	}

//This function deals out cards to the player
function startGame() {
	isAlive = true
	//this makes sure the player has placed their bets before allowing to play
  if (bet === 0) {
  	alert("Make your bets")
		
    } else {
  		let firstCard = getRandomCard()
			let secondCard = getRandomCard()
			cards = [firstCard, secondCard]
			sum = firstCard + secondCard
  		renderGame()
		}
}

//This function tells the player his status as well as displaying the players cards
function renderGame() {
	cardEl.textContent = 'Cards: ' 
	for ( let i = 0; i < cards.length; i++){
		cardEl.textContent += cards[i] + " "
	}
	if (sum <= 20) {
	message = 'Do you want to draw a new card?'
    isAlive = true
 }  else if (sum === 21) {
	message = 'You have blackjack!'
	hasBlackjack = true
 }  else {
	message = 'You are out of the game!'
	isAlive = false
 }
 messageEl.textContent = message
 sumEL.textContent = 'Sum: ' + sum
 betChecker()
 if (hasBlackjack === true || isAlive === false){
	 timedRefresh(2000)
 }
 

}


//This function draws a new card incase the player ask for more
function newCard() {
	if (isAlive === true && hasBlackjack === false) {
		let newcard = getRandomCard()
	 sum += newcard
	 cards.push(newcard)
     renderGame()
	} 
}

//this functions present the amount of bet the player would like to present
function bet5(){
	bet += 5
	betEl.textContent = 5
	player.chips -= 5
	playerEl.textContent = player.name + ": $" + player.chips

}
function bet10(){
	bet += 10
	betEl.textContent = 10
	player.chips -= 10
	playerEl.textContent = player.name + ": $" + player.chips
	
}
function bet25(){
	bet += 25
	betEl.textContent = 25
	player.chips -= 25
	playerEl.textContent = player.name + ": $" + player.chips
	
}
function bet50(){
	bet += 50
	betEl.textContent = 50
	player.chips -= 50
	playerEl.textContent = player.name + ": $" + player.chips

}
function bet100(){
	bet += 100
	betEl.textContent = 100
	player.chips -= 100
	playerEl.textContent = player.name + ": $" + player.chips

}

//this checks the player bets and tracks their earnings
function betChecker(){
	if (hasBlackjack === true) {
		player.chips += bet * 2
		playerEl.textContent = player.name + ": $" + player.chips
	} else {
		return player.chips
	}
}

//this function is for reloading the page after every game for a specified period of time
function timedRefresh(time) {
	setTimeout("location.reload(true);", time)
}
