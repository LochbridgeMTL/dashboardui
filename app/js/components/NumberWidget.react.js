'use strict'

var React = require('react');
var WidgetTitle = require('./WidgetTitle.react');

var NumberWidget = React.createClass({

  render: function() {

    var width = this.props.width + " columns widget number-widget";

    return (
      <div className={width}>
        <WidgetTitle icon="fa fa-hashtag" value={this.props.title} />
        <div className="widget-body">
          <h3>{this.props.value}</h3>
          <div><span>{this.props.metric}</span></div>
        </div>
      </div>
    )
  }

});

module.exports = NumberWidget;
