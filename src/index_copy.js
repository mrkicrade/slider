import './scss/main.scss';
// import './components/slider';

class Slider {
  constructor (el, data) {
    this.el = el;
    this.data = data;
  }

  initialize() {
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
    const left = document.createElement('i');
    left.classList.add('slider__arrow-left', 'fas', 'fa-chevron-left');
    document.body.append(left);
    const right = document.createElement('i'); 
    right.classList.add('slider__arrow-right', 'fas', 'fa-chevron-right');
    document.body.append(right);

    let count = 0;
    left.style.display = 'none';

    right.addEventListener('click', moveRight);
    function moveRight(){
      left.style.display = 'block';
      const slider = document.getElementById('slider');
      slider.style.visibility = 'visible';
      slider.style.transition = '1s';
      slider.style.transform = `translateX(${count - 100}%)`;
      count = count - 100;
      console.log(count);
      if (count === -200) {
        right.style.display = 'none';
      }
    }

    left.addEventListener('click', moveLeft);
    function moveLeft(){
      right.style.display = 'block';
      const slider = document.getElementById('slider');
      slider.style.visibility = 'visible';
      slider.style.transition = '1s';
      slider.style.transform = `translateX(${count + 100}%)`;
      count = count + 100;
      if (count === 0) {
        left.style.display = 'none';
      }
    }
  }
}

const checkMediaQuery = () => {
 
  if (window.innerWidth <= 767) {
    console.log('768');
  }

  if (window.innerWidth >= 768 && window.innerWidth < 1023) {
    console.log('1023');
  }

  if (window.innerWidth >= 1024) {
    console.log('1024');
  }

}

// Initial check
checkMediaQuery();

// Add a listener for when the window resizes
window.addEventListener('resize', checkMediaQuery);




window.Slider = Slider;