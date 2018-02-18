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
		this.layout.fillStyle = this.backgroundColor;
		this.layout.fillRect(0,0,this.canvas.width,this.canvas.height);
	}

	drawRect(x,y,w,h,color)
	{
		this.layout.fillStyle = color;
		this.layout.fillRect(x,y,w,h);
	}

}