class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(path: string) {
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