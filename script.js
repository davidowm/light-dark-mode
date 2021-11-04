'use strict';
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark or Light images
const imageMode = function (color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

const toggleDarkLightMode = function (isDark) {
  nav.style.backgroundColor = isDark
    ? 'rgba(0 0 0 / 50%)'
    : 'rgba(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark
    ? 'rgba(255 255 255 /50%)'
    : 'rgba(0 0 0 /50%)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'lightMode';
  isDark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark ? imageMode('dark') : imageMode('light');
  isDark
    ? localStorage.setItem('theme', 'dark')
    : localStorage.setItem('theme', 'light');
};
//Dark Mode Styles
// const darkMode = function () {
//   nav.style.backgroundColor = "rgba(0 0 0 / 50%)";
//   textBox.style.backgroundColor = "rgba(255 255 255 /50%)";
//   toggleIcon.children[0].textContent = "Dark Mode";
//   toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
//   imageMode("dark");
//   localStorage.setItem("theme", "dark");
//   //toggleIcon.children[1].classList.add("fa-moon");
//   //image1.src = "img/undraw_proud_coder_dark.svg";
//   //image2.src = "img/undraw_feeling_proud_dark.svg";
//   //image3.src = "img/undraw_conceptual_idea_dark.svg";
// };
// //Light Mode Styles
// const lightMode = function () {
//   nav.style.backgroundColor = "rgba(255 255 255 / 50%)";
//   textBox.style.backgroundColor = "rgba(0 0 0 /50%)";
//   toggleIcon.children[0].textContent = "Light Mode";
//   toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
//   imageMode("light");
//   localStorage.setItem("theme", "light");
//   //toggleIcon.children[1].classList.add("fa-sun");
//   // image1.src = "img/undraw_proud_coder_light.svg";
//   // image2.src = "img/undraw_feeling_proud_light.svg";
//   // image3.src = "img/undraw_conceptual_idea_light.svg";
// };
// Switch Theme Dynamically
const switchTheme = function (event) {
  //console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    // darkMode();
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    // lightMode();
    toggleDarkLightMode(false);
  }
};
//Event Listener
toggleSwitch.addEventListener('change', switchTheme);
//Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    // darkMode();
    toggleDarkLightMode(true);
  }
}
