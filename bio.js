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

///array of carousels by category - going to try and connect changing current category title to actually changing display value of different containers
const mainCarouselId = ['#me', '#family', '#friends', '#values'];

////buttons to navigate between carousel categories
const $prevCategoryBtn = $('#prev-carousel');
const $nextCategoryBtn = $('#next-carousel');

let $currentCategoryIndex = 0;
let $maxCategoryIndex = carouselId.length - 1
// let $currentCategoryID = mainCarouselId[$currentCategoryIndex]
let $currentContainer = $('.bio-flex-container').eq($currentCategoryIndex)
console.log($currentContainer)

//displays next bio category title
const nextCategory = () => {
  if ($currentCategoryIndex < $maxCategoryIndex) {
    //changes category header
    $('.category').eq($currentCategoryIndex).css('display','none');
    //changes sub-carousel
    $('.bio-flex-container').eq($currentCategoryIndex).css('display', 'none')
    $currentCategoryIndex++;
    $('.category').eq($currentCategoryIndex).css('display', 'block');
    $('.bio-flex-container').eq($currentCategoryIndex).css('display', 'flex')
  } else if ($currentCategoryIndex == $maxCategoryIndex) {
    $('.category').eq($currentCategoryIndex).css('display','none');
    $('.bio-flex-container').eq($currentCategoryIndex).css('display', 'none')
    $currentCategoryIndex = 0;
    $('.category').eq($currentCategoryIndex).css('display', 'block');
    $('.bio-flex-container').eq($currentCategoryIndex).css('display', 'flex')
  }
}

//displays previous bio category title
const prevCategory = () => {
  if ($currentCategoryIndex > 0) {
    $('.category').eq($currentCategoryIndex).css('display','none');
    $('.bio-flex-container').eq($currentCategoryIndex).css('display', 'none');
    $currentCategoryIndex--;
    $('.category').eq($currentCategoryIndex).css('display', 'block');
    $('.bio-flex-container').eq($currentCategoryIndex).css('display', 'flex');
  } else if ($currentCategoryIndex == 0) {
    $('.category').eq($currentCategoryIndex).css('display','none');
    $('.bio-flex-container').eq($currentCategoryIndex).css('display', 'none');
    $currentCategoryIndex = $maxCategoryIndex;
    $('.category').eq($currentCategoryIndex).css('display', 'block');
    $('.bio-flex-container').eq($currentCategoryIndex).css('display', 'flex');
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
const carouselFamily = ['bio-pics/wholefamstjohn.JPG', 'bio-pics/sibsstjohns.jpg', 'bio-pics/sibsmore.JPG', 'bio-pics/meanddad.JPG', 'bio-pics/meandben.JPG', 'bio-pics/meandbenobies.JPG','bio-pics/momanddad.jpg', 'bio-pics/sibs.JPG','bio-pics/dadssibs.jpg', 'bio-pics/dad.jpg', 'bio-pics/mama.JPG','bio-pics/momconfusedmeme.jpg','bio-pics/iamthesecretingredientmom.jpg', 'bio-pics/benmimosa.jpg', 'bio-pics/paternalgrandparents.jpg', 'bio-pics/allcousins.JPG']


const $nextFamBtn = $('.forward#next-fam');
const $backFamBtn = $('.back#back-fam');
const $currentFamImg = $('.carousel-pic#fam');


let numofFamImgs = carouselFamily.length
let maxIndexFam = numofFamImgs - 1;
let currentFamIndex = 0;

const nextFam = () => {
  if (currentFamIndex < maxIndexFam) {
    currentFamIndex++
    $currentFamImg.attr('src', carouselFamily[currentFamIndex])
  } else if (currentFamIndex == maxIndexFam) {
    currentFamIndex = 0;
    $currentFamImg.attr('src', carouselFamily[currentFamIndex])
  }
}

const prevFam = () => {
  if (currentFamIndex > 0) {
    currentFamIndex--
    $currentFamImg.attr('src', carouselFamily[currentFamIndex])
  } else if (currentFamIndex == 0) {
    currentFamIndex = maxIndexFam;
    $currentFamImg.attr('src', carouselFamily[currentFamIndex])
  }
}

////image carousel FRIENDS

const carouselFriends = ['bio-pics/meandstevie.jpg', 'bio-pics/meandkyle2.JPG', 'bio-pics/meandjoyce.JPG', 'bio-pics/meandjada1.jpg', 'bio-pics/coolestpicever.jpg', 'bio-pics/meandcharliejoyce.jpg', 'bio-pics/meanddanielle.JPG', 'bio-pics/meandmel.JPG']

const $nextFriendBtn = $('.forward#next-friends');
const $backFriendBtn = $('.back#back-friends');
const $currentFriendImg = $('.carousel-pic#friend');

let numOfFriendImgs = carouselFriends.length;
let maxIndexFriend = numOfFriendImgs - 1;
let currentFriendIndex = 0;

const nextFriend = () => {
  if (currentFriendIndex < maxIndexFriend) {
    currentFriendIndex++
    $currentFriendImg.attr('src', carouselFriends[currentFriendIndex])
  } else if (currentFriendIndex == maxIndexFriend) {
    currentFriendIndex = 0;
      $currentFriendImg.attr('src', carouselFriends[currentFriendIndex])
  }
}

const prevFriend = () => {
  if (currentFriendIndex > 0) {
    currentFriendIndex--
    $currentFriendImg.attr('src', carouselFriends[currentFriendIndex])
  } else if (currentFriendIndex == 0) {
    currentFriendIndex = maxIndexFriend;
      $currentFriendImg.attr('src', carouselFriends[currentFriendIndex])
  }
}


///// image carousel MEME/VALUES
const carouselValues = ['bio-pics/lol.jpg', 'bio-pics/lol2.jpg', 'bio-pics/autumnpepe.jpg', 'bio-pics/obamageodude.jpg']

const $nextValueBtn = $('.forward#next-value');
const $backValueBtn = $('.back#back-value');
const $currentValueImg = $('.carousel-pic#value');

let numOfValues = carouselValues.length
let maxIndexValue = numOfValues -1;
let currentValueIndex = 0;


const nextVal = () => {
  if (currentValueIndex < maxIndexValue) {
    currentValueIndex++
    $currentValueImg.attr('src', carouselValues[currentValueIndex])
  } else if (currentValueIndex == maxIndexValue) {
    currentValueIndex = 0;
    $currentValueImg.attr('src', carouselValues[currentValueIndex])
  }
}

const prevVal = () => {
  if (currentValueIndex > 0) {
    currentValueIndex--
    $currentValueImg.attr('src', carouselValues[currentValueIndex])
  } else if (currentValueIndex == 0) {
    currentValueIndex = maxIndexValue;
    $currentValueImg.attr('src', carouselValues[currentValueIndex])
  }
}

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

  //FAMILY image carousel
  $nextFamBtn.on('click', nextFam);
  $backFamBtn.on('click', prevFam);

  //FRIEND image carousel
  $nextFriendBtn.on('click', nextFriend);
  $backFriendBtn.on('click', prevFriend);

  //MEME/VALUE image carousel
  $nextValueBtn.on('click', nextVal);
  $backValueBtn.on('click', prevVal);


});
