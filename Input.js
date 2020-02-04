class Input {
	constructor() {
		document.addEventListener('keydown', this.pressedKey.bind(this))
		document.addEventListener('keyup', this.releasedKey.bind(this))

		document.getElementById('playerOneUp').addEventListener('mousedown', ((e) => {
			e.preventDefault()
			this.pressedKeys.player1Up = true
		}).bind(this))
		document.getElementById('playerOneUp').addEventListener('touchstart', ((e) => {
			e.preventDefault()
			this.pressedKeys.player1Up = true
		}).bind(this))

		document.getElementById('playerTwoUp').addEventListener('mousedown', ((e) => {
			e.preventDefault()
			this.pressedKeys.player2Up = true
		}).bind(this))
		document.getElementById('playerTwoUp').addEventListener('touchstart', ((e) => {
			e.preventDefault()
			this.pressedKeys.player2Up = true
		}).bind(this))

		document.getElementById('playerOneDown').addEventListener('mousedown', ((e) => {
			e.preventDefault()
			this.pressedKeys.player1Down = true
		}).bind(this))
		document.getElementById('playerOneDown').addEventListener('touchstart', ((e) => {
			e.preventDefault()
			this.pressedKeys.player1Down = true
		}).bind(this))
		document.getElementById('playerTwoDown').addEventListener('mousedown', ((e) => {
			e.preventDefault()
			this.pressedKeys.player2Down = true
		}).bind(this))
		document.getElementById('playerTwoDown').addEventListener('touchstart', ((e) => {
			e.preventDefault()
			this.pressedKeys.player2Down = true
		}).bind(this))

		document.getElementById('playerOneUp').addEventListener('mouseup', ((e) => {
			e.preventDefault()
			this.pressedKeys.player1Up = false
		}).bind(this))
		document.getElementById('playerOneUp').addEventListener('touchend', ((e) => {
			e.preventDefault()
			this.pressedKeys.player1Up = false
		}).bind(this))
		document.getElementById('playerTwoUp').addEventListener('mouseup', ((e) => {
			e.preventDefault()
			this.pressedKeys.player2Up = false
		}).bind(this))
		document.getElementById('playerTwoUp').addEventListener('touchend', ((e) => {
			e.preventDefault()
			this.pressedKeys.player2Up = false
		}).bind(this))

		document.getElementById('playerOneDown').addEventListener('mouseup', ((e) => {
			e.preventDefault()
			this.pressedKeys.player1Down = false
		}).bind(this))
		document.getElementById('playerOneDown').addEventListener('touchend', ((e) => {
			e.preventDefault()
			this.pressedKeys.player1Down = false
		}).bind(this))
		document.getElementById('playerTwoDown').addEventListener('mouseup', ((e) => {
			e.preventDefault()
			this.pressedKeys.player2Down = false
		}).bind(this))
		document.getElementById('playerTwoDown').addEventListener('touchend', ((e) => {
			e.preventDefault()
			this.pressedKeys.player2Down = false
		}).bind(this))

		this.pressedKeys = []
	}


	pressedKey(event) {
		switch(event.keyCode) {
			case 8: //backspace
				this.pressedKeys.player2Back = true
				break
			case 74: //J
				this.pressedKeys.player1Back = true
				break
			case 13: //ENTER
				this.pressedKeys.player2Action = true
				break
			case 75: //K
				this.pressedKeys.player1Action = true
				break
			case 38: //UP Arrow
				this.pressedKeys.player2Up = true
				break
			case 87: //W
				this.pressedKeys.player1Up = true
				break
			case 40: //Down Arrow
				this.pressedKeys.player2Down = true
				break
			case 83: //S
				this.pressedKeys.player1Down = true
				break
			case 37: //Left Arrow
				this.pressedKeys.player2Left = true
				break
			case 65: //A
				this.pressedKeys.player1Left = true
				break
			case 39: //Right Arrow
				this.pressedKeys.player2Right = true
				break
			case 68: //D
				this.pressedKeys.player1Right = true
				break
			default:
				// console.log(event.keyCode)
				break
		}
	}

	releasedKey(event) {
		switch(event.keyCode) {
			case 8: //backspace
				this.pressedKeys.player2Back = false
				break
			case 74: //J
				this.pressedKeys.player1Back = false
				break
			case 13: //ENTER
				this.pressedKeys.player2Action = false
				break
			case 75: //K
				this.pressedKeys.player1Action = false
				break
			case 38: //UP Arrow
				this.pressedKeys.player2Up = false
				break
			case 87: //W
				this.pressedKeys.player1Up = false
				break
			case 40: //Down Arrow
				this.pressedKeys.player2Down = false
				break
			case 83: //S
				this.pressedKeys.player1Down = false
				break
			case 37: //Left Arrow
				this.pressedKeys.player2Left = false
				break
			case 65: //A
				this.pressedKeys.player1Left = false
				break
			case 39: //Right Arrow
				this.pressedKeys.player2Right = false
				break
			case 68: //D
				this.pressedKeys.player1Right = false
				break
			default:
				// console.log(event.keyCode)
				break
		}

	}

	heldKey(key) {
		return this.pressedKeys[key]
	}

	action() {
		alert('AAA!')
	}

	keyUp(cb) {
		cb()
	}

	keyDown(cb) {
		cb()
	}

	keyLeft(cb) {
		cb()
	}

	keyRight(cb) {
		cb()
	}

	keyAction(cb) {
		cb()
	}

	keyBack(cb) {
		cb()
	}

	beginFrame() {
		// this.pressedKeys = []
	}

	endFrame() {
		this.pressed = true
	}
}
