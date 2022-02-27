const toggle_btn = document.getElementsByClassName("toggle-button")[0];
const navbar_links = document.getElementsByClassName("nav")[0];
const buttons = document.querySelectorAll("[data-carousel-button]");
const dropdown = document.querySelector(".dropdown-menu");
const dropdown_content = document.querySelector(".dropdown-content");
const up_arrow = document.querySelector(".up-arrow");


////// Responsive Navbar  
toggle_btn.addEventListener('click', () => {
    navbar_links.classList.toggle("resp-nav");
})

/////// Img Slider

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

/////////Scroll

window.addEventListener('scroll', function () {
  var nav = document.querySelector(".nav");
  nav.classList.toggle("sticky", window.scrollY > 100);
  up_arrow.classList.toggle("active-for-back", window.scrollY > 350);
  // console.log(window.scrollY)
})

/////////Drop down

dropdown.addEventListener('mouseover', function () {
  // console.log("ONE");
  dropdown_content.classList.add("active-for-drop-down");

});

dropdown.addEventListener('mouseout', function () {
  // console.log("TWO");
  dropdown_content.classList.toggle("active-for-drop-down");
});
