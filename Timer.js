class Timer
{
	constructor()
	{
		this.start = null;
		this.end = null;
		this.fps = 1000/60;
	}


	frameStart()
	{
		this.timerStart();
	}

	frameEnd(update)
	{
		this.timerEnd();
		this.render(update);
	}

	timerStart()
	{
		this.start = Date.now();
	}

	timerEnd()
	{
		this.end = Date.now();
	}

	render(update)
	{
		let difference = this.end-this.start;
		console.log('Difference: '+difference);
		if(difference < this.fps)
			setTimeout(update,(this.fps-difference));
			// setTimeout(function(){},(this.fps)-(this.end-this.start));
	}
}