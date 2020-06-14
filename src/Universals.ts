import tinycolor = require('tinycolor2');
import Victor = require('victor')

let bounds = new Victor(800,800)

export default {
  delta : 0.1,
  bounds,
  teamColors: {
    "boccino": 'white',
    "red":  tinycolor('#ff2424').toRgbString(),
    "green": tinycolor('#5af2b7').toRgbString(),
  },
  launchPos: new Victor(80,bounds.y-80)
}
