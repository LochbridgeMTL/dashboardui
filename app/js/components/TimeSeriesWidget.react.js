'use strict'

var React = require('react');
var WidgetTitle = require('./WidgetTitle.react');
var MG = require('metrics-graphics');
var d3 = require('d3');

var TimeSeriesWidget = React.createClass({

  getInitialState: function() {
    return null;
  },

  componentDidMount: function() {
    var _this = this;
    d3.json('data/timeseriesdata.json', function(data) {
        for (var i = 0; i < data.length; i++) {
            data[i] = MG.convert.date(data[i], 'date');
        }
        MG.data_graphic({
            data: data,
            full_width: true,
            height: 300,
            right: 0,
            baselines: [{value: 160000000, label: 'a baseline'}],
            target: '#my-graph',
            legend: ['Line 1','Line 2','Line 3'],
            legend_target: '.legend',
            markers: [{
                'date': new Date('2014-02-01T00:00:00.000Z'),
                'label': '1st Milestone'
            }, {
                'date': new Date('2014-03-15T00:00:00.000Z'),
                'label': '2nd Milestone'
            }]
        });
    });
  },

  render: function() {
    var width = this.props.width + " columns widget line-chart-widget";
    return (
      <div className={width}>
        <WidgetTitle icon="fa fa-line-chart" value={this.props.title} />
        <div className="widget-body">
          <div id="my-graph"></div>
        </div>
      </div>
    )
  }

});

module.exports = TimeSeriesWidget;
