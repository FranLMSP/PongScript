class GameMath {
	constructor() {
        this._cachedSin = []
        this._cachedCos = []
    }

    static getInstance() {
        if (!GameMath._instance) {
            GameMath._instance = new GameMath();
        }

        return GameMath._instance;
    }

    calculate(angle, cache, func) {
        const strAngle = angle.toString()
        if (!cache[strAngle]) {
            cache[strAngle] = func(angle * Math.PI / 180)
        }
        return cache[strAngle]
    }

    sin(angle) {
        return this.calculate(angle, this._cachedSin, Math.sin)
    }

    cos(angle) {
        return this.calculate(angle, this._cachedCos, Math.cos)
    }
}