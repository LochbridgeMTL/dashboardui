'use strict'

var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="twelve columns" style={{"fontSize": "2em"}}>
              <span><i className="fa fa-newspaper-o"></i>&nbsp;Dashboard</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Header;
