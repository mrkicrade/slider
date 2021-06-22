import { moveRight, moveLeft } from '../events/events';
import { render } from '../render/render';
import { renderSlides } from '../render/render';
import { calculateSize } from '../render/render';

export default function initialize () {
    this.render = render;
    this.renderSlides = renderSlides;
    this.calculateSize = calculateSize;
    this.render();
    this.renderSlides(this.data);
    this.checkScreenResolution();
    this.moveLeft = moveLeft;
    this.moveRight = moveRight;
    this.leftArrow.addEventListener('click', this.moveLeft.bind(this));
    this.rightArrow.addEventListener('click', this.moveRight.bind(this));
    window.addEventListener('resize', this.checkScreenResolution.bind(this));
}