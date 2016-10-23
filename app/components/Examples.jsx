let React = require('react');

let {Link} = require('react-router');

//stateless component version
let Examples = (props) => {
  let locations = [
    'Horsley, Australia',
    'Figtree, Australia'
  ]

  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        {locations.map((location, index) =>
          <li key={index}>
            <Link to={"/?location=" + encodeURIComponent(location)}>{location}</Link>
          </li>
        )}
      </ol>
    </div>
  );
};

module.exports = Examples;
