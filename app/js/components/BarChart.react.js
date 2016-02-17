'use strict'

var React = require('react');
var uuid = require('uuid');
var WidgetTitle = require('./WidgetTitle.react');
var Chart = require('chart.js');

var BarChart = React.createClass({

  getInitialState: function() {
    this.canvasId = uuid.v4();
    return null;
  },

  componentDidMount: function() {
    console.log("Drawing chart to canvas " + this.canvasId);

    var ctx = document.getElementById(this.canvasId).getContext("2d");
    var myBarChart = new Chart(ctx).Bar({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: "My Second dataset",
              fillColor: "rgba(151,187,205,0.5)",
              strokeColor: "rgba(151,187,205,0.8)",
              highlightFill: "rgba(151,187,205,0.75)",
              highlightStroke: "rgba(151,187,205,1)",
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
    }, {});

  },

  render: function() {
    return (
      <div className="widget" style={{"width": "900px"}}>
        <div className="widget-body">
          <div>
            <a href="#" className="button">Yearly</a>&nbsp;
            <a href="#" className="button">Quarterly</a>&nbsp;
            <a href="#" className="button">Monthly</a>&nbsp;
            <a href="#" className="button"><i className="fa fa-calendar"></i></a>&nbsp;
            <input type="text" placeholder="From"/>&nbsp;
            <a href="#" className="button"><i className="fa fa-calendar"></i></a>&nbsp;
            <input type="text" placeholder="To"/>
          </div>
          <div style={{"backgroundColor":"#DDDDDD", "borderRadius":"8px", "height":"48px", "paddingLeft":"12px"}}>
            <div className="resultGroup u-pull-left">
              <span className="result">$263,753,621.81</span>
              <span className="measure">&nbsp;in card sales</span>
              <span className="difference-positive">&nbsp;&nbsp;<i className="fa fa-long-arrow-up"></i>&nbsp;8.3%</span>
            </div>
            <div className="resultGroup u-pull-left">
              <span className="result">1,831</span>
              <span className="measure">&nbsp;card holders</span>
              <span className="difference-negative">&nbsp;&nbsp;<i className="fa fa-long-arrow-down"></i>&nbsp;1.4%</span>
            </div>
            <div class="resultGroup u-pull-left" style={{"paddingTop":"4px"}}>
              <select class="u-full-width">
                <option value="Option 0">GROUP BY</option>
                <option value="Option 1">Vendor</option>
                <option value="Option 2">Service type</option>
                <option value="Option 3">Average</option>
              </select>
            </div>
          </div>
          <canvas style={{"width":"80%"}} id={this.canvasId}></canvas>
          <div style={{"width":"19%"}} className="notes u-pull-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur, nulla ac egestas convallis, purus quam sodales orci, a placerat mi libero id nisl.
            </p>
            <ul>
              <li><i className="fa fa-square color-blue"></i>&nbsp;Sales</li>
              <li><i className="fa fa-square color-green"></i>&nbsp;Holders</li>
              <li><i className="fa fa-square color-red"></i>&nbsp;Objective</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = BarChart;
