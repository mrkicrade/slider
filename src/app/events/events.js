export function moveRight () {
  this.leftArrowBtn.style.display = 'block';
  this.slidersContainer.style.visibility = 'visible';
  this.slidersContainer.style.transition = '1s';
  this.slidersContainer.style.transform = `translateX(${this.count - 100}%)`;
  this.count -= 100;
  console.log(this.count);
  // if (this.count === -200) {
  //   this.rightArrowBtn.style.display = 'none';
  // }
}

export function moveLeft () {
  this.rightArrowBtn.style.display = 'block';
  this.slidersContainer.style.visibility = 'visible';
  this.slidersContainer.style.transition = '1s';
  this.slidersContainer.style.transform = `translateX(${this.count + 100}%)`;
  this.count += 100;
  // if (this.count === 0) {
  //   this.leftArrowBtn.style.display = 'none';
  // }
}