
class Game
{
	constructor()
	{
		this.graphics = new Graphics(640,480,'#263238');
		this.timer = new Timer();

		
		this.inputs = new Input('keydown');
		this.player1 = new Player(20,20);
		this.player2 = new Player(640-20-20,20);

		this.ball = new Ball();
		this.setActions();

		// setInterval(this.update.bind(this),100);
		setTimeout(this.update.bind(this),0);
	}

	setActions()
	{
	}

	update()
	{
		this.timer.frameStart();



		this.inputs.beginFrame();

		if(this.inputs.heldKey('player1Up'))
			this.player1.up();
		if(this.inputs.heldKey('player1Down'))
			this.player1.down();


		if(this.inputs.heldKey('player2Up'))
			this.player2.up();
		if(this.inputs.heldKey('player2Down'))
			this.player2.down();

		this.player1.update();
		this.player2.update();
		this.draw();



		this.timer.frameEnd(this.update.bind(this));
	}

	draw()
	{
		this.graphics.drawBackground();
		// this.graphics.drawBall(this.ball);
		this.graphics.drawPlayer(this.player1);
		this.graphics.drawPlayer(this.player2);

	}
}