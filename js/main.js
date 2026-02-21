// Main Slideshow

let rightArrow = document.getElementById("right-arrow");
let leftArrow = document.getElementById("left-arrow");
let intros = [...document.getElementsByClassName("intro")];
let dots = [...document.querySelectorAll(".progress span")];

disableButtons(rightArrow, leftArrow);

function disableButtons(right, left) {
  let currentIndex = intros.indexOf(document.querySelector(".intro.active"));
  if (currentIndex == 0) {
    right.classList.remove("disabled");
    left.classList.add("disabled");
  } else if (currentIndex == 3) {
    right.classList.add("disabled");
    left.classList.remove("disabled");
  } else {
    right.classList.remove("disabled");
    left.classList.remove("disabled");
  }
}

rightArrow.addEventListener("click", rightSlideMain);

function rightSlideMain() {
  let activeIntro = document.querySelector(".intro.active");
  let currentIndex = intros.indexOf(activeIntro);
  let nextIndex = currentIndex + 1;
  if (nextIndex != intros.length) {
    if (nextIndex == intros.length - 1) {
      disableButtons(rightArrow, leftArrow);
    }
    intros.forEach((intro) => intro.classList.remove("active"));
    intros.forEach(function (intro, index) {
      if (index == nextIndex) {
        intro.classList.add("active");
        disableButtons(rightArrow, leftArrow);
      }
    });
    dots.forEach((dot) => dot.classList.remove("active"));
    dots.forEach(function (dot, index) {
      if (index == nextIndex) {
        dot.classList.add("active");
      }
    });
  } else {
    disableButtons(rightArrow, leftArrow);
  }
}

leftArrow.addEventListener("click", leftSlideMain);

function leftSlideMain() {
  let activeIntro = document.querySelector(".intro.active");
  let currentIndex = intros.indexOf(activeIntro);
  let previousIndex = currentIndex - 1;
  if (previousIndex != -1) {
    if (previousIndex == 0) {
      disableButtons(rightArrow, leftArrow);
    }
    intros.forEach((intro) => intro.classList.remove("active"));
    intros.forEach(function (intro, index) {
      if (index == previousIndex) {
        intro.classList.add("active");
        disableButtons(rightArrow, leftArrow);
      }
    });
    dots.forEach((dot) => dot.classList.remove("active"));
    dots.forEach(function (dot, index) {
      if (index == previousIndex) {
        dot.classList.add("active");
      }
    });
  } else {
    disableButtons(rightArrow, leftArrow);
  }
}

// Gallery

let galleryNav = document.querySelector("#gallery ul");
let galleryLinks = [...document.querySelectorAll("#gallery ul li")];
let pics = [...document.querySelectorAll("#gallery div.pics")];

galleryNav.addEventListener("click", galleryClick);

function galleryClick(e) {
  if (e.target !== e.currentTarget) {
    pics.forEach((pic) => {
      pic.classList.remove("active");
      if (pic.classList.contains(e.target.className)) {
        pic.classList.add("active");
      }
    });

    galleryLinks.forEach((link) => {
      link.classList.remove("active");
      e.target.classList.add("active");
    });
  }
}
