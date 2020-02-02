class Ball {

	constructor(r = 40, x = (640 / 2), y = (480 / 2), min_speed = 1, max_speed = 10, friction = 0.3, aceleration = 0.1) {
		this.r = r
		this.x = x
		this.y = y

		this.vspeed = 0
		this.hspeed = min_speed

		this.aceleration = aceleration
	}

	update(player) {
		for(let angle = 0; angle <= 360; angle += 0.25) {
			// let x = (this.r * Math.sin(angle * (180 / Math.PI) )) + this.x
			// let y = (this.r * Math.cos(angle * (180 / Math.PI) )) + this.y
			let x = (Math.cos(angle * Math.PI / 180) * this.r + this.x);
		    let y = (Math.sin(angle * Math.PI / 180) * this.r + this.y);

			if( (x >= player.x && x <= (player.x + player.w) ) &&// horizontal collision
				(y >= player.y && y <= (player.y + player.h) ) // vertical collision
			 ) {
				this.hspeed = this.hspeed >= 0 ? this.hspeed + this.aceleration : this.hspeed - this.aceleration;

				let diagonalCol = false

				//RIGTH COLLISION
				if((angle >= 0 && angle <= 22.5) || (angle >= 337.5 && angle <= 360)){
					this.hspeed = this.hspeed >= 0 ? -this.hspeed : this.hspeed
					this.fixCollisions('right', x, y, player)
				}

				//LEFT COLLISION
				if(angle >= 157.5 && angle <= 202.5) {
					this.hspeed = this.hspeed < 0 ? -this.hspeed : this.hspeed
					this.fixCollisions('left', x, y, player)
				}

				//TOP COLLISION
				if(angle >= 247.5 && angle <= 292.5) {
					this.vspeed = this.vspeed < 0 ? -this.vspeed : this.vspeed
					this.fixCollisions('top', x, y, player)
				}

				//BOTTOM COLLISION
				if(angle >= 67.5 && angle <= 112.5) {
					this.vspeed = this.vspeed >= 0 ? -this.vspeed : this.vspeed
					this.fixCollisions('bottom', x, y, player)
				}


				//DIAGONAL COLLISIONS

				//TOP LEFT COLLISION
				if(angle > 202.5 && angle < 247.5) {
					this.vspeed = this.vspeed < 0 ? -this.vspeed : this.vspeed
					this.hspeed = this.hspeed < 0 ? -this.hspeed : this.hspeed
					diagonalCol = true
					this.fixCollisions('left', x, y, player)
					this.fixCollisions('top', x, y, player)
				}

				//TOP RIGHT COLLISION
				if(angle > 292.5 && angle < 337.5) {
					this.vspeed = this.vspeed < 0 ? -this.vspeed : this.vspeed
					this.hspeed = this.hspeed >= 0 ? -this.hspeed : this.hspeed
					diagonalCol = true
					this.fixCollisions('right', x, y, player)
					this.fixCollisions('top', x, y, player)
				}

				//BOTTOM RIGHT COLLISION
				if(angle > 22.5 && angle < 67.5) {
					this.vspeed = this.vspeed >= 0 ? -this.vspeed : this.vspeed
					this.hspeed = this.hspeed >= 0 ? -this.hspeed : this.hspeed
					diagonalCol = true
					this.fixCollisions('right', x, y, player)
					this.fixCollisions('bottom', x, y, player)
				}

				//BOTTOM LEFT COLLISION
				if(angle > 112.5 && angle < 157.5) {
					this.vspeed = this.vspeed >= 0 ? -this.vspeed : this.vspeed
					this.hspeed = this.hspeed < 0 ? -this.hspeed : this.hspeed
					diagonalCol = true
					this.fixCollisions('left', x, y, player)
					this.fixCollisions('bottom', x, y, player)
				}

				if(player.speed != 0 )
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

	fixCollisions(type = null, x, y, player) {
		if(type == 'top') {
			const playerBottom = player.y + player.h
			const offset = playerBottom - y

			if(offset > 0) {
				this.y += offset
			}
		} else if(type == 'bottom') {
			const offset = y - player.y

			if(offset > 0) {
				this.y -= offset
			}
		} else if(type == 'left') {
			const playerRight = player.x + player.w
			const offset = playerRight - x

			if(offset > 0) {
				this.x += offset
			}
		} else if(type == 'right') {
			const offset = x - player.x

			if(offset > 0) {
				this.x -= offset
			}
		}
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
