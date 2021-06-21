export function moveRight () {
  this.countInfinity++;
  this.leftArrowBtn.style.display = 'block';
  this.sliderContainer.style.transition = '1s';
  this.sliderContainer.style.transform = `translateX(${this.count - (this.sliderElement.offsetWidth)}px)`;
  this.count = this.count - (this.sliderElement.offsetWidth);
  if (this.infinity === false) {
    if (this.previewType === 6) {
      if (this.countInfinity === 3) {
        this.rightArrowBtn.style.display = 'none';
      }
    } else if (this.previewType === 3) {
      if (this.countInfinity === 6) {
        this.rightArrowBtn.style.display = 'none';
      }
    } else {
      if (this.countInfinity === 18) {
        this.rightArrowBtn.style.display = 'none';
      }
    }
  }
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