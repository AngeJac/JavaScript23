// pusta talia kart
const cardDeck = []

// deklaracja klasy Card
class Card {
	constructor(rank, suit) {
		this.rank = rank
		this.suit = suit
	}
	changeRank(newRank) {
		this.rank = newRank
	}
	changeSuit(newSuit) {
		this.suit = newSuit
	}
}

// Tworzenie liczbowej talii kart
function createCardDeck() {
	for (let i = 2; i <= 14; i++) {
		for (let j = 1; j <= 4; j++) {
			let card = new Card(i, j)
			cardDeck.push(card)
		}
	}
}

// losowanie 5 kart
function drawFiveCards() {
	let fiveCards = []
	for (let i = 0; i < 5; i++) {
		let index = Math.floor(Math.random() * cardDeck.length)
		let card = cardDeck.splice(index, 1)
		fiveCards.push(card[0])
	}
	return fiveCards
}

// pokazanie 5 wylosowanych kart
const showOurHand = () => ourHand.forEach(card => console.log(card))

// sortowanie kart wg figur
const sortOurHandByRank = () => ourHand.sort((a, b) => a.rank - b.rank)

// deklaracje układów:
//sprawdzenie pokera
function straightFlush() {
	let isStraightFlush = false
	let counter = 0
	let color = 0
	for (let i = 0; i < ourHand.length - 1; i++) {
		if (ourHand[i].rank + 1 === ourHand[i + 1].rank) {
			counter == counter++
		} else {
			break
		}
	}
	for (let i = 0; i < ourHand.length - 1; i++) {
		if (ourHand[i].suit === ourHand[i + 1].suit) {
			color == color++
		} else {
			break
		}
	}
	if (counter == 4 && color == 4) {
		isStraightFlush = true
	}
	return isStraightFlush
}

//sprawdzenie karety
function fourOfAKind() {
	let isFourOfAKind = false
	let counter = 0
	for (let i = 0; i < ourHand.length - 1; i++) {
		if (ourHand[i].rank === ourHand[i + 1].rank) {
			counter == counter++
		}
	}
	if (counter == 3 && (ourHand[2].rank === ourHand[3].rank) === ourHand[4].rank) {
		isFourOfAKind = true
	}
	return isFourOfAKind
}

//sprawdzenie fula
function fullHouse() {
	let isFullHouse = false
	let counter = 0
	for (let i = 0; i < ourHand.length - 1; i++) {
		if (ourHand[i].rank === ourHand[i + 1].rank) {
			counter == counter++
		}
	}
	if (counter == 3) {
		isFullHouse = true
	}
	return isFullHouse
}

// sprawdzenie koloru
function flush() {
	let isFlush = false
	let color = 0
	for (let i = 0; i < ourHand.length - 1; i++) {
		if (ourHand[i].suit === ourHand[i + 1].suit) {
			color == color++
		} else {
			break
		}
	}
	if (color == 4) {
		isFlush = true
	}
	return isFlush
}

// sprawdzenie strita
function straight() {
	let isStraight = false
	let counter = 0
	for (let i = 0; i < ourHand.length - 1; i++) {
		if (ourHand[i].rank + 1 === ourHand[i + 1].rank) {
			counter == counter++
		} else {
			break
		}
	}
	if (counter == 4) {
		isStraight = true
	}
	return isStraight
}

// sprawdzenie trójki
function threeOfAKind() {
	let isThreeOfAKind = false
	let counter = 0
	for (let i = 0; i < ourHand.length - 2; i++) {
		if (ourHand[i].rank === ourHand[i + 1].rank && ourHand[i + 1].rank === ourHand[i + 2].rank) {
			counter == counter++
		}
	}
	if (counter == 1) {
		isThreeOfAKind = true
	}
	return isThreeOfAKind
}

// sprawdzenie 2 par
function twoPair() {
	let isTwoPair = false
	let counter = 0
	for (let i = 0; i < ourHand.length - 1; i++) {
		if (ourHand[i].rank === ourHand[i + 1].rank) counter == counter++
	}
	if (counter == 2) {
		isTwoPair = true
	}
	return isTwoPair
}

// sprawdzenie pary
function onePair() {
	let isOnePair = false
	let counter = 0
	for (let i = 0; i < ourHand.length - 1; i++) {
		if (ourHand[i].rank === ourHand[i + 1].rank) counter == counter++
	}
	if (counter == 1) {
		isOnePair = true
	}
	return isOnePair
}

// Przypisanie kartom figur i kolorów
function changeCardNames() {
	ourHand.forEach(card => {
		if (card.suit === 1) {
			card.changeSuit('spade')
		} else if (card.suit === 2) {
			card.changeSuit('heart')
		} else if (card.suit === 3) {
			card.changeSuit('club')
		} else {
			card.changeSuit('diamond')
		}
	})
	ourHand.forEach(card => {
		if (card.rank === 14) {
			card.changeRank('Ace')
		} else if (card.rank === 11) {
			card.changeRank('Jack')
		} else if (card.rank === 12) {
			card.changeRank('Queen')
		} else if (card.rank === 13) {
			card.changeRank('King')
		}
	})
}

// sprawdzenie jaki najwyższy układ mamy na ręku
function whatIsMyHand() {
	if (isStraightFlush === true) console.log(`Najwyższy układ na Twojej ręce to: Straight Flush`)
	else if (isFourOfAKind === true) console.log(`Najwyższy układ na Twojej ręce to: Four of a Kind`)
	else if (isFullHouse === true) console.log(`Najwyższy układ na Twojej ręce to: Full House`)
	else if (isFlush === true) console.log(`Najwyższy układ na Twojej ręce to: Flush`)
	else if (isStraight === true) console.log(`Najwyższy układ na Twojej ręce to: Straight`)
	else if (isThreeOfAKind === true) console.log(`Najwyższy układ na Twojej ręce to: Three of a Kind`)
	else if (isTwoPair === true) console.log(`Najwyższy układ na Twojej ręce to: Two Pair`)
	else if (isOnePair === true) console.log(`Najwyższy układ na Twojej ręce to: One Pair`)
	else console.log(`Najwyższy układ na Twojej ręce to: High Card`)
}

// wywołanie całości
createCardDeck()
ourHand = drawFiveCards()
sortOurHandByRank()
const isStraightFlush = straightFlush()
const isFourOfAKind = fourOfAKind()
const isFullHouse = fullHouse()
const isFlush = flush()
const isStraight = straight()
const isThreeOfAKind = threeOfAKind()
const isTwoPair = twoPair()
const isOnePair = onePair()
whatIsMyHand()
changeCardNames()
showOurHand()
