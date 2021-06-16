export function moveRight () {
  this.leftArrow.style.display = 'block';
  this.sliderElement.style.visibility = 'visible';
  this.sliderElement.style.transition = '1s';
  this.sliderElement.style.transform = `translateX(${this.count - 100}%)`;
  this.count -= 100;
  if (this.count === -200) {
    this.rightArrow.style.display = 'none';
  }
}

export function moveLeft () {
  this.rightArrow.style.display = 'block';
  this.sliderElement.style.visibility = 'visible';
  this.sliderElement.style.transition = '1s';
  this.sliderElement.style.transform = `translateX(${this.count + 100}%)`;
  this.count += 100;
  if (this.count === 0) {
    this.leftArrow.style.display = 'none';
  }
}