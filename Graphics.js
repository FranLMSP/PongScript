class Graphics
{
	constructor(width, height, background)
	{
		this.canvas = document.getElementById('canv');
		this.canvas.width = width;
		this.canvas.height = height;
		this.layout = this.canvas.getContext('2d');
		this.backgroundColor = background;
		this.drawBackground();
	}

	drawBackground()
	{
		// this.layout.clearRect(true);
		this.layout.fillStyle = this.backgroundColor;
		this.layout.fillRect(0,0,this.canvas.width,this.canvas.height);
	}

	drawRect(x,y,w,h,color)
	{
		this.layout.fillStyle = color;
		this.layout.fillRect(x,y,w,h);
	}

	drawCircle(x,y,r,color,start=0,end=2*Math.PI)
	{
		this.layout.fillStyle = color;
		this.layout.beginPath();
		this.layout.arc(x, y, r, start, end);
		this.layout.fill();
	}

	drawPlayer(player)
	{
		this.drawRect(player.x,player.y,player.w,player.h,'#FFFFFF');
	}

	drawBall(ball,color = '#FFFFFF')
	{
		this.drawCircle(ball.x,ball.y,ball.r,color);
		// this.drawCircle(ball.x,ball.y,ball.r,'#FF0000');
	}

	drawLines()
	{
		this.drawRect((640/2)-10,0  ,20,20*4,'#37474f');
		this.drawRect((640/2)-10,20*5,20,20*4,'#37474f');
		this.drawRect((640/2)-10,20*10,20,20*4,'#37474f');
		this.drawRect((640/2)-10,20*15,20,20*4,'#37474f');
		this.drawRect((640/2)-10,20*20,20,20*4,'#37474f');
	}

	drawNumber(x,y,number)
	{
		switch(number)
		{
			case 0:		
				this.drawRect(x+10 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y, 10, 10,'#bdbdbd');
	
				this.drawRect(x    , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+10, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+20, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+30, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+40, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+50, 10, 10,'#bdbdbd');

				this.drawRect(x+10 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+60, 10, 10,'#bdbdbd');
				break;
			case 1:
				this.drawRect(x+20 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y, 10, 10,'#bdbdbd');

				this.drawRect(x+10 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+10, 10, 10,'#bdbdbd');

				this.drawRect(x+20 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+20, 10, 10,'#bdbdbd');

				this.drawRect(x+20 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+30, 10, 10,'#bdbdbd');

				this.drawRect(x+20 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+40, 10, 10,'#bdbdbd');

				this.drawRect(x+20 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+50, 10, 10,'#bdbdbd');

				this.drawRect(x+10 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+60, 10, 10,'#bdbdbd');
				break;
			case 2:
				this.drawRect(x+10 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+10, 10, 10,'#bdbdbd');

				this.drawRect(x+40 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+20, 10, 10,'#bdbdbd');

				this.drawRect(x+20 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+30, 10, 10,'#bdbdbd');

				this.drawRect(x+10 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+40, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+50, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+60, 10, 10,'#bdbdbd');

				break;
			case 3:
				this.drawRect(x+10 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+10, 10, 10,'#bdbdbd');

				this.drawRect(x+40 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+20, 10, 10,'#bdbdbd');

				this.drawRect(x+20 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+30, 10, 10,'#bdbdbd');

				this.drawRect(x+40 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+40, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+50, 10, 10,'#bdbdbd');

				this.drawRect(x+10 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+60, 10, 10,'#bdbdbd');

				break;
			case 4:
				this.drawRect(x    , y, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+10, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+20, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+30, 10, 10,'#bdbdbd');

				this.drawRect(x+10 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+40, 10, 10,'#bdbdbd');

				this.drawRect(x+40 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+50, 10, 10,'#bdbdbd');

				this.drawRect(x+40 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+60, 10, 10,'#bdbdbd');

				break;
			case 5:
				this.drawRect(x    , y, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+10, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+20, 10, 10,'#bdbdbd');

				this.drawRect(x+40 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+30, 10, 10,'#bdbdbd');

				this.drawRect(x+40 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+40, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+50, 10, 10,'#bdbdbd');

				this.drawRect(x+10 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+60, 10, 10,'#bdbdbd');
				break;
			case 6:

				this.drawRect(x+10 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+10, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+20, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+30, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+40, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+50, 10, 10,'#bdbdbd');

				this.drawRect(x+10 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+60, 10, 10,'#bdbdbd');
				break;
			case 7:
				this.drawRect(x    , y, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y, 10, 10,'#bdbdbd');

				this.drawRect(x+40 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+10, 10, 10,'#bdbdbd');

				this.drawRect(x+30 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+20, 10, 10,'#bdbdbd');

				this.drawRect(x+20 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+30, 10, 10,'#bdbdbd');

				this.drawRect(x+20 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+40, 10, 10,'#bdbdbd');

				this.drawRect(x+20 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+50, 10, 10,'#bdbdbd');

				this.drawRect(x+20 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+60, 10, 10,'#bdbdbd');

				break;
			case 8:

				this.drawRect(x+10 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+10, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+10, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+20, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+20, 10, 10,'#bdbdbd');

				this.drawRect(x+10 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+30, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+30, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+40, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+40, 10, 10,'#bdbdbd');

				this.drawRect(x    , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+10 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+50, 10, 10,'#bdbdbd');
				this.drawRect(x+50 , y+50, 10, 10,'#bdbdbd');

				this.drawRect(x+10 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+20 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+30 , y+60, 10, 10,'#bdbdbd');
				this.drawRect(x+40 , y+60, 10, 10,'#bdbdbd');
				break;
			case 9:
				break;
			case 10:
				break;
			default:
				break;
		}
	}

}