function toggleDropdown() {
    let dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}
document.addEventListener("click", function(event) {
    let dropdown = document.getElementById("dropdown");
    let button = document.querySelector(".more-details-button");
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const images = document.querySelectorAll('.stylist-image');

images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.classList.add('enlarge');
  });

  image.addEventListener('mouseleave', () => {
    image.classList.remove('enlarge');
  });
});

function openImage(url) {
  window.open(url, '_blank');
}
