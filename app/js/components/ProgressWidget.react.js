'use strict'

var React = require('react');
var WidgetTitle = require('./WidgetTitle.react');
var $ = require('jquery');

var ProgressWidget = React.createClass({

  getInitialState: function() {
    this.data = {
      title: "",
      target: 60,
      current: 12
    };
    return null;
  },

  drawProgress: function() {
    var _this = this;
    $.ajax({
      url: 'data/progressdata.json',
      type: 'GET',
      dataType: 'json',
    }).complete(function(data) {

      var parsedData = JSON.parse(data.responseText);
      if(JSON.stringify(parsedData) != JSON.stringify(_this.data)) {
        _this.data = parsedData;
        _this.setState({redraw: true});
      }

    });
  },

  componentDidMount: function() {
    var _this = this;
    this.drawProgress();
    setInterval(function(){
      _this.drawProgress();
    }, 5000);
  },

  render: function() {

    var pct = Math.round(this.data.current / this.data.target * 100);

    return (

      <div className="twelve columns widget">
        <WidgetTitle icon="fa fa-tasks" value={this.data.title + ' - ' + pct + '%'} />

      <div className="widget-body">

          <div className="progress-bar-container">
            <div className="progress-bar-content" style={{"width":pct + "%"}}>&nbsp;</div>
          </div>
          <div><span>{this.data.current} out of {this.data.target}</span></div>

        </div>
      </div>
    )
  }

});

module.exports = ProgressWidget;
