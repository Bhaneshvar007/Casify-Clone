let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Work on login form
let loginBtn = document.querySelector(".loginBtn")
let loginPage = document.querySelector(".loginPage")
let crossIcon = document.querySelector(".crossIcon")

loginBtn.addEventListener("click", function () {
  loginPage.style.display = "flex";

  crossIcon.addEventListener("click", function () {
    loginPage.style.display = "none";
  })
})