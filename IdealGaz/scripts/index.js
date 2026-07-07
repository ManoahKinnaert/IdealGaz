import { Particle } from './Gaz/particle.js'
import { Point } from './Gaz/math/point.js'
import { Vector } from './Gaz/math/vector.js'

let PRESSURE = 1000
let T = 273

const canvas = document.getElementById("gaz-container")
const canvasMinHeight = 200
canvas.width = 400
canvas.height = 400
var ctx = canvas.getContext("2d");

let particles = []
let running = true 

// sliders
const NSlider = document.getElementById("n-slider")
const TSlider = document.getElementById("T-slider")
const PSlider = document.getElementById("p-slider")
const VSlider = document.getElementById("V-slider")

// slider events
NSlider.addEventListener("input", () => {
    let currentAmount = particles.length 
    let delta = currentAmount - NSlider.value 
    if (delta >= 0) {
        for (let i=0; i < delta; i++) particles.pop()
    } else {
        spawnN(-delta)
    }
})

TSlider.addEventListener("input", () => { T = TSlider.value })
PSlider.addEventListener("input", () => { PRESSURE = PSlider.value })
VSlider.addEventListener("input", () => { canvas.height = VSlider.value })

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function spawnNew(radius=10) {
    let particle = new Particle(radius, new Point(randomInt(20, canvas.width - 20), randomInt(20, canvasMinHeight - 20)), PRESSURE, T)
    particles.push(particle)
}

function spawnN(n=5) {
    for (let i=0; i < n; i++) spawnNew()
}

function update(val, index, array) {
    val.update(canvas, PRESSURE, T)
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