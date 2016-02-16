'use strict'

var React = require('react');

var MerchantID = React.createClass({

  render: function() {
    return (
      <div id="nav-logo">
        <img src="images/logo.png" width="90%" />
        <div className="u-pull-right" style={{"marginRight":"18px", "fontSize":"0.8em", "color":"#666666"}}>
          powered by CFNA
        </div>
      </div>
    )
  }

});

module.exports = MerchantID;
