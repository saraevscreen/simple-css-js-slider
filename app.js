const slides = document.querySelectorAll('.slide');
//const item = document.querySelectorAll('.active');
//console.log('here is img', item.attributes);

for (const slide of slides) {
  console.log(slides);
  slide.addEventListener('click', () => {
    clearActiveClasses();
    slide.classList.add('active');
    //console.log(slide.classList);
    //document.body.style = item.attributes.style.textContent;
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}
