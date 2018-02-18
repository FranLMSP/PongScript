class Input
{
	constructor(input_mode = 'keydown')
	{
		document.addEventListener(input_mode,this.pressedKey.bind(this));

		this.pressed = false;
	}


	pressedKey(event)
	{
		// this.action();38 40 37 39
		if(this.pressed===false)
		{

			switch(event.keyCode)
			{
				case 8:
				case 74:
					this.keyBack(function(){});
					break;
				case 13: //ENTER
				case 75: //K
					this.keyAction(function(){});
					break;
				case 38: //UP Arrow
				case 87: //W
					this.keyUp(function(){});
					break;
				case 40: //Down Arrow
				case 83: //S
					this.keyDown(function(){});
					break;
				case 37: //Left Arrow
				case 65: //A
					this.keyLeft(function(){});
					break;
				case 39: //Right Arrow
				case 68: //D
					this.keyRight(function(){});
					break;
				default:
					console.log(event.keyCode);
					break; 
			}

			this.endFrame();
		}
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
		this.pressed = false;
	}

	endFrame()
	{
		this.pressed = true;
	}
}