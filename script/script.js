function hamburgerMenu() {
  const overlay = document.querySelector(".overlay");
  const navMenu = document.querySelector(".page-navigation");
  const burgerMenu = document.querySelector(".hamburger-lines-container");

  const navClassArray = [overlay, navMenu];
  const hamburgerLinesArrat = [...document.querySelectorAll(".hamburger-line")];

  burgerMenu.addEventListener("click", (e) => {
    // hamburgerLinesArrat[0].classList.toggle('hamburger-line-rotate-left')
    // hamburgerLinesArrat[1].classList.toggle('hamburger-line-center')
    // hamburgerLinesArrat[2].classList.toggle('hamburger-line-rotate-right')
    hamburgerLinesArrat.forEach((item) => {
      item.classList.toggle("active");
    });

    navClassArray.forEach((classes) => {
      classes.classList.toggle("show");
    });
  });
}

hamburgerMenu();

let back = document.querySelector(".back");
let next = document.querySelector(".next");

let cards = [...document.querySelectorAll(".project-card")];
console.log(cards);

let x = 0; //index bumber

function goToNextImg() {
  cards[x].classList.add("hide");
  x++;
  if (x === cards.length) {
    x = 0;
  }
  cards[x].classList.remove("hide");
}

function goBacktoI() {
  cards[x].classList.add("hide");
  x--;
  if (x === -1) {
    x = cards.length - 1;
  }
  cards[x].classList.remove("hide");
}

next.addEventListener("click", goToNextImg);

back.addEventListener("click", goBacktoI);

// nav buttons

const homeBtn = document.querySelector(".home-btn");
const projectBtn = document.querySelector(".project-btn");
const whyBtn = document.querySelector(".why-btn");

const whyBtnHomeHero = document.querySelector(".btn-y");
const projectBtnHomeHero = document.querySelector(".btn-v");

const homeSection = document.querySelector(".home");
const whyApplySection = document.querySelector(".why-apply");
const projectSection = document.querySelector(".projects");

function ShowHomeSection() {
  homeSection.classList.remove("hide");

  if (!whyApplySection.classList.contains("hide")) {
    whyApplySection.classList.add("hide");
  }

  if (!projectSection.classList.contains("hide")) {
    projectSection.classList.add("hide");
  }
}

function showWhyApplySection() {
  whyApplySection.classList.remove("hide");

  if (!homeSection.classList.contains("hide")) {
    homeSection.classList.add("hide");
  }

  if (!projectSection.classList.contains("hide")) {
    projectSection.classList.add("hide");
  }
}

function showProjectSection() {
  projectSection.classList.remove("hide");

  if (!homeSection.classList.contains("hide")) {
    homeSection.classList.add("hide");
  }

  if (!whyApplySection.classList.contains("hide")) {
    whyApplySection.classList.add("hide");
  }
}

homeBtn.addEventListener("click", ShowHomeSection);
whyBtn.addEventListener("click", showWhyApplySection);
whyBtnHomeHero.addEventListener("click", showWhyApplySection);
projectBtn.addEventListener("click", showProjectSection);
projectBtnHomeHero.addEventListener("click", showProjectSection);
