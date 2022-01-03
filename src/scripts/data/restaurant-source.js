import API_ENDPOINT from '../globals/api-endpoint';

class DbRestoSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(options) {
    const response = await fetch(API_ENDPOINT.ADDREVIEW, options);
    return response;
  }
}

export default DbRestoSource;
