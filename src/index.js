import './scss/main.scss';
import core from './app/core/core';

class Slider {
  constructor (el, data) {
    this.el = el;
    this.data = data;
    this.leftArrow = document.createElement('i');
    this.rightArrow = document.createElement('i');
    this.count = 0;
    this.previewType = 3;
    this.mediaQuerySm = '(max-width: 767px)';
    this.mediaQueryMd = '(min-width: 768px)';
    this.mediaQueryLg = '(min-width: 1024px)';
    this.initialize = core; // metodu initialize smo premestili u poseban fajl
  }
}

window.Slider = Slider;