import DbRestoSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="Restaurant-detail" class="Restaurant-detail"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DbRestoSource.detailResto(url.id);
    const restoContainer = document.querySelector('#Restaurant-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);
    restoContainer.innerHTML += `
      
      <div class='add__review'>
      <h4>Add Review</h4>
        <form class='submit-review' methos='post' action=''>
          <input type='hidden' id='reviewID' value='${resto.id}'>
          <div class='form-group'>
            <label for='name'>Nama</label>
            <input type='text' id='name' required>
          </div>
          <div class='form-group'>
            <label for='review'>Review</label>
            <textarea id='review' required></textarea>
          </div>
          <button aria-label="add review" type='submit' class='btn-submit'> Add Review </button>
        </form>
      </div>
      
    `;

    const addReview = document.querySelector('.submit-review');
    addReview.addEventListener('submit', async (e) => {
      const inputReviewId = document.querySelector('#reviewID');
      const inputReviewName = document.querySelector('#name');
      const inputReviewRev = document.querySelector('#review');
      e.preventDefault();

      const input = {
        id: inputReviewId.value,
        name: inputReviewName.value,
        review: inputReviewRev.value,
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      };

      const add = await DbRestoSource.addReview(options);
      if (add.status === 201) {
        console.log('masuk');
        alert('review added. please reload the page to see new review');
      }
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
