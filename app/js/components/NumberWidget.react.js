'use strict'

var React = require('react');
var WidgetTitle = require('./WidgetTitle.react');
var $ = require('jquery');

var NumberWidget = React.createClass({

  getInitialState: function() {
    return {value: 0, label:""};
  },

  drawNumber: function() {

    var _this = this;
    $.ajax({
      url: _this.props.resource,
      type: 'GET',
      dataType: 'json',
    }).complete(function(data) {
      var parsedData = JSON.parse(data.responseText);
      _this.setState({value: parsedData.value, label: parsedData.label});
    });

  },

  componentDidMount: function() {
    this.drawNumber();
    var _this = this;
    setInterval(function(){
      _this.drawNumber();
    }, 5000);

  },

  render: function() {

    var width = this.props.width + " columns widget number-widget";

    return (
      <div className={width}>
        <WidgetTitle icon="fa fa-hashtag" value={this.props.title} />
        <div className="widget-body">
          <h3>{this.state.value}</h3>
          <div><span>{this.state.label}</span></div>
        </div>
      </div>
    )
  }

});

module.exports = NumberWidget;
