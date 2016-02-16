'use strict'

var React = require('react');

var MenuItem = React.createClass({

  onClick: function() {
    this.props.onClick(this.props.page);
  },

  render: function() {

    console.log(this.props.page + " -> " + this.props.active);
    var className = (this.props.active == true ? "menu-item menu-item-active" : "menu-item");
    var contextualClass = (this.props.active == true ? "contextual-items" : "contextual-items-hidden");
    return (
      <div>
        <div className={className} onClick={this.onClick}>
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
