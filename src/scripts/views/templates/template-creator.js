import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="${resto.name}" />
  <div class="resto__info">
  <h3>Information</h3>
    <h3>Alamat</h3>
    <p>${resto.address}, ${resto.city}</p>
    <div class="resto__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
    </div>
  <div class="kategori">
    <div class="kategori-menu">
    <h3>Kategori Menu</h3>
    <ul>
    ${resto.categories
    .map(
      (categori) => `
        <li class="category-name">${categori.name}</li>
  `,
    )
    .join('')}
      </ul>
    </div>

    <div class="kategori-makanan">
    <h3>Menu Makanan</h3>
      <ul>
    ${resto.menus.foods
    .map(
      (food) => `
        <li class="category-name">${food.name}</li>
  `,
    )
    .join('')}
      </ul>
    </div>

    <div class="kategori-minuman">
    <h3>Menu Minuman</h3>
    <ul>
    ${resto.menus.drinks
    .map(
      (drink) => `
        <li class="category-name">${drink.name}</li>
  `,
    )
    .join('')}
      
      </div>
      <div class="kategori-rating">
      <h3>Rating</h3>
      <p>${resto.rating}</p>
      </div>
    </div>
    
    <h3>Customer Review</h3>
    <div class="review">
      ${resto.customerReviews
    .map(
      (review) => `
      <div class="review-card">
        <i class="fas fa-user-circle"></i>
        <p class="review-name">${review.name}</p>
        <p class="review-comment">${review.review}</p>
        <p class="review-date">${review.date}</p>
      </div>
    `,
    )
    .join('')}
      </div>
  </div>
  

`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${resto.name}"
            src="${
  resto.pictureId
    ? CONFIG.BASE_IMAGE_URL + resto.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}">
        <div class="resto-item__header__rating">
            <p>🌟<span class="resto-item__header__rating__score">${
  resto.rating
}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const emptyFavorite = `
<div class="empty-favorite-tag">
  <p>Favorite restaurant masih kosong</p>
</div>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  emptyFavorite,
};
