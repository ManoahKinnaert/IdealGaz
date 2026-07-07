import { Vector } from './math/vector.js'

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
        this.velocity = new Vector(generateRandom(-5, 5), generateRandom(-5, 5))
    }

    render(canvas) {
        const ctx = canvas.getContext("2d")

        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }

    update(canvas, pressure, temperature) {
        if (pressure != this.pressure || temperature != this.temperature) {
            this.pressure = pressure
            this.temperature = temperature
            this.color = this.computeColor()
        }
        // movement
        // right wall
        if (this.position.x + this.size >= canvas.width) {
            this.position.x = canvas.width - this.size;
            this.velocity.bounce_east();
        }

        // left wall
        if (this.position.x - this.size <= 0) {
            this.position.x = this.size;
            this.velocity.bounce_west();
        }

        // bottom wall
        if (this.position.y + this.size >= canvas.height) {
            this.position.y = canvas.height - this.size;
            this.velocity.bounce_south();
        }

        // top wall
        if (this.position.y - this.size <= 0) {
            this.position.y = this.size;
            this.velocity.bounce_north();
        }

        // move ball
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;


    }

    computeColor() {
        const p = Math.min(Math.max((this.pressure - 1000) / 300, 0), 1)
        const t = Math.min(Math.max(this.temperature / 373, 0), 1)
        const h = Math.min(p + t * 0.5, 1)

        const r = 40 + 215 * h
        const g = 220 - 190 * h
        const b = 255 - 240 * h

        return `rgb(${r | 0}, ${Math.max(0, g | 0)}, ${Math.max(0, b | 0)})`
    }
}

export { Particle }