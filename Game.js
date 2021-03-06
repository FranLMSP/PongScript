class Game {
	constructor() {

		this.resolution = {
			width: 640,
			height: 480
		}

		this.graphics = new Graphics(this.resolution.width, this.resolution.height, '#263238')
		this.timer = new Timer()


		this.inputs = new Input('keydown')
		this.player1 = new Player(20, 20)
		this.player2 = new Player(this.resolution.width - 20 - 20, 20)

		this.player1.reset(this.resolution)
		this.player2.reset(this.resolution)

		this.ball = new Ball()
		this.setActions()

		//TEMP
		this.angle = 0
		// setInterval(this.update.bind(this),100)
		setTimeout(this.update.bind(this), 0)
	}

	setActions() {
	}

	update() {
		this.timer.frameStart()


		this.inputs.beginFrame()

		if(this.inputs.heldKey('player1Up'))
			this.player1.up()
		if(this.inputs.heldKey('player1Down'))
			this.player1.down()

		if(this.inputs.heldKey('player2Up'))
			this.player2.up()
		if(this.inputs.heldKey('player2Down'))
			this.player2.down()

		this.player1.update()
		this.player2.update()

		this.ball.update(this.player1)
		let point = this.ball.update(this.player2)

		if(point == 1) {
			this.player1.points++

			console.log('Player 1 points: '+ this.player1.points);

			this.ball = new Ball()

			if(this.player1.points > 9) {
				alert('PLAYER 1 WINS!')
			}
		} else if(point == 2) {

			this.player2.points++
			console.log('Player 2 points: '+ this.player2.points)
			this.ball = new Ball()

			if(this.player2.points > 9) {
				alert('PLAYER 2 WINS!')
			}
		}

		if(this.player1.points > 9 || this.player2.points > 9) {
			this.player1.reset(this.resolution)
			this.player2.reset(this.resolution)
		}

		this.draw()

		this.timer.frameEnd(this.update.bind(this))
	}

	draw() {
		this.graphics.drawBackground()
		this.graphics.drawLines()

		this.graphics.drawNumber(130, 60, this.player1.points)
		this.graphics.drawNumber(450, 60, this.player2.points)

		this.graphics.drawBall(this.ball)
		this.graphics.drawPlayer(this.player1)
		this.graphics.drawPlayer(this.player2)

	}
}
