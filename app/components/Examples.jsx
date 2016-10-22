let React = require('react');

let {Link} = require('react-router');

// let Examples = React.createClass({
//   render: function() {
//     return (
//       <h2>Examples Component</h2>
//     );
//   }
// });

//stateless component version
let Examples = (props) => {
  return (
    <div>
      <h2 className="text-center">Examples</h2>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Horsley, Australia">Horsley, Australia</Link>
        </li>
          <li>
            <Link to="/?location=Figtree, Australia">Figtree, Australia</Link>
          </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
