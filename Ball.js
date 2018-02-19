class Ball
{
	constructor(r = 40,x=(640/2),y=(480/2), min_speed = 0.3, max_speed = 10, friction = 0.3, aceleration = 1)
	{
		this.r = r;
		this.x = x;
		this.y = y;

		this.vspeed = 0.1;
		this.hspeed = min_speed;

		this.aceleration = aceleration;
	}

	update(player)
	{
		// this.x++;
		// console.log(this.x);

		for(let angle = 0; angle <= 360; angle+=10)
		{
			let x = (this.r * Math.cos(angle)) + this.x;
			let y = (this.r * Math.sin(angle)) + this.y;

			if( (x>= player.x && x <= (player.x+player.w) ) &&// horizontal collision
				(y>= player.y && y <= (player.y+player.h) ) // vertical collision
			 )
			{
				if(angle>=0 && angle <=90)
				{
					this.hspeed = -this.aceleration;

					// this.x-= (x-player.x);
					// this.y-= (y-player.y);
				}
				else if(angle >=90 && angle <=180)
				{
					this.hspeed = this.aceleration;
					
					// this.x+= (x -(player.x+player.w));
					// this.y-= (player.y - y);
				}
				else if(angle >=180 && angle <=270)
				{
					this.hspeed = this.aceleration;
					
					// this.x+= (x -(player.x+player.w));
					// this.y-= (y -(player.y+player.h));
				}
				else if(angle >=270 && angle <=360)
				{					
					this.hspeed = -this.aceleration;

					// this.x+= (x-player.x);
					// this.y-= (x -(player.x+player.w));
				}

				if(player.speed!=0)
					this.vspeed = player.speed/2;
				break;
			}
		}

		this.x+=this.hspeed;
		this.y+=this.vspeed;

		if(this.y-this.r<0)
			this.y = this.r;
		if((this.y+this.r)>480)
			this.y = 480 - this.r;

		this.border();
	}


	border()
	{
		if(this.y-this.r <= 0)
			this.vspeed=-this.vspeed;

		if(this.y+this.r >= 480)
			this.vspeed=-this.vspeed;
	}
}