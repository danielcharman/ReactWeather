let React = require('react');

let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');

let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  _handleSearch: function(location) {
    let that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(error) {
      that.setState({isLoading: false});
      console.error(error);
    });
  },
  render: function() {
    let {isLoading, temp, location} = this.state;

    function renderMessage() {
      if(isLoading) {
        return (
          <h3 className="text-center">Fetching weather...</h3>
        );
      }else if(temp && location){
        return (
          <WeatherMessage location={location} temp={temp}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this._handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
