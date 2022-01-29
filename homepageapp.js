

///dropdown menu

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


//////contact info modal

const $openContact = $('#contact-modal-open');
const $contactModal = $('#contact-modal');
const $closeContact = $('#close')

const showModal = () => {
  $contactModal.css('display', "flex");
}

const closeModal = () => {
  $contactModal.css('display', "none");
}

////// icon credit dropdown
const $openCredits = $('#open-credits')
const $credits = $('.icon-credits')
const $closeCredits = $('#close-credits')


const showCredits = () => {
  $credits.css('display', 'block');
  $openCredits.css('display','none');
  $closeCredits.css('display', 'inline-block');
}

const closeCredits = () => {
  $credits.css('display', 'none');
  $closeCredits.css('display', 'none')
  $openCredits.css('display', 'inline-block')
}







$(() => {



  //dropdown menu jquery
  $menubtn.on('click', showMenu);
  $closeBtn.on('click', closeMenu);


  ///contact info info modal
  $openContact.on('click', showModal);
  $closeContact.on('click', closeModal);


  ///// credit footer jquery
  $openCredits.on('click', showCredits);
  $closeCredits.on('click', closeCredits);








});
