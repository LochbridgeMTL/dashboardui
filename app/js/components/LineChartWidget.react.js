'use strict'

var React = require('react');
var WidgetTitle = require('./WidgetTitle.react');
var Chart = require('chart.js');
var $ = require('jquery');
var uuid = require('uuid');

var LineChartWidget = React.createClass({

  getInitialState: function() {
    this.canvasId = uuid.v4();
    this.containerId = uuid.v4();
    window.addEventListener('resize', this.resizeCanvas, false);
    return null;
  },

  drawLineChart: function() {
    var _this = this;
    $.ajax({
      url: 'data/linechartdata.json',
      type: 'GET',
      dataType: 'json',
    }).complete(function(data) {
      console.log(JSON.parse(data.responseText));
      var ctx = document.getElementById(_this.canvasId).getContext("2d");
      var myLineChart = new Chart(ctx).Line(JSON.parse(data.responseText), {
        showTooltips: false
      });
    });
  },

  resizeCanvas: function() {
    var canvas = document.getElementById(this.canvasId);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.componentDidMount();
  },

  componentDidMount: function() {
    var width = $("#" + this.containerId).width() - 24;
    var height = ((width * 9) / 16);
    $("#" + this.canvasId).width(width);
    $("#" + this.canvasId).height(height);
    this.drawLineChart();
  },

  render: function() {
    var width = this.props.width + " columns widget line-chart-widget"
    return (
      <div className={width} id={this.containerId}>
        <WidgetTitle icon="fa fa-line-chart" value={this.props.title} />
        <div className="widget-body">
          <canvas id={this.canvasId}></canvas>
        </div>
      </div>
    )
  }

});

module.exports = LineChartWidget;
