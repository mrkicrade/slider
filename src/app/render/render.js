export default function render () {
  this.sliderElement = document.getElementById(this.el);
  this.sliderElement.className = 'slider';
  const sliders_container = document.createElement('div');
  sliders_container.className = 'slider__sliders-container';
  this.sliderElement.appendChild(sliders_container);
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
    sliders_container.appendChild(slideContainer);
  })
  // console.log(sliders_container); 
  // console.log(this.sliderElement); 
  this.leftArrow.classList.add('slider__arrow-left', 'fas', 'fa-chevron-left');
  this.rightArrow.classList.add('slider__arrow-right', 'fas', 'fa-chevron-right');
  this.sliderElement.append(this.leftArrow);
  this.sliderElement.append(this.rightArrow);
  this.leftArrow.style.display = 'none';
}