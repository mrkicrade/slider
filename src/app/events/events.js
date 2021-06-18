export function moveRight () {
  // console.log(this.countInfinity);
  this.countInfinity++;
  this.leftArrowBtn.style.display = 'block';
  this.sliderContainer.style.transition = '1s';
  this.sliderContainer.style.transform = `translateX(${this.count - (this.sliderElement.offsetWidth)}px)`;
  // console.log(this.count - (this.sliderElement.offsetWidth));
  this.count = this.count - (this.sliderElement.offsetWidth);
  // this.checkScreenResolution();
  if (this.infinity === false) {
    if (this.count === (- (2 * (this.sliderElement.offsetWidth)))) {
      this.rightArrowBtn.style.display = 'none';
    }

    if (this.count === 0) {
      this.leftArrowBtn.style.display = 'none';
      this.rightArrowBtn.style.display = 'block';
    }
  } else {
    if (this.countInfinity > 3) {
      // this.count = 0;
      console.log(this.data);
      this.data2 = [...this.data];
      console.log(this.data2);
      this.data2.forEach(el => {
        this.data.push(el);
      })
      console.log(this.data);
    } else if (this.countInfinity === 6) {
      
    } else {

    }
    // console.log(this.count);
    // console.log(data2);
    // if (this.count === (- (2 * (this.sliderElement.offsetWidth)))) {
    //   let data2 = [...this.data];
      // data2.forEach(el => {
      //   this.data.push(el);
      //   // this.count = 0;
      // })
    //   console.log(this.data);
    // }
    // let data2 = [...this.data];
    // data2.forEach(el => {
    //   this.data.push(el);
    //   // this.count = 0;
    // })
  }
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