import { render } from '../render/render';
import { renderSlides } from "../render/render";

export function moveRight () {
  this.countInfinity++;
  console.log(this.countInfinity);

  // this.countInfinity++;
  this.leftArrowBtn.style.display = 'block';
  this.sliderContainer.style.transition = '5s';
  this.sliderContainer.style.transform = `translateX(${this.count - (this.sliderElement.offsetWidth)}px)`;
  // console.log(this.count - this.sliderElement.offsetWidth);
  this.count = this.count - (this.sliderElement.offsetWidth);
  // this.count = 0;
  // console.log(this.count);
  // console.log(this.sliderWidth);
  // console.log(this.sliderWidthPreview);
  // this.sliderStart += this.sliderWidthPreview;
  // console.log(this.sliderStart);

  // if (this.sliderStart === this.sliderWidth) {
  // if (this.count === -2732) {
  // if (this.count === -this.sliderContainer.offsetWidth) {
  if (this.countInfinity === this.data.length / this.previewType) {
    // console.log('radi');
    this.data2 = [...this.data];
    this.data2.forEach(el => this.data.push(el));
    // console.log(this.data);
    // console.log(this.sliderElement);
    // this.sliderStart = 0;
    // this.count = 0;
    this.renderSlides(this.data);
  }

  
    
  

  // if (this.infinity === false) {
  //   if (this.previewType === 6) {
  //     if (this.countInfinity === 3) {
  //       this.rightArrowBtn.style.display = 'none';
  //     }
  //   } else if (this.previewType === 3) {
  //     if (this.countInfinity === 6) {
  //       this.rightArrowBtn.style.display = 'none';
  //     }
  //   } else {
  //     if (this.countInfinity === 18) {
  //       this.rightArrowBtn.style.display = 'none';
  //     }
  //   }
  // } else {
  //   if (this.previewType === 6) {
  //     if (this.countInfinity > 3) {
  //       // console.log(this.sliderContainer);
  //       this.sliderContainer.innerHTML = '';
  //       // console.log(this.sliderContainer);
  //     }
  //   }
  // }
}

export function moveLeft () {
  this.countInfinity--;
  this.rightArrowBtn.style.display = 'block';
  this.sliderContainer.style.transition = '1s';
  this.sliderContainer.style.transform = `translateX(${this.count + (this.sliderElement.offsetWidth)}px)`;
  this.count = this.count + (this.sliderElement.offsetWidth);
  if (this.countInfinity === 1) {
    this.leftArrowBtn.style.display = 'none'
  }
}