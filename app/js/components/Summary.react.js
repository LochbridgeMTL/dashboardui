'use strict'

var React = require('react');
var NumberWidget = require('./NumberWidget.react');
var BreakdownWidget = require('./BreakdownWidget.react');
var BarChart = require('./BarChart.react');

var Summary = React.createClass({

  render: function() {
    if(this.props.visible == true) {
      return (
        <div>
          <h5 style={{"margin":"0px", "padding":"0px"}}>Summary</h5>
          <BarChart />
          <BreakdownWidget title="Breakdown of sales" />
          <NumberWidget title="Title" label="Label" value="$ 12 345" bg="#62bcfa" />
        </div>
      )
    } else {
      return null;
    }
  }

});

module.exports = Summary;
