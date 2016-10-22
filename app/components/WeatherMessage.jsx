let React = require('react');

// let WeatherMessage = React.createClass({
//   render: function() {
//     let {location, temp} = this.props;
//
//     return (
//       <h3>It's {temp}&deg; in {location}</h3>
//     );
//   }
// });

//stateless component version
let WeatherMessage = ({location, temp}) => {
  // let {location, temp} = props;
  return (
    <h3>It's {temp}&deg; in {location}</h3>
  );
};

module.exports = WeatherMessage;
