
const API_ROOT = 'http://localhost:3000'; //'http://swirl.dev/api';

const HTTP_METHOD = {
  GET : 'GET',
  POST : 'POST'
}

export default class ApiService {

  token : null;

  constructor(){
    if (arguments.token){
      this.setToken(argument.token);
    }
  }

  async get(path, data) {
    let url = `${API_ROOT}/${path}`;
    let options = {
      credentials: 'include',
      headers : this.getRequestHeaders(),
      method: HTTP_METHOD.GET
    }
    url += this.encodeAsQueryString(data);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return {error: null, data:data }
    }catch (error) {
      return {error};
    }
  }

  async post(path, data) {
    let url = `${API_ROOT}/${path}`;
    let options = {
      credentials: 'include',
      headers : this.getRequestHeaders({contentType:'application/json'}),
      mode: 'cors',
      method: 'post',
      body: JSON.stringify(data)
    }
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      return {error: 0, data:responseData }
    }catch (error) {
      return {error}
    }
  }

  async call(id, action, data, method = HTTP_METHOD.GET){
    let url = action != null ? `${API_ROOT}/${id}/${action}` : `${API_ROOT}/${id}`;

    let options = {
      credentials: 'include',
      headers : this.getRequestHeaders()
    }

    if (method === HTTP_METHOD.POST) {
      options.method = HTTP_METHOD.POST;
      options.body = data;
    } else {
      url += this.encodeAsQueryString(data)
    }
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return {error: null, data:data }
    }catch (error) {
      return {error}
    }
  }
  //private
  hasToken(data) {
    if (typeof data.__token === "string"){
      return true
      this.setToken(data.__token);
    } else {
      return false
    }
  }

  getToken(){
    if (typeof this.token === 'undefined' || this.token === null){
      return null
    } else {
      return this.token;
    }
  }

  setToken(token){
    this.token = token;
  }

  getRequestHeaders(data = {}){
    let headers = {};
    if (data.contentType) {
      headers['Content-Type'] = data.contentType;
    }

    if (data.dataType) {
      headers['Accept'] = data.dataType;
    }
    return headers;
  }

  getRequestOptions(){
    let options = {
      credentials: 'include'
    };
  }

  encodeAsQueryString(data = {}) {
    let query = Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
    return `?${query}`;
  }

}
