'use strict'

var React = require('react');
var WidgetTitle = require('./WidgetTitle.react');
var Chart = require('chart.js');
var $ = require('jquery');
var uuid = require('uuid');

var PieChartWidget = React.createClass({

  getInitialState: function() {
    this.canvasId = uuid.v4();
    this.containerId = uuid.v4();
    this.notes = [];
    this.title = "Title to be set by service";
    this.data = null;
    window.addEventListener('resize', this.resizeCanvas, false);
    return null;
  },

  drawLineChart: function() {
    var _this = this;
    $.ajax({
      url: _this.props.resource,
      type: 'GET',
      dataType: 'json',
    }).complete(function(data) {

      var parsedData = JSON.parse(data.responseText);
      if(JSON.stringify(parsedData) != JSON.stringify(_this.data)) {

        _this.data = parsedData;
        var ctx = document.getElementById(_this.canvasId).getContext("2d");
        var myPieChart = new Chart(ctx).Pie(_this.data, {
          showTooltips: false
        });
        _this.notes = [];
        for(var i in _this.data) {
          _this.notes.push(<li key={uuid.v4()}><i className="fa fa-stop" style={{"color":_this.data[i].color}}>&nbsp;</i>{_this.data[i].label}&nbsp;({_this.data[i].value})</li>);
        }
        _this.setState({redraw: true});

      }

    });
  },

  resizeCanvas: function() {
    var canvas = document.getElementById(this.canvasId);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.data = null;
    this.setCanvasSize();
    this.drawLineChart();
  },

  setCanvasSize: function() {
    var width = $("#" + this.containerId).width() - 24;
    var height = ((width * 9) / 18);
    $("#" + this.canvasId).width(width * 0.50);
    $("#" + this.canvasId).height(height);
  },

  componentDidMount: function() {
    this.setCanvasSize();
    this.drawLineChart();
    var _this = this;
    setInterval(function(){
      _this.drawLineChart();
    }, 5000);
  },

  render: function() {
    var width = this.props.width + " columns widget pie-chart-widget";
    return (
      <div className={width} id={this.containerId}>

        <div className="row">

          <div className="twelve columns">
            <WidgetTitle icon="fa fa-pie-chart" value={this.title} />
          </div>

        </div>

        <div className="row">

          <div className="six columns">
            <div className="widget-body">
              <canvas id={this.canvasId}></canvas>
            </div>
          </div>

          <div className="six columns" style={{"paddingTop":"12px"}}>
            <div>
              <ul>{this.notes}</ul>
            </div>
          </div>

        </div>

      </div>
    )
  }

});

module.exports = PieChartWidget;
