// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

const detailsAfpaBtn = document.querySelector('.detail-afpa-btn');
const detailsProshopBtn = document.querySelector('.detail-proshop-btn');
const detailsNatoursBtn = document.querySelector('.detail-natours-btn');
const details = document.querySelector('.details');
const detailsItems = document.querySelectorAll('.details-item');

const modalAfpa = document.getElementById('modal-afpa');
const modalProshop = document.getElementById('modal-proshop');
const modalNatours = document.getElementById('modal-natours');
const modals = document.getElementsByClassName('modal');
const modalsScreen = [...modals];
const spans = document.getElementsByClassName('close');
const closeBtns = [...spans];

// Set Initial State Of Menu
let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
};

const toggleDetailAfpa = () => {
  modalAfpa.classList.add('show');
};

const toggleDetailProshop = () => {
  modalProshop.classList.add('show');
};

const toggleDetailNatours = () => {
  modalNatours.classList.add('show');
};
const closeModal = () => {
  modalAfpa.classList.remove('show');
  modalProshop.classList.remove('show');
  modalNatours.classList.remove('show');
};

menuBtn.addEventListener('click', toggleMenu);

detailsAfpaBtn.addEventListener('click', toggleDetailAfpa);
detailsProshopBtn.addEventListener('click', toggleDetailProshop);
detailsNatoursBtn.addEventListener('click', toggleDetailNatours);
closeBtns.forEach((btn) => btn.addEventListener('click', closeModal));
window.onclick = (event) => {
  modalsScreen.forEach((modal) => {
    if (event.target == modal) {
      modal.classList.remove('show');
    }
  });
};
