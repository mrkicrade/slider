
export default function checkMediaQuery () {

  if (this.sliderElement.offsetWidth < 768) {
    this.previewType = 1;
  } else if (this.sliderElement.offsetWidth >=768 && this.sliderElement.offsetWidth < 1023) {
    // console.log('md screen');
    this.previewType = 3;
  }
}
