function showUp() {
  var element = document.querySelector("#hidden");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function toggleContent() {
  var element = document.getElementById("invisible");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const button = document.querySelector("button");
button.addEventListener("click", openMenu);

function openMenu(event) {
  document.body.classList.add("menu-open");
}

//element
const closeButton = document.querySelector("menu button");

//evento
closeButton.addEventListener("click", closeMenu);

function closeMenu() {
  document.body.classList.remove("menu-open");
}

const audioElement = document.querySelector("audio");
window.addEventListener("load", playMusic);
function playMusic() {
  audioElement.play();
}

setInterval(myWatch, 1000);
function myWatch() {
  let d = new Date();
  document.getElementById("watch").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
