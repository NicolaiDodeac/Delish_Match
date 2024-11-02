import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import { reviewsImages } from './reviews-images';
import icons from '../img/icons.svg';

const refs = {
  reviewsListEl: document.querySelector('.reviews-list'),
};

const reviews = [
  {
    photoMob1: reviewsImages.reviews1_mob1x,
    photoMob2: reviewsImages.reviews1_mob2x,
    photoDesk1: reviewsImages.reviews1_desk1x,
    photoDesk2: reviewsImages.reviews1_desk2x,
    name: 'ChefStar99',
    text: 'Absolutely engaging! I love managing the restaurant and creating unique dishes.',
  },
  {
    photoMob1: reviewsImages.reviews2_mob1x,
    photoMob2: reviewsImages.reviews2_mob2x,
    photoDesk1: reviewsImages.reviews2_desk1x,
    photoDesk2: reviewsImages.reviews2_desk2x,
    name: 'TastyQueen',
    text: 'The game keeps me hooked on every level! A wonderful culinary experience with great challenges.',
  },
  {
    photoMob1: reviewsImages.reviews3_mob1x,
    photoMob2: reviewsImages.reviews3_mob2x,
    photoDesk1: reviewsImages.reviews3_desk1x,
    photoDesk2: reviewsImages.reviews3_desk2x,
    name: 'FoodieFan21',
    text: 'So much fun on every level! The graphics are stunning, and the dishes look so delicious.',
  },
  {
    photoMob1: reviewsImages.reviews4_mob1x,
    photoMob2: reviewsImages.reviews4_mob2x,
    photoDesk1: reviewsImages.reviews4_desk1x,
    photoDesk2: reviewsImages.reviews4_desk2x,
    name: 'KitchenKing',
    text: 'A fantastic simulator! I love the variety of recipes and levels that keep things fresh.',
  },
  {
    photoMob1: reviewsImages.reviews5_mob1x,
    photoMob2: reviewsImages.reviews5_mob2x,
    photoDesk1: reviewsImages.reviews5_desk1x,
    photoDesk2: reviewsImages.reviews5_desk2x,
    name: 'MasterCook92',
    text: 'I play every day! The challenges get more exciting with every new level, especially the later ones.',
  },
];

function reviewsTemplate(array) {
  return array
    .map(item => {
      return `
  <li class="review-item swiper-slide">
        <div class="review-item-title">
          <picture>
            <source
              media="(min-width: 1200px)"
              srcset="
                ${item.photoDesk1} 1x,
                ${item.photoDesk2} 2x
              "
              type="image/webp"
            />
            <source
              media="(max-width: 1199px)"
              srcset="
                ${item.photoMob1} 1x,
                ${item.photoMob2} 2x
              "
              type="image/webp"
            />
            <img
              src="${item.photoMob1} "
              alt="${item.name}"
              width="50"
              height="50"
              class="review-item-img"
              loading="lazy"
            />
          </picture>
          <h3 class="reviews-item-name">${item.name}:</h3>
        </div>
        <p class="reviews-item-text">${item.text}</p>
        <svg fill="#ffd953" class="reviews-icon-stars">
          <use href="${icons}#icon-stars"></use>
        </svg>
      </li>`;
    })
    .join('');
}

function renderReviews() {
  const markup = reviewsTemplate(reviews);
  refs.reviewsListEl.innerHTML = markup;
}

renderReviews();

const reviewsSwiper = new Swiper('.reviews-swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    prevEl: '.reviews-swiper-button-prev',
    nextEl: '.reviews-swiper-button-next',
    grabCursor: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    invert: false,
    sensitivity: 1,
    eventsTarget: '.reviews-swiper',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2.6,
      spaceBetween: 24,
    },
  },

  loop: true,
  setWrapperSize: true,
  slidesPerView: 1.5,
  spaceBetween: 8,
  speed: 600,
  simulateTouch: false,
  slideToClickedSlide: true,
  slidesPerGroup: 1,
  grabCursor: true,
});
