export default function render () {
  this.sliderElement = document.getElementById(this.el);
  this.sliderElement.className = 'slider';
  this.slidersContainer = document.createElement('div');
  this.slidersContainer.className = 'slider__sliders-container';
  this.sliderElement.appendChild(this.slidersContainer);
  this.leftArrowBtn = document.createElement('button');
  this.leftArrowBtn.className = 'slider__left-arrow-btn';
  this.rightArrowBtn = document.createElement('button');
  this.rightArrowBtn.className = 'slider__right-arrow-btn';
  this.sliderElement.appendChild(this.leftArrowBtn);
  this.sliderElement.appendChild(this.rightArrowBtn);
  this.leftArrow.classList.add('slider__left-arrow-btn__left', 'fas', 'fa-chevron-left');
  this.rightArrow.classList.add('slider__right-arrow-btn__right', 'fas', 'fa-chevron-right');
  this.leftArrowBtn.appendChild(this.leftArrow);
  this.rightArrowBtn.appendChild(this.rightArrow);
  this.leftArrowBtn.style.display = 'none';
  this.data.forEach(slide => {
    const slideImg = document.createElement("img");
    slideImg.className = 'slider__sliders-container__slide__img';
    slideImg.src = slide.imgUrl;
    const slideTitle = document.createElement('h1');
    slideTitle.innerText = slide.caption;
    const slideLink = document.createElement('a');
    slideLink.href = slide.redirectLink;
    slideLink.target = '_blank';
    slideLink.appendChild(slideImg); 
    slideLink.appendChild(slideTitle);
    const slideContainer = document.createElement('div');
    slideContainer.className = 'slider__sliders-container__slide';
    slideContainer.appendChild(slideLink);
    this.slidersContainer.appendChild(slideContainer);
  })
}