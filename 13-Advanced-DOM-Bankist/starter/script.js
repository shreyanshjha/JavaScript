'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////////////////////////////////////////
///////////////////////////////////////////////////
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('#section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('section'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML = `We use cookied for improved functionality and analytics. 
<button class='btn btn--close-cookie'>Got it!</button>`;
// header.prepend(message); element will added at first place
header.append(message); // element will added at last place
//header.append(message.cloneNode(true)); // copy of element will be added at last place
//header.before(message); // element will be added before header
//header.after(message); // element will be added after header

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.remove();
});
*/
/*
//Styles
message.style.width = '120%';
message.style.backgroundColor = '#37383d';

console.log(message.style.color); // no output use getComputedStyle
console.log(message.style.backgroundColor); // For inline css we will able see in console

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// root level changes
document.documentElement.style.setProperty('--color-primary','green');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

// Non-standard
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

//logo.removeAttribute('src');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.test);
console.log(logo.dataset.checkPass);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('j');
logo.classList.toggle('j');
logo.classList.contains('j'); // it not includes
*/
const scrollToBtn = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

scrollToBtn.addEventListener('click', function (e) {
  const section1Cords = section1.getBoundingClientRect();
  //console.log(section1Coords);
  //console.log(e.target.getBoundingClientRect());

  console.log('current scroll (X/Y)', window.scrollX, window.scrollY);

  //console.log('height viewport height/width', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // Scrolling
  console.log(section1Cords.left);
  console.log(section1Cords.top);

  // Old way
  // window.scrollTo({
  //   left: section1Cords.left + window.scrollX, 
  //   top: section1Cords.top + window.scrollY,
  //   behavior: 'smooth'
  //});

  // New way
  section1.scrollIntoView({behavior: 'smooth'});
});
