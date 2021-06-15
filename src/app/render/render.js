export default function render () {
  this.sliderElement = document.getElementById(this.el);
  this.sliderElement.className = 'slider';
  this.data.forEach(slide => {
    const slideImg = document.createElement("img");
    slideImg.src = slide.imgUrl;
    const slideTitle = document.createElement('h1');
    slideTitle.innerText = slide.caption;
    const slideLink = document.createElement('a');
    slideLink.href = slide.redirectLink;
    slideLink.target = '_blank';
    slideLink.appendChild(slideImg); 
    slideLink.appendChild(slideTitle);
    const slideContainer = document.createElement('div');
    slideContainer.className = 'slider__container';
    slideContainer.appendChild(slideLink);
    this.sliderElement.appendChild(slideContainer); 
  })
  this.leftArrow.classList.add('slider__arrow-left', 'fas', 'fa-chevron-left');
  this.rightArrow.classList.add('slider__arrow-right', 'fas', 'fa-chevron-right');
  document.body.append(this.leftArrow);
  document.body.append(this.rightArrow);
  this.leftArrow.style.display = 'none';
}