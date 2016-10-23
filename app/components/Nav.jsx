let React = require('react');

let {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  _onSearch: function(event) {
    event.preventDefault();

    let location = this.refs.location.value;
    let encodedLocation = encodeURIComponent(location);

    if(location.length > 0) {
      this.refs.location.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
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
              <li><input type="search" placeholder="Search weather by city" ref="location"/></li>
              <li><button type="submit" className="button">Get Weather</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
