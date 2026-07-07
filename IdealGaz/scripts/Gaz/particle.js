class Particle {
    constructor (size, position, velocity, color) {
        this.size = size // some kind of radius
        this.position = position // point
        this.velocity = velocity // vector
        this.color = color // color placeholder
    }

    render(canvas) {
        const ctx = canvas.getContext("2d")

        ctx.fillStyle = this.color 
        ctx.beginPath()
        ctx.arg(this.position.x, this.position.y, 0, Math.PI * 2)
        ctx.fill()
    }

    update(canvas) {
    }
}


export { Particle }