'use strict'

var React = require('react');
var WidgetTitle = require('./WidgetTitle.react');
var $ = require('jquery');

var Widget = React.createClass({

  getInitialState: function() {
    return {value: ""}
  },

  drawValue: function() {

    var _this = this;
    $.ajax({
      url: _this.props.resource,
      type: 'GET',
      dataType: 'json',
    }).complete(function(data) {
      var parsedData = JSON.parse(data.responseText);
      _this.setState({value: parsedData.value});
    });

  },

  componentDidMount: function() {
    this.drawValue();
    var _this = this;
    setInterval(function(){
      _this.drawValue();
    }, 5000);
  },

  render: function() {

    var width = this.props.width + " columns widget";

    return (
      <div className={width}>
        <WidgetTitle icon={this.props.icon} value={this.props.title} />
        <div className="widget-body">{this.state.value}</div>
      </div>
    )
  }

});

module.exports = Widget;
