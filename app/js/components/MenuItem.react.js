'use strict'

var React = require('react');

var MenuItem = React.createClass({

  getInitialState: function() {
    return {active: false}
  },

  render: function() {

    var className = (this.state.active ? "menu-item menu-item-active" : "menu-item");

    return (
      <div>
        <div className={className}>
          {this.props.label}
        </div>
        <div className="contextual-items">
          <div><a href="#">Complement</a></div>
          <div><a href="#">Complement</a></div>
          <div><a href="#">Complement</a></div>
          <div><a href="#">Complement</a></div>
          <div><a href="#">Complement</a></div>
          <div><a href="#">Complement</a></div>
        </div>
      </div>
    )
  }

});

module.exports = MenuItem;
