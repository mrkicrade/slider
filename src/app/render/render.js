export function render () {
  this.sliderElement = document.getElementById(this.el);
  this.sliderElement.className = 'slider';
  this.checkScreenResolution();
  this.sliderContainer = document.createElement('div');
  this.sliderContainer.className = 'slider__slider-container';
  this.sliderContainer.style.width = `${this.data.length * (this.sliderElement.offsetWidth / this.previewType)}px`;
  this.sliderElement.appendChild(this.sliderContainer);
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
  // renderSlides(this.data).bind(this);
}

export function renderSlides (data) {
  // console.log(data);
  // console.log(this.count);
  this.sliderContainer.style.width = `${this.data.length * (this.sliderElement.offsetWidth / this.previewType)}px`;
  console.log(this.sliderContainer.style.width);
  
  data.forEach(slide => {
    const slideImg = document.createElement("img");
    slideImg.className = 'slider__slider-container__slide__img';
    slideImg.style.height = `${(9 * (this.sliderElement.offsetWidth / this.previewType)) / 16}px`;
    if (this.lazyLoad === true) {
      slideImg.setAttribute('data-src', slide.imgUrl);
    } else {
      slideImg.src = slide.imgUrl;
    }
    if (this.lazyLoad === true) {
      this.imageObserver.observe(slideImg);
    }
    const slideTitle = document.createElement('h1');
    slideTitle.innerText = slide.caption;
    const slideLink = document.createElement('a');
    slideLink.href = slide.redirectLink;
    slideLink.target = '_blank';
    slideLink.appendChild(slideImg); 
    slideLink.appendChild(slideTitle);
    const slideContainer = document.createElement('div');
    slideContainer.className = 'slider__slider-container__slide';
    slideContainer.style.width = `${this.sliderElement.offsetWidth / this.previewType}px`;
    slideContainer.appendChild(slideLink);
    this.sliderContainer.appendChild(slideContainer);
  })
  // this.sliderWidth = this.sliderContainer.offsetWidth;
  // this.sliderWidthPreview = this.sliderContainer.offsetWidth / (this.data.length / this.previewType);
  // console.log(this.sliderContainer.style.width);
  
}
