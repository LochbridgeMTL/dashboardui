'use strict'

var React = require('react');

var MenuItem = React.createClass({

  getInitialState: function() {
    return {active: false}
  },

  toggle: function() {
    this.setState({active: !(this.state.active)});
  },

  render: function() {

    var className = (this.state.active ? "menu-item menu-item-active" : "menu-item");
    var contextualClass = (this.state.active ? "contextual-items" : "contextual-items-hidden");
    return (
      <div>
        <div className={className} onClick={this.toggle}>
          {this.props.label}
        </div>
        <div className={contextualClass}>
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
