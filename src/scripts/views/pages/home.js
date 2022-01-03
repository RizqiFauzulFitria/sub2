import DbRestoSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <h2 class="content__heading">Restaurant Catalogue</h2>
    <div id="restaurants" class="Restaurant">

    </div>
    `;
  },

  async afterRender() {
    const restaurants = await DbRestoSource.home();
    const RestaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      RestaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
