class Timer
{
	constructor()
	{
		this.start = null;
		this.fps = 1000/60;
		this.lag = 0;

		let date = new Date();
		this.end = date.getTime();
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
		this.start = this.end;
	}

	timerEnd()
	{
		let date = new Date()
		this.end =date.getTime();
	}

	render(update)
	{
		let difference = this.end-this.start;
		// this.lag+=3;
		if(difference < this.fps)
		{		
			console.log('Difference: '+difference+'. Delayed: '+(this.fps-difference)+'. TOTAL: '+(difference+(this.fps-difference)));
			setTimeout(update,(this.fps-difference));
		}
		else
		{
			setTimeout(update,1);

			// setTimeout(update,this.lag);
		}
	}
}