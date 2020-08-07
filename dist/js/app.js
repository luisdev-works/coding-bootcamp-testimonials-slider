let slideIndex = 1;
showSlides(slideIndex);

//Next previous controls
const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

//Thumbnail image controls
const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  let slides = document.getElementsByClassName('slides');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      //prev
      e.preventDefault();
      slideIndex--;
      showSlides(slideIndex);
      break;
    case 39:
      //next
      e.preventDefault();
      slideIndex++;
      showSlides(slideIndex);
      break;
  }
};
