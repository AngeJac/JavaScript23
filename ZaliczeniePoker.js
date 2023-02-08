// (color: 1=spade / 2=heart / 3=club / 4=diamond)
// (value: 11=Jack / 12=Queen / 13=King / 14=Ace)

// stworzenia klasy Card
class Card {
	constructor(color, value) {
		this.color = color
		this.value = value
	}
	toString() {
		return `${this.getFigure()} ${this.getColor()}`
	}
	getFigure() {
		switch (this.value) {
			case 11:
				return 'Jack'
			case 12:
				return 'Queen'
			case 13:
				return 'King'
			case 14:
				return 'Ace'
			default:
				return this.value
		}
	}
	getColor() {
		switch (this.color) {
			case 1:
				return 'Spade'
			case 2:
				return 'Heart'
			case 3:
				return 'Club'
			case 4:
				return 'Diamond'
		}
	}
}

// funkcja tworząca talię kart - liczbowo
function createDeck() {
	const deck = []
	for (let value = 2; value <= 14; value++) {
		for (let color = 1; color <= 4; color++) {
			const card = new Card(color, value)
			deck.push(card)
		}
	}
	return deck
}

const deck = createDeck()

// losowanie 5 kart
function cardDraw(cardDeck) {
	let handCards = []
	for (i = 0; i <= 4; i++) {
		let randomCard = cardDeck.splice(Math.random() * cardDeck.length, 1)
		handCards.push(randomCard[0])
	}
	return handCards
}
// const hand = cardDraw(deck);

const hand = [new Card(1, 14), new Card(1, 13), new Card(1, 12), new Card(1, 11), new Card(1, 10)]

// // sprawdzanie układów
// function findRoyalFlush(ourCards) {
// 	let isRoyalFlush = false
// 	let colorCounter = 0
// 	for (let i = 0; i <= ourCards.length - 1; i++) {
// 		if (ourCards[i].color === ourCards[i + 1].color) colorCounter++
// 		else break
// 	}
// 	let valueCounter = 0
// 	for (let j = 0; j <= ourCards.length - 1; j++) {
// 		if (10 <= ourCards[j].value <= 14) valueCounter++
// 		else break
// 	}
// 	if (colorCounter === 4 && valueCounter === 4) isRoyalFlush = true
// 	return isRoyalFlush
// }
// console.log(findRoyalFlush(hand))

// sprawdzanie StraightFlush
function findStraightFlush(ourCards) {
	let isStraightFlush = false
	let colorCounter = 1
	for (let i = 0; i <= ourCards.length - 2; i++) {
		if (ourCards[i].color === ourCards[i + 1].color) colorCounter++
		else break
	}

	let valueCounter = 1
	for (let j = 0; j <= ourCards.length - 2; j++) {
		if (ourCards[j].value === ourCards[j + 1].value + 1) valueCounter++
		else break
	}

	if (colorCounter === 5 && valueCounter === 5) isStraightFlush = true
	return isStraightFlush
}

console.log(
	'Karty::',
	hand.map(card => card.toString())
)
console.log(findStraightFlush(hand))
