import APIError from '../../errors/ApiError';
import delay from '../../Utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay(500);
    /*const response = await fetch(`${this.baseURL}${path}`, {mode: 'no-cors'});
    console.log(body);
    const body = await response.json();
    
    return body;*/
    let body = null;
    await fetch(`${this.baseURL}${path}`)
		.then(res => {
      body = res.json()
    })
		.catch(e => {
			console.warn(e);
		});
    return body;
    /*const request = new Request(`${this.baseURL}${path}`, {
      mode: 'no-cors',
    });

    // Assume `cache` is an open instance of the Cache class.
    fetch(request).then(response => {
        console.log(response);
        response.blob().then(function(myBlob) {
          var objectURL = URL.createObjectURL(myBlob);
          body = objectURL;
        })
    });
    console.log(body);*/
  }
}

export default HttpClient;