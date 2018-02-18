class Input
{
	constructor()
	{
		document.addEventListener('keydown',this.pressedKey.bind(this));
		document.addEventListener('keyup',this.releasedKey.bind(this));
		this.pressedKeys = [];
	}


	pressedKey(event)
	{
		// this.action();38 40 37 39
		switch(event.keyCode)
		{
			case 8: //backspace
				this.pressedKeys.player2Back = true;
				break;
			case 74: //J
				this.pressedKeys.player1Back = true;
				break;
			case 13: //ENTER
				this.pressedKeys.player2Action = true;
				break;
			case 75: //K
				this.pressedKeys.player1Action = true;
				break;
			case 38: //UP Arrow
				this.pressedKeys.player2Up = true;
				break;
			case 87: //W
				this.pressedKeys.player1Up = true;
				break;
			case 40: //Down Arrow
				this.pressedKeys.player2Down = true;
				break;
			case 83: //S
				this.pressedKeys.player1Down = true;
				break;
			case 37: //Left Arrow
				this.pressedKeys.player2Left = true;
				break;
			case 65: //A
				this.pressedKeys.player1Left = true;
				break;
			case 39: //Right Arrow
				this.pressedKeys.player2Right = true;
				break;
			case 68: //D
				this.pressedKeys.player1Right = true;
				break;
			default:
				// console.log(event.keyCode);
				break; 
		}
	}

	releasedKey(event)
	{
		switch(event.keyCode)
		{
			case 8: //backspace
				this.pressedKeys.player2Back = false;
				break;
			case 74: //J
				this.pressedKeys.player1Back = false;
				break;
			case 13: //ENTER
				this.pressedKeys.player2Action = false;
				break;
			case 75: //K
				this.pressedKeys.player1Action = false;
				break;
			case 38: //UP Arrow
				this.pressedKeys.player2Up = false;
				break;
			case 87: //W
				this.pressedKeys.player1Up = false;
				break;
			case 40: //Down Arrow
				this.pressedKeys.player2Down = false;
				break;
			case 83: //S
				this.pressedKeys.player1Down = false;
				break;
			case 37: //Left Arrow
				this.pressedKeys.player2Left = false;
				break;
			case 65: //A
				this.pressedKeys.player1Left = false;
				break;
			case 39: //Right Arrow
				this.pressedKeys.player2Right = false;
				break;
			case 68: //D
				this.pressedKeys.player1Right = false;
				break;
			default:
				// console.log(event.keyCode);
				break; 
		}

	}

	heldKey(key)
	{
		return this.pressedKeys[key];
	}

	action()
	{
		alert('AAA!');
	}

	keyUp(cb)
	{
		cb();
	}

	keyDown(cb)
	{
		cb();

	}

	keyLeft(cb)
	{
		cb();

	}

	keyRight(cb)
	{
		cb();

	}

	keyAction(cb)
	{
		cb();
	}

	keyBack(cb)
	{
		cb();
	}

	beginFrame()
	{
		// this.pressedKeys = [];
	}

	endFrame()
	{
		this.pressed = true;
	}
}