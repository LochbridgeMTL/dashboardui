'use strict'

var React = require('react');

var Dashboard = React.createClass({

  render: function() {
    return (
      <div>
        <div id="main-bg">&nbsp;</div>
        <div id="main-layout">
          <div className="container">
            <h3>Widgets</h3>
          </div>
        </div>
      </div>  
    )
  }

});

module.exports = Dashboard;
