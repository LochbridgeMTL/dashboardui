'use strict'

var React = require('react');
var Widget = require('./Widget.react');
var NumberWidget = require('./NumberWidget.react');
var LineChartWidget = require('./LineChartWidget.react');
var PieChartWidget = require('./PieChartWidget.react');

var Dashboard = React.createClass({

  render: function() {
    return (
      <div>
        <div id="main-bg">&nbsp;</div>
        <div id="main-layout">

          <div className="container">

            <div className="row">
              <NumberWidget width="six" title="Number Widget 01" resource="data/numberdata.json" />
              <LineChartWidget width="six" title="Line chart widget" />
            </div>

            <div className="row">
              <PieChartWidget resource="data/piechartdata2.json" width="six" title="Pie chart widget" />
              <Widget resource="data/widgetdata.json" width="six" icon="fa fa-font" title="Widget 08" />
            </div>

            <div className="row">
              <Widget resource="data/widgetdata2.json" width="six" icon="fa fa-font" title="Widget 08" />
              <PieChartWidget resource="data/piechartdata.json" width="six" title="Pie chart widget" />
            </div>

          </div>

        </div>
      </div>
    )
  }

});

module.exports = Dashboard;
