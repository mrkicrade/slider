
export default function checkMediaQuery () {

  if (this.innerWidth <= 767) {
    console.log('768');
  }

  if (this.innerWidth >= 768 && this.innerWidth < 1023) {
    console.log('1023');
  }

  if (this.sliderElement.offsetWidth >= 1024) {

    console.log(this.sliderElement.offsetWidth);
    // console.log(slide);

    if (this.count === -200) {
      this.rightArrowBtn.style.display = 'none';
    }

    if (this.count === 0) {
      this.leftArrowBtn.style.display = 'none';
      this.rightArrowBtn.style.display = 'block';
    }
  }

}

//Initial check

// checkMediaQuery();

// Add a listener for when the window resizes

