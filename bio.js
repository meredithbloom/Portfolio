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
const carouselId = ['cat-1', 'cat-2', 'cat-3', 'cat-4'];
const mainCarouselId = ['me', 'fam', 'friend', 'value'];


const carouselFriends = ['bio-pics/meandkyle2.JPG', 'bio-pics/meandstevie.jpg', 'bio-pics/meandjoyce.JPG', 'bio-pics/meandjada1.jpg', 'bio-pics/coolestpicever.jpg', 'bio-pics/meandcharliejoyce.jpg', 'bio-pics/meanddanielle.JPG', 'bio-pics/meandmel.JPG']
const carouselValues = ['bio-pics/lol.jpg', 'bio-pics/lol2.jpg', 'bio-pics/autumnpepe.jpg', 'bio-pics/obamageodude.jpg']

////buttons to navigate between carousel categories
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


/////image carousel ME
const carouselMe = ['bio-pics/grumpybabyme.JPG', 'bio-pics/mereading.JPG', 'bio-pics/meatlunch.JPG', 'bio-pics/animeme.JPG', 'bio-pics/momandme.jpg', 'bio-pics/wideeyedme.JPG','bio-pics/grumpypenguin.jpg', 'bio-pics/meanddad2.JPG', 'bio-pics/soccerteam.JPG']

const $nextMeBtn = $('.forward#next-me');
const $backMeBtn = $('.back#back-me');
const $currentMeImg = $('.carousel-pic#me');

let numOfMeImgs = carouselMe.length
let maxIndexMe = numOfMeImgs - 1
let currentMeIndex = 0;

const nextMe = () => {
  if (currentMeIndex < maxIndexMe) {
    currentMeIndex++
    $currentMeImg.attr('src', carouselMe[currentMeIndex])
  } else if (currentMeIndex == maxIndexMe) {
    currentMeIndex = 0;
    $currentMeImg.attr('src', carouselMe[currentMeIndex])
  }
}

const prevMe = () => {
  if (currentMeIndex > 0) {
    currentMeIndex--
    $currentMeImg.attr('src', carouselMe[currentMeIndex])
  } else if (currentMeIndex == 0) {
    currentMeIndex = maxIndexMe;
    $currentMeImg.attr('src', carouselMe[currentMeIndex])
  }
}



///image carousel FAMILY 
const carouselFamily = ['bio-pics/wholefamstjohn.JPG', 'bio-pics/sibsstjohns.jpg', 'bio-pics/sibsmore.JPG', 'bio-pics/meanddad.JPG', 'bio-pics/meandben.JPG', 'bio-pics/meandbenobies.JPG','bio-pics/momanddad.jpg', 'bio-pics/sibs.JPG','bio-pics/dadssibs.jpg', 'bio-pics/dad.jpg', 'bio-pics/mama.JPG','bio-pics/momconfusedmeme.jpg','bio-pics/iamthesecretingredientmom.jpg', 'bio-pics/benmimosa.jpg', 'bio-pics/paternalgrandparents.jpg']


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

  ///ME image carousel
  $nextMeBtn.on('click', nextMe);
  $backMeBtn.on('click', prevMe);






});
