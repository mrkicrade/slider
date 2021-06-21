import './scss/main.scss';
import core from './app/core/core';
import lazy from './app/lazy/lazy';
import checkScreenResolution from './app/helper/checkScreenResolution';

class Slider {
  constructor (el, data, options) {
    this.el = el;
    this.data = data;
    this.checkScreenResolution = checkScreenResolution;
    this.infinity = options.infinity;
    this.lazyLoad = options.lazyLoad;
    this.leftArrow = document.createElement('i');
    this.rightArrow = document.createElement('i');
    this.count = 0;
    this.countInfinity = 1;
    this.previewType = 6;
    this.lazy = lazy;
    this.lazy();
    // this.mediaQuerySm = '(max-width: 767px)';
    // this.mediaQueryMd = '(min-width: 768px)';
    // this.mediaQueryLg = '(min-width: 1024px)';
    this.initialize = core; // metodu initialize smo premestili u poseban fajl
  }
}

window.Slider = Slider;