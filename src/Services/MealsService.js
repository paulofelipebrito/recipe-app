import HttpClient from './Utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('https://www.themealdb.com');
  }

  async listRandomMeal() {
    return this.httpClient.get(`/api/json/v1/1/random.php`);
  }
  async listMealById(id) {
    return this.httpClient.get(`/api/json/v1/1/lookup.php?i=${id}`);
  }
  async listMealBySearch(term) {
    return this.httpClient.get(`/api/json/v1/1/search.php?s=${term}`);
  }
}

export default new ContactsService();