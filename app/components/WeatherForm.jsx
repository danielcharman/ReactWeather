let React = require('react');

let WeatherForm = React.createClass({
  _onFormSubmit: function(e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }else{
      console.error('Empty location')
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this._onFormSubmit}>
          <input type="search" ref="location" placeholder="Search weather by city"/>
          <button className="button expanded hollow">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
