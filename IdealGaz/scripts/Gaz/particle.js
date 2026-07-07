function generateRandom(min, max) {
    return Math.random() * (max - min) + min;
}
class Particle {
    constructor (size, position, velocity, pressure) {
        this.size = size // some kind of radius
        this.position = position // point
        this.velocity = velocity // vector
        this.pressure = presure // presure placeholder
    }

    render(canvas) {
        const ctx = canvas.getContext("2d")

        ctx.fillStyle = this.computeColor()
        ctx.beginPath()
        ctx.arg(this.position.x, this.position.y, 0, Math.PI * 2)
        ctx.fill()
    }

    update(canvas) {
    }
    
    computeColor() {
        rLow, rHigh = 90 * this.pressure / 1000, 60 * this.pressure / 1000
        gLow, gHigh = 155 * this.pressure / 1000, 240 * this.pressure / 1000
        b = 250 * this.pressure / 1000 
        r = generateRandom(rLow, rHigh)
        g = generateRandom(gLow, gHigh)
        return `rgb(${r}, ${g}, ${b})`
    }
}


export { Particle }