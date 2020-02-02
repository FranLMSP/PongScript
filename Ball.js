class Ball {

	constructor(r = 40, x = (640 / 2), y = (480 / 2), min_speed = 1, max_speed = 10, friction = 0.3, aceleration = 1) {
		this.r = r
		this.x = x
		this.y = y

		this.vspeed = 0
		this.hspeed = min_speed

		this.aceleration = aceleration
	}

	update(player) {
		for(let angle = 0; angle <= 360; angle += 0.5) {
			let x = (this.r * Math.cos(angle)) + this.x
			let y = (this.r * Math.sin(angle)) + this.y

			if( (x >= player.x && x <= (player.x + player.w) ) &&// horizontal collision
				(y >= player.y && y <= (player.y + player.h) ) // vertical collision
			 ) {
				let diagonalCol = false
				//RIGTH COLLISION
				if(angle >= 157 && angle <= 202)
					this.hspeed = -this.hspeed

				//LEFT COLLISION
				if((angle >= 337 && angle <= 360) || (angle >= 0 && angle <= 225))
					this.hspeed = -this.hspeed

				//UP COLLISION
				if(angle >= 247 && angle <= 292)
					this.vspeed = -this.vspeed

				//DOWN COLLISION
				if(angle <= 112 && angle >= 67)
					this.vspeed = -this.vspeed


				//DIAGONAL COLLISIONS

				//UP LEFT COLLISION
				if(angle >= 202 && angle <= 247) {
					this.vspeed = (this.vspeed < 0) ? -this.vspeed : this.vspeed
					this.hspeed = (this.hspeed < 0) ? -this.hspeed : this.hspeed
					diagonalCol = true
				}

				//UP RIGHT COLLISION
				if(angle >= 292 && angle <= 337) {
					this.vspeed = (this.vspeed < 0) ? -this.vspeed : this.vspeed
					this.hspeed = (this.hspeed > 0) ? -this.hspeed : this.hspeed
					diagonalCol = true
				}

				//DOWN RIGHT COLLISION
				if(angle >= 22 && angle <= 67) {
					this.vspeed = (this.vspeed > 0) ? -this.vspeed : this.vspeed
					this.hspeed = (this.hspeed > 0) ? -this.hspeed : this.hspeed
					diagonalCol = true
				}

				//DOWN LEFT COLLISION
				if(angle >= 112 && angle <= 157) {
					this.vspeed = (this.vspeed > 0) ? -this.vspeed : this.vspeed
					this.hspeed = (this.hspeed < 0) ? -this.hspeed : this.hspeed
					diagonalCol = true
				}

				if(player.speed !=0 && !diagonalCol)
					this.vspeed = player.speed / 2

				break
			}
		}

		this.x += this.hspeed
		this.y += this.vspeed

		if((this.y - this.r) < 0)
			this.y = this.r

		if((this.y + this.r) > 480)
			this.y = 480 - this.r

		return this.border()
	}

	border() {
		if(this.y - this.r <= 0)
			this.vspeed = -this.vspeed
		else if(this.y + this.r >= 480)
			this.vspeed = -this.vspeed

		if(this.x + this.r < 0)
			return 2
		else if(this.x - this.r > 640)
			return 1
		else
			return 0
	}
}
