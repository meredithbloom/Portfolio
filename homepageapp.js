



const $menubtn = $('#modal-menu-btn')
const $menu = $('.dropdown-menu')
const $closeBtn = $('#close-menu-btn')

const showMenu = () => {
  $menu.css('display', 'flex');
  $menubtn.css('display', 'none');
  $closeBtn.css('display', 'inline-block');
}

const closeMenu = () => {
  $menu.css('display', 'none');
  $closeBtn.css('display', 'none')
  $menubtn.css('display', 'inline-block')
}


const $openContact = $('#contact-modal-open');
const $contactModal = $('#contact-modal');
const $closeContact = $('#close')

const showModal = () => {
  $contactModal.css('display', "flex");
}

const closeModal = () => {
  $contactModal.css('display', "none");
}







$(() => {

  $menubtn.on('click', showMenu);
  $closeBtn.on('click', closeMenu);

  $openContact.on('click', showModal);
  $closeContact.on('click', closeModal);









});
