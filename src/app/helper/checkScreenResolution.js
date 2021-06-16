
export default function checkMediaQuery () {

  console.log(this);
  // console.log(this.count);
  // console.log(this.data);

  if (this.innerWidth <= 767) {
    console.log('768');
  }

  if (this.innerWidth >= 768 && this.innerWidth < 1023) {
    console.log('1023');
  }

  if (this.innerWidth >= 1024) {
    console.log(this.count);
    console.log(1024);
    
    // if (this.count === -200) {
    //   this.rightArrowBtn.style.display = 'none';
    // }

    // if (this.count === 0) {
    //   this.leftArrowBtn.style.display = 'none';
    // }
  }

}

//Initial check

checkMediaQuery.bind(this);

// Add a listener for when the window resizes
window.addEventListener('resize', checkMediaQuery);
