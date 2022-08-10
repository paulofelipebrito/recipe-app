import HttpClient from './Utils/HttpClient';

class ContactsService {
  httpClient: HttpClient;
  constructor() {
    this.httpClient = new HttpClient('https://www.themealdb.com');
  }

  async listRandomMeal() {
    return this.httpClient.get(`/api/json/v1/1/random.php`);
  }
  async listMealById(id: number) {
    return this.httpClient.get(`/api/json/v1/1/lookup.php?i=${id}`);
  }
  async listMealBySearch(term: string) {
    return this.httpClient.get(`/api/json/v1/1/search.php?s=${term}`);
  }
}

export default new ContactsService();