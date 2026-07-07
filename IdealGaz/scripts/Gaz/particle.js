function generateRandom(min, max) {
    return Math.random() * (max - min) + min
}

class Particle {
    constructor(size, position, pressure, temperature) {
        this.size = size
        this.position = position
        this.temperature = temperature
        this.pressure = pressure
        this.color = this.computeColor()
    }

    render(canvas) {
        const ctx = canvas.getContext("2d")

        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }

    update() {
    }

    computeColor() {
        const p = this.pressure / 1000
        const t = Math.min(Math.max((this.temperature - 200) / 200, 0), 1)

        const r = Math.round((generateRandom(60, 90) + 80 * t) * p)
        const g = Math.round((generateRandom(155, 240) + 20 * (1 - Math.abs(t - 0.5) * 2)) * p)
        const b = Math.round((250 - 100 * t) * p)

        return `rgb(${Math.min(r, 255)}, ${Math.min(g, 255)}, ${Math.min(b, 255)})`
    }
}

export { Particle }