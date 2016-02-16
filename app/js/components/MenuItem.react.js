'use strict'

var React = require('react');

var MenuItem = React.createClass({

  onClick: function() {
    this.props.onClick(this.props.page);
  },

  render: function() {

    var className = (this.props.active == true ? "menu-item menu-item-active" : "menu-item");
    var contextualClass = (this.props.active == true ? "contextual-items" : "contextual-items-hidden");

    var subsections = [];
    for(var i in this.props.subsections) {
      subsections.push(<div key={this.props.page + '-' + i}><a href="#">{this.props.subsections[i]}</a></div>);
    }

    return (
      <div>
        <div className={className} onClick={this.onClick}>
          {this.props.label}
        </div>
        <div className={contextualClass}>
          {subsections}
        </div>
      </div>
    )

  }

});

module.exports = MenuItem;
