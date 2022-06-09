// ===== Increase Numbers On Scrolling =====
let num = document.querySelectorAll(".num");
let section = document.querySelector(".about-ceo__achievement");
let started = false; // Function Started ? No

window.onscroll = function () {
  if ((window.scrollY = section.offsetTop)) {
    if (!started) {
      num.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// ======================= Slider Cards =======================

$(".portfolio .cards").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
});

//================ Carousel =======================
const items = document.querySelectorAll(".testimonials .slide");
const slideLength = items.length;
const next = document.querySelector(".testimonials button[aria-label='Next']");
const precedent = document.querySelector(
  ".testimonials button[aria-label='Previous']"
);
let count = 0;

next.addEventListener("click", () => {
  items[count].classList.remove("active");
  count < slideLength - 1 ? count++ : (count = 0);
  items[count].classList.add("active");
  console.log(count);
});

precedent.addEventListener("click", () => {
  items[count].classList.remove("active");
  count > 0 ? count-- : (count = slideLength - 1);
  items[count].classList.add("active");
  console.log(count);
});
//================Carousel=======================

//================Carousel=======================
