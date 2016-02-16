'use strict'

var React = require('react');
var NumberWidget = require('./NumberWidget.react');

var Summary = React.createClass({

  render: function() {
    return (
      <div>
        <NumberWidget title="Title" label="Label" value="$ 12 345" bg="#62bcfa" />
      </div>
    )
  }

});

module.exports = Summary;
