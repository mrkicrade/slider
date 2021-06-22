export function moveRight () {
  this.countInfinity++;
  this.leftArrowBtn.style.display = 'block';
  const matrix = new WebKitCSSMatrix(this.sliderContainer.style.transform);
  console.log('translateX: ', matrix);
  this.sliderContainer.style.transform = `translateX(${matrix.m41 - this.sliderElement.offsetWidth}px)`;

  if (this.countInfinity * this.sliderElement.offsetWidth >= this.data.length * (this.sliderElement.offsetWidth / this.previewType)) {
    this.dataInfinity.forEach(el => this.data.push(el));
    this.renderSlides(this.dataInfinity);
  }
}

export function moveLeft () {
  // ogranici ako je doslo do kraja da se izgubi strelica
  this.countInfinity--;
  if (this.countInfinity === 0) {
    this.leftArrowBtn.style.display = 'none';
  }
  this.rightArrowBtn.style.display = 'block';
  const matrix = new WebKitCSSMatrix(this.sliderContainer.style.transform);
  this.sliderContainer.style.transform = `translateX(${matrix.m41 + (this.sliderElement.offsetWidth)}px)`;
}