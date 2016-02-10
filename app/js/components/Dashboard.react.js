'use strict'

var React = require('react');
var Widget = require('./Widget.react');
var NumberWidget = require('./NumberWidget.react');
var LineChartWidget = require('./LineChartWidget.react');

var Dashboard = React.createClass({

  render: function() {
    return (
      <div>
        <div id="main-bg">&nbsp;</div>
        <div id="main-layout">
          <div className="container">
            <div className="row">
              <NumberWidget width="six" title="Number Widget 01" metric="Card holders" value="6865" />
              <LineChartWidget width="six" title="Line chart widget" />
            </div>
            <div className="row">
              <Widget width="four" icon="fa fa-bar-chart" title="Widget 03" />
              <Widget width="four" icon="fa fa-bar-chart" title="Widget 04" />
              <Widget width="four" icon="fa fa-bar-chart" title="Widget 05" />
            </div>
            <div className="row">
              <LineChartWidget width="twelve" title="Line chart widget" />
            </div>
            <div className="row">
              <NumberWidget width="three" title="Holders" metric="Card holders" value="6865" />
              <Widget width="three" icon="fa fa-bar-chart" title="Widget 08" />
              <Widget width="three" icon="fa fa-bar-chart" title="Widget 09" />
              <Widget width="three" icon="fa fa-bar-chart" title="Widget 10" />
            </div>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Dashboard;
