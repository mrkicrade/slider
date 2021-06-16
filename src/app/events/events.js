export function moveRight () {
  this.leftArrow.style.display = 'block';
  this.slidersContainer.style.visibility = 'visible';
  this.slidersContainer.style.transition = '1s';
  this.slidersContainer.style.transform = `translateX(${this.count - 100}%)`;
  this.count -= 100;
  if (this.count === -200) {
    this.rightArrow.style.display = 'none';
  }
}

export function moveLeft () {
  this.rightArrow.style.display = 'block';
  this.slidersContainer.style.visibility = 'visible';
  this.slidersContainer.style.transition = '1s';
  this.slidersContainer.style.transform = `translateX(${this.count + 100}%)`;
  this.count += 100;
  if (this.count === 0) {
    this.leftArrow.style.display = 'none';
  }
}