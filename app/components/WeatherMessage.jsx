let React = require('react');

//stateless component version
let WeatherMessage = ({location, temp}) => {
  // let {location, temp} = props;
  return (
    <p className="text-center">It's {temp.toFixed(1)}&deg; in {location}</p>
  );
};

module.exports = WeatherMessage;
