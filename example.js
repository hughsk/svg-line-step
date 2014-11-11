var createSVG = require('svg-create-element')
var mousePos = require('mouse-position')
var raf = require('raf')
var step = require('./')

var svg = createSVG('svg')
var path = createSVG('path')
var mouse = mousePos(svg)
var width = window.innerWidth
var height = window.innerWidth

svg.setAttribute('width', width)
svg.setAttribute('height', height)
path.setAttribute('fill', 'none')
path.setAttribute('stroke', '#000')

document.body
  .appendChild(svg)
  .appendChild(path)

raf(update)
function update() {
  var width = window.innerWidth
  var height = window.innerHeight

  raf(update)

  var d = step(width / 2, height / 2, mouse.x, mouse.y)

  path.setAttribute('d', d)
}
