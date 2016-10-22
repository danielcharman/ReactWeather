let React = require('react');

// let About = React.createClass({
//   render: function() {
//     return (
//       <h2>About Component</h2>
//     );
//   }
// });


//stateless component version
let About = (props) => {
  return (
    <div>
      <h2 className="text-center">About</h2>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  );
};

module.exports = About;
