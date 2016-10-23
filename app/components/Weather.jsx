let React = require('react');

let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');

let openWeatherMap = require('openWeatherMap');

let ErrorModal = require('ErrorModal');

let Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  componentDidMount: function() {
    let location = this.props.location.query.location;

    if(location && location.length > 0) {
      this._handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps) {
    let location = newProps.location.query.location;

    if(location && location.length > 0) {
      this._handleSearch(location);
      window.location.hash = '#/';
    }
  },
  _handleSearch: function(location) {
    let that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, (error) => {
      this.setState({
        isLoading: false,
        errorMessage: error.message
      });
      console.error(error);
    });
  },
  render: function() {
    let {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return (
          <p className="text-center">Fetching weather...</p>
        );
      }else if(temp && location){
        return (
          <WeatherMessage location={location} temp={temp}/>
        );
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this._handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
