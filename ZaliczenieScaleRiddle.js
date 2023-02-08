const ballsArr = [1, 1, 1, 1, 1, 1, 1, 1]

function randomIndex() {
	return Math.random() * 7
}

ballsArr.splice(randomIndex(), 1, 2)

function findHeaviestBall(balls) {
	let heavyBallIndex
	firstBucket = balls => {
		let weight = 0
		for (let i = 0; i <= 2; i++) {
			weight += balls[i]
		}
		return weight
	}
	secondBucket = balls => {
		let weight = 0
		for (let i = 3; i <= 5; i++) {
			weight += balls[i]
		}
		return weight
	}
	if (firstBucket(balls) > secondBucket(balls)) {
		if (balls[0] > balls[1]) heavyBallIndex = 0
		else if (balls[0] < balls[1]) heavyBallIndex = 1
		else heavyBallIndex = 2
	} else if (firstBucket(balls) < secondBucket(balls)) {
		if (balls[3] > balls[4]) heavyBallIndex = 3
		else if (balls[3] < balls[4]) heavyBallIndex = 4
		else heavyBallIndex = 5
	} else {
		if (balls[6] > balls[7]) heavyBallIndex = 6
		else heavyBallIndex = 7
	}
	console.log('The heaviest ball has index: ' + heavyBallIndex)
}

findHeaviestBall(ballsArr)
console.log(ballsArr)
