/////code for main dropdown menu
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



//////// contact info modal

const $openContact = $('#contact-modal-open');
const $contactModal = $('#contact-modal');
const $closeContact = $('#close')

const showModal = () => {
  $contactModal.css('display', "flex");
}

const closeModal = () => {
  $contactModal.css('display', "none");
}

////carousel CATEGORIES for bio page
const carouselId = ['cat-1', 'cat-2', 'cat-3', 'cat-4']
const carouselMe = []
const carouselFamily = []
const carouselFriends = []
const carouselValues = []

const $prevCategoryBtn = $('#prev-carousel');
const $nextCategoryBtn = $('#next-carousel');

let $currentCategoryIndex = 0;
let $maxCategoryIndex = carouselId.length - 1

//displays next bio category title
const nextCategory = () => {
  if ($currentCategoryIndex < $maxCategoryIndex) {
    $('.category').eq($currentCategoryIndex).css('display','none');
    $currentCategoryIndex++;
    $('.category').eq($currentCategoryIndex).css('display', 'block');
  } else if ($currentCategoryIndex == $maxCategoryIndex) {
    $('.category').eq($currentCategoryIndex).css('display','none');
    $currentCategoryIndex = 0;
    $('.category').eq($currentCategoryIndex).css('display', 'block');
  }
}

//displays previous bio category title
const prevCategory = () => {
  if ($currentCategoryIndex > 0) {
    $('.category').eq($currentCategoryIndex).css('display','none');
    $currentCategoryIndex--;
    $('.category').eq($currentCategoryIndex).css('display', 'block');
  } else if ($currentCategoryIndex == 0) {
    $('.category').eq($currentCategoryIndex).css('display','none');
    $currentCategoryIndex = $maxCategoryIndex;
    $('.category').eq($currentCategoryIndex).css('display', 'block');
  }
}


/////image carousel PROJECT 1
const $nextBtn1 = $('.forward#firstproject');
const $backBtn1 = $('.back#firstproject');
const $currentImg1 = $('.carousel-pic#1');

let numOfImgs1 = carouselMe.length
let maxIndex1 = numOfImgs1 - 1
let currentImgIndex1 = 0;


//////DOM load function
$(() => {

  ////top menu jquery
  $menubtn.on('click', showMenu);
  $closeBtn.on('click', closeMenu);

  ///contact info info modal
  $openContact.on('click', showModal);
  $closeContact.on('click', closeModal);

  ////carousel category
  $nextCategoryBtn.on('click', nextCategory);
  $prevCategoryBtn.on('click', prevCategory);








});
