let React = require('react');

let {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  _onSearch: function(event) {
    event.preventDefault();

    alert('Computer says no...');
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>

        <div className="top-bar-right">
          <form onSubmit={this._onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search weather"/></li>
              <li><button type="submit" className="button">Get Weather</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
