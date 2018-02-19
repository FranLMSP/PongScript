class Player
{
	constructor(x, y, w=20, h=20*5, acceleration = 0.2, friction=0.1, max_speed = 5)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

		this.points = 0;

		this.speed = 0;
		this.acceleration = acceleration;
		this.maxSpeed = max_speed;
		this.friction = friction;

		this.direction = 'u';
	}

	move()
	{
		this.y += this.speed;
	}

	up()
	{
		this.direction = 'u';
		this.speedUp(-1);
	}

	down()
	{
		this.direction = 'd';
		this.speedUp(1);
	}

	speedUp(minus)
	{
		if(minus>0)
		{
			this.speed += this.acceleration;
			if(this.speed>this.maxSpeed)
				this.speed = this.maxSpeed;
		}
		else
		{
			this.speed -= this.acceleration;
			if(this.speed<-this.maxSpeed)
				this.speed = -this.maxSpeed;
		}
	}

	speedDown()
	{
		if(this.speed < 0)
		{
			this.speed += this.friction;
			if(this.speed > 0)
				this.speed = 0;
		}
		else if(this.speed > 0)
		{
			this.speed -= this.friction;
			if(this.speed < 0)
				this.speed = 0;
		}
	}

	limits()
	{
		if (this.y<=20)
		{
			this.speed = 0;
			this.y = 20;
		}
		if(this.y+this.h>=(480-20))
		{
			this.speed = 0;
			this.y = (480-20)-this.h;
		}
	}

	update()
	{
		this.move();
		this.speedDown();
		this.limits();
	}


}