'use strict'

var React = require('react');
var MenuItem = require('./MenuItem.react');
var MerchantID = require('./MerchantID.react');
var Summary = require('./Summary.react');

var Application = React.createClass({

  getInitialState: function() {
    return {currentPage: 'summary'};
  },

  render: function() {
    return(
      <div>
        <div id="menu-container" className="u-pull-left">
          <MerchantID />
          <MenuItem label="Summary" />
          <MenuItem label="Credit sales" />
          <MenuItem label="Customer insight" />
        </div>
        <div className="u-pull-left" id="main-content">
          <Summary />
        </div>
      </div>
    )
  }

});

module.exports = Application;
