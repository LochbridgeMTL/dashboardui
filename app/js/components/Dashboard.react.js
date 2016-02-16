'use strict'

var React = require('react');
var Widget = require('./Widget.react');
var NumberWidget = require('./NumberWidget.react');
var LineChartWidget = require('./LineChartWidget.react');
var PieChartWidget = require('./PieChartWidget.react');
var ProgressWidget = require('./ProgressWidget.react');
var TimeSeriesWidget = require('./TimeSeriesWidget.react');
var NumberAndComplement = require('./NumberAndComplement.react');
var BulletChartWidget = require('./BulletChartWidget.react');

var Dashboard = React.createClass({

  render: function() {
    return (
      <div>
        <div id="main-bg">&nbsp;</div>
        <div id="main-layout">

          <div className="container">

            <div className="row">
              <BulletChartWidget />
            </div>

            <div className="row">
              <NumberAndComplement width="four" title="Credit sales - Yearly" lefttitle="Year to date" righttitle="Year over year" />
              <NumberAndComplement width="four" title="Credit sales - Quarterly" lefttitle="This quarter" righttitle="Year over year" />
              <NumberAndComplement width="four" title="Credit sales - Monthly" lefttitle="This month" righttitle="Year over year" />
            </div>

            <div className="row">
              <TimeSeriesWidget title="Time series" width="twelve" />
            </div>

          </div>

        </div>
      </div>
    )
  }

});

module.exports = Dashboard;

// <div className="row">
//   <LineChartWidget width="twelve" title="Line chart widget" />
// </div>
//
// <div className="row">
//   <PieChartWidget resource="data/piechartdata2.json" width="four" title="Pie chart widget" />
//   <Widget resource="data/widgetdata.json" width="four" icon="fa fa-font" title="Widget 08" />
//   <NumberWidget width="four" resource="data/numberdata01.json" />
// </div>
//
// <div className="row">
//   <Widget resource="data/widgetdata2.json" width="six" icon="fa fa-font" title="Widget 08" />
//   <PieChartWidget resource="data/piechartdata2.json" width="six" title="Pie chart widget" />
// </div>
