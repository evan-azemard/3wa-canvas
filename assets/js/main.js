
import Circle from "./classes/Circle.js";
import Rectangle from "./classes/Rectangle.js";
import { getRandomNumber, getRandomColor } from './utils/random.js';
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const button = document.querySelectorAll('button');
let choice = 'circle';

button.forEach((button) => {
	button.addEventListener('click', (e) => {
		choice = e.target.id;
	})
})


canvas.addEventListener('click', (e) => {
	const posX = e.clientX - canvas.getBoundingClientRect().left;
	const posY = e.clientY - canvas.getBoundingClientRect().top;
	const color = `rgb(${getRandomColor()})`;
	
	
	if(choice === 'circle'){
		const rayon = getRandomNumber(10,50);
		const circle = new Circle(posX, posY, rayon, color);
		circle.draw(ctx);
	}else{
		const width = getRandomNumber(50,200);
		const height = getRandomNumber(50,200);
		const rectangle = new Rectangle(posX, posY, width, height, color);
		rectangle.draw(ctx);
	}
})