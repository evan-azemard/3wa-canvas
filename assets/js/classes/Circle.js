import Shape from './Shape.js';

class Circle extends Shape{
	constructor(x, y, radius, color) {
		super(x, y, color);
		this.radius = radius;
	}

	draw(context) {
		context.fillStyle = this.color;
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		context.fill();
	}
}

export default Circle;