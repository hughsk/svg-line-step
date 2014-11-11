# svg-line-step
![](http://img.shields.io/badge/stability-stable-green.svg?style=flat)
![](http://img.shields.io/npm/v/svg-line-step.svg?style=flat)
![](http://img.shields.io/npm/dm/svg-line-step.svg?style=flat)
![](http://img.shields.io/npm/l/svg-line-step.svg?style=flat)

Generate the path attribute for a stepped SVG line:

![svg-line-step](http://i.imgur.com/Fcs2nRR.png)

## Usage

[![NPM](https://nodei.co/npm/svg-line-step.png)](https://nodei.co/npm/svg-line-step/)

### `path = step(x1, y1, x2, y2)`

Returns a path attribute for the line between `(x1, y1)` and `(x2, y2)`.

For example:

``` javascript
var createSVG = require('svg-create-element')
var step = require('svg-line-step')
var path = createSVG('path')

path.setAttribute('d', step(0, 0, 100, 100))
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/svg-line-step/blob/master/LICENSE.md) for details.
