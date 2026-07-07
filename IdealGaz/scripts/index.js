import { Particle } from './Gaz/particle.js'
import { Point } from './Gaz/math/point.js'
import { Vector } from './Gaz/math/vector.js'


let PRESSURE = 1000
let T = 273

const canvas = document.getElementById("gaz-container")
canvas.width = 400
canvas.height = 400
var ctx = canvas.getContext("2d");

let particles = []
let running = true 

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function spawnNew(radius=10) {
    let particle = new Particle(radius, new Point(randomInt(20, canvas.width - 20), randomInt(20, canvas.height - 20)), PRESSURE, T)
    particles.push(particle)
}

function spawnN(n=5) {
}

function update(val, index, array) {
    val.update(canvas)
}

function render(val, index, array) {
    val.render(canvas)
}

function runloop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(update)
    particles.forEach(render)

    if (running) requestAnimationFrame(runloop)
}

spawnNew()
runloop()