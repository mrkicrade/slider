export function moveRight () {
  this.leftArrowBtn.style.display = 'block';
  this.sliderContainer.style.transition = '1s';
  this.sliderContainer.style.transform = `translateX(${this.count - (this.sliderElement.offsetWidth)}px)`;
  console.log(this.count - (this.sliderElement.offsetWidth));
  this.count = this.count - (this.sliderElement.offsetWidth);
  // this.count = this.count - (this.sliderElement.offsetWidth - 2.5);
  this.checkScreenResolution();
  // if (this.count === -200) {
  //   this.rightArrowBtn.style.display = 'none';
  // }
}

export function moveLeft () {
  this.rightArrowBtn.style.display = 'block';
  this.sliderContainer.style.transition = '1s';
  this.sliderContainer.style.transform = `translateX(${this.count + (this.sliderElement.offsetWidth)}px)`;
  this.count = this.count + (this.sliderElement.offsetWidth);
  // if (this.count === 0) {
  //   this.leftArrowBtn.style.display = 'none';
  // }
  this.checkScreenResolution();
}