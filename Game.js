
class Game
{
	constructor()
	{
		this.graphics = new Graphics(640,480,'#263238');


		
		this.inputs = new Input('keydown');
		this.player1 = new Player(20,20);
		this.setActions();

		// setInterval(this.update.bind(this),100);
		setInterval(this.update.bind(this),1000/60);
	}

	setActions()
	{
	}

	update()
	{
		this.inputs.beginFrame();

		if(this.inputs.heldKey('player1Up'))
			this.player1.up();
		if(this.inputs.heldKey('player1Down'))
			this.player1.down();

		this.player1.update();
		this.draw();

	}

	draw()
	{
		this.graphics.drawBackground();
		this.graphics.drawPlayer(this.player1);
	}
}