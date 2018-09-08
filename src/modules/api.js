import axios from 'axios';

class API {
  constructor({ url, appid }) {
    this.url = url;
    this.appid = appid;
  }

  getCurrentWeather({ city }) {
    return axios.get(this.url, { params: { q: city, units: 'metric', appid: this.appid }})
  }
}

const api = new API({ 
  url: 'http://api.openweathermap.org/data/2.5/weather',
  appid: 'df1a22a704e3d1e60e8297208941f42e'
})

export default api;