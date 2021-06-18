import { moveRight, moveLeft } from '../events/events';
import render from '../render/render';
import checkScreenResolution from '../helper/checkScreenResolution';

export default function initialize () {
    // provera rezolucije checkScreenResolution
    this.checkScreenResolution = checkScreenResolution;
    this.render = render;
    this.render();
    if (this.lazyLoad === true) {
        document.querySelectorAll('img.slider__slider-container__slide__img').forEach(img => {
            this.imageObserver.observe(img);
        })
    }
    this.checkScreenResolution();
    this.moveLeft = moveLeft;
    this.moveRight = moveRight;
    this.leftArrow.addEventListener('click', this.moveLeft.bind(this));
    this.rightArrow.addEventListener('click', this.moveRight.bind(this));
    window.addEventListener('resize', this.checkScreenResolution);
}