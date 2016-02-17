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
          <NumberWidget title="Total Sales YTD" label1="2016" label2="2015" value1="$ 12 345" value2="$ 10 345" bg="#F06868" bg1="#62bcfa" bg2="#936565"/>
          <NumberWidget title="Monthly Sales" label1="2/16" label2="2/15" value1="$ 1 345" value2="$ 1 045" bg="#1FEEA2" bg1="#62bcfa" bg2="#936565"/>
          <NumberWidget title="Daily Sales" label1="2/17" label2="2/17" value1="$ 345" value2="$ 245" bg="#EEEA1F" bg1="#62bcfa" bg2="#936565"/>
        </div>
      )
    } else {
      return null;
    }
  }

});

module.exports = Summary;
