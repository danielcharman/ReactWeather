let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=37a5b594765990b946f56b418a7e277e';

module.exports = {
    getTemp: function(location) {
      let encodedLocation = encodeURIComponent(location);
      let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestURL).then(function(response) {
        if(response.data.cod && response.data.message) {
          throw new Error(response.data.message);
        }else{
          return response.data.main.temp;
        }
      }, function(response) {
        throw new Error(response);
      });
    }
};
