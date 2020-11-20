var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);

var slideshow3 = document.getElementById("slideshow3");
slideshow3.currentSlideIndex = 1;
showSlides(slideshow3.currentSlideIndex, slideshow3);

var slideshow4 = document.getElementById("slideshow4");
slideshow4.currentSlideIndex = 1;
showSlides(slideshow4.currentSlideIndex, slideshow4);

var slideshow5 = document.getElementById("slideshow5");
slideshow5.currentSlideIndex = 1;
showSlides(slideshow5.currentSlideIndex, slideshow5);

var slideshow6 = document.getElementById("slideshow6");
slideshow6.currentSlideIndex = 1;
showSlides(slideshow6.currentSlideIndex, slideshow6);



function arrow(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("hotelImages");
  if (n > slides.length) {slideshow.currentSlideIndex = 1}    
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideshow.currentSlideIndex-1].style.display = "block";  
}

// Progress bar
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressionBar").style.width = scrolled + "%";
}