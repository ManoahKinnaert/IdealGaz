import { Particle } from './Gaz/particle.js'
import { Point } from './Gaz/math/point.js'
import { Vector } from './Gaz/math/vector.js'

const canvas = document.getElementById("gaz-container")
canvas.width = 400
canvas.height = 400
var ctx = canvas.getContext("2d");

let particles = []
let running = false 

function spawnNew(radius=10) {
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
}