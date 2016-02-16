'use strict'

var React = require('react');
var MenuItem = require('./MenuItem.react');
var MerchantID = require('./MerchantID.react');
var Summary = require('./Summary.react');

var Application = React.createClass({

  getInitialState: function() {
    return {
      summary:true,
      sales: false,
      insight: false
    };
  },

  handleMenuItemClick: function(page) {
    var state = {summary: false, sales: false, insight: false}
    state[page] = true;
    this.setState(state);
  },

  render: function() {
    return(
      <div>
        <div id="menu-container" className="u-pull-left">
          <MerchantID />
          <MenuItem label="Summary" onClick={this.handleMenuItemClick} page="summary" active={this.state.summary} />
          <MenuItem label="Credit sales" onClick={this.handleMenuItemClick} page="sales" active={this.state.sales} />
          <MenuItem label="Customer insight" onClick={this.handleMenuItemClick} page="insight" active={this.state.insight} />
        </div>
        <div className="u-pull-left" id="main-content">
          <Summary />
        </div>
      </div>
    )
  }

});

module.exports = Application;
