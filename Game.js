
class Game
{
	constructor()
	{
		this.graphics = new Graphics(640,480,'#263238');


		
		this.inputs = new Input();
		this.setActions();

		this.graphics.drawSnake(this.snake);

		// setInterval(this.update.bind(this),100);
		setInterval(this.update.bind(this),100);
	}

	setActions()
	{
		this.inputs.keyUp = (function(){

		}).bind(this);

		this.inputs.keyDown = (function(){

		}).bind(this);

		this.inputs.keyLeft = (function(){

		}).bind(this);

		this.inputs.keyRight = (function(){

		}).bind(this);
	}

	update()
	{
		this.inputs.beginFrame();

		this.draw();

	}

	draw()
	{
		this.graphics.drawBackground();
	}
}