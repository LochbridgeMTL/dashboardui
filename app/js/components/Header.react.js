'use strict'

var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="twelve columns" style={{"fontSize": "2em"}}>
              <img src="images/header.png" />
            </div>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Header;
