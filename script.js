import imageURL_pcd_dark from 'url:./img/undraw_proud_coder_dark.svg';
import imageURL_pcd_light from 'url:./img/undraw_proud_coder_light.svg';
import imageURL_fp_dark from 'url:./img/undraw_feeling_proud_dark.svg';
import imageURL_fp_light from 'url:./img/undraw_feeling_proud_light.svg';
import imageURL_ci_dark from 'url:./img/undraw_conceptual_idea_dark.svg';
import imageURL_ci_light from 'url:./img/undraw_conceptual_idea_light.svg';

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark or Light images
const imageMode = function (color) {
  color === 'dark'
    ? (image1.src = imageURL_pcd_dark)
    : (image1.src = imageURL_pcd_light);
  color === 'dark'
    ? (image2.src = imageURL_fp_dark)
    : (image2.src = imageURL_fp_light);
  color === 'dark'
    ? (image3.src = imageURL_ci_dark)
    : (image3.src = imageURL_ci_light);
  //  image2.src = `${imageURL}undraw_feeling_proud_${color}.svg`;
  //image3.src = `${imageURL}/undraw_conceptual_idea_${color}.svg`;
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
const switchTheme = function (event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
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
    toggleDarkLightMode(true);
  }
}
