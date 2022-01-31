
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




///////site credits dropdown
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



////carousel images for project page

const carouselCYOA = ['carouselpics/us1.jpeg', 'carouselpics/thetallgrass.jpeg', 'carouselpics/cube.jpeg', 'carouselpics/theshining.jpeg', 'carouselpics/itfollows.png']
const carouselProjects = ['carouselpics/flowerbox1.png']
const carouselPics = ['carouselpics/cowboybebop.jpeg', 'carouselpics/envy-pointing.jpeg', 'carouselpics/howl2.jpeg', 'carouselpics/Howls-Moving-Castle.jpeg', 'carouselpics/howlsmovingcastle1.jpg']



/////image carousel PROJECT 1
const $nextBtn1 = $('.forward#firstproject');
const $backBtn1 = $('.back#firstproject');
const $currentImg1 = $('.carousel-pic#1');

let numOfImgs1 = carouselCYOA.length
let maxIndex1 = numOfImgs1 - 1
let currentImgIndex1 = 0;

//next button PROJECT 1
const nextImg1 = () => {
  if (currentImgIndex1 < maxIndex1) {
    currentImgIndex1++
    $currentImg1.attr('src', carouselCYOA[currentImgIndex1])
  } else if (currentImgIndex1 == maxIndex1) {
    currentImgIndex1 = 0;
    $currentImg1.attr('src', carouselCYOA[currentImgIndex1])
  }
}

//back button PROJECT 1
const prevImg1 = () => {
  if (currentImgIndex1 > 0) {
    currentImgIndex1--
    $currentImg1.attr('src', carouselCYOA[currentImgIndex1])
  } else if (currentImgIndex1 == 0) {
    currentImgIndex1 = maxIndex1
    $currentImg1.attr('src', carouselCYOA[currentImgIndex1])
  }
}


/////image carousel PROJECT 2


//////DOM load function
$(() => {

  ////top menu jquery
  $menubtn.on('click', showMenu);
  $closeBtn.on('click', closeMenu);

  ///contact info info modal
  $openContact.on('click', showModal);
  $closeContact.on('click', closeModal);

  ///// credit footer jquery
  $openCredits.on('click', showCredits);
  $closeCredits.on('click', closeCredits);

  ////image carousel
  $nextBtn1.on('click', nextImg1);
  $backBtn1.on('click', prevImg1);







});
