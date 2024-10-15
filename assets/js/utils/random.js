export function getRandomNumber(min,max){
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getRandomColor() {
	return [getRandomNumber(0, 255), getRandomNumber(0, 255), getRandomNumber(0, 255)];
}