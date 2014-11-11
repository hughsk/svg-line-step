module.exports = step

function step(x1, y1, x2, y2) {
  var line = []
  var mx = x1 + (x2 - x1) / 2

  line.push('M', x1, y1)
  line.push('L', mx, y1)
  line.push('L', mx, y2)
  line.push('L', x2, y2)

  return line.join(' ')
}
