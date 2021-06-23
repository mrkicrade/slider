import { render } from '../render/render'
import { moveRight, moveLeft } from '../events/events'
import { renderSlides } from '../render/render'
import { calculateSize } from '../render/render'
import { autoLoad } from '../render/render'

export default function initialize () {
  this.render = render
  this.renderSlides = renderSlides
  this.calculateSize = calculateSize
  this.render()
  this.renderSlides(this.data)
  this.checkScreenResolution()
  this.autoLoad = autoLoad
  this.autoLoad()
  this.moveLeft = moveLeft
  this.moveRight = moveRight
  this.leftArrow.addEventListener('click', this.moveLeft.bind(this))
  this.rightArrow.addEventListener('click', this.moveRight.bind(this))
  window.addEventListener('resize', this.checkScreenResolution.bind(this))
}