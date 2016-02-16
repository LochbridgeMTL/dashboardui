'use strict'

var React = require('react');

var CreditSales = React.createClass({

  render: function() {
    if(this.props.visible == true) {
      return (
        <div>
          <h5 style={{"margin":"0px", "padding":"0px"}}>Credit sales</h5>
        </div>
      )
    } else {
      return null;
    }
  }

});

module.exports = CreditSales;
