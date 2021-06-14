import './scss/main.scss';
// import './components/slider';

export default class Slider {
  constructor (el, data) {
    this.el = el;
    this.data = data;
  }

  initialize() {
    this.sliderElement = document.getElementById(this.el);
    this.data.forEach(slide => {
      const slideImg = document.createElement("img");
      slideImg.src = slide.imgUrl;
      const slideTitle = document.createElement('h1');
      slideTitle.innerText = slide.caption;
      const slideLink = document.createElement('a');
      slideLink.href = slide.redirectLink;
      slideLink.appendChild(slideImg); 
      slideLink.appendChild(slideTitle);
      const slideContainer = document.createElement('div');
      slideContainer.appendChild(slideLink);
      this.sliderElement.appendChild(slideContainer); 
    }) 
  }
}

window.Slider = Slider;