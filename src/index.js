import core from './app/core/core'
import lazy from './app/lazy/lazy'
import checkScreenResolution from './app/helper/checkScreenResolution'

class Slider {
  constructor (el, data, options) {
    this.el = el
    this.data = data
    this.dataInfinity = [...this.data]
    this.checkScreenResolution = checkScreenResolution
    this.infinity = options.infinity
    this.lazyLoad = options.lazyLoad
    this.auto = options.auto
    this.leftArrow = document.createElement('i')
    this.rightArrow = document.createElement('i')
    this.countInfinity = 0
    this.previewType = 6
    this.lazy = lazy
    this.lazy()
    this.initialize = core // metodu initialize smo premestili u poseban fajl
  }
}

window.Slider = Slider