'use strict'

var React = require('react');
var Header = require('./Header.react');
var Footer = require('./Footer.react');
var Dashboard = require('./Dashboard.react');

var Application = React.createClass({

  getInitialState: function() {
    return null;
  },

  render: function() {
    return(
      <div>
        <Header />
        <Dashboard />
        <Footer />
      </div>
    )
  }

});

module.exports = Application;
