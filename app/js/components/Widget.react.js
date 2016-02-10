'use strict'

var React = require('react');
var WidgetTitle = require('./WidgetTitle.react');

var Widget = React.createClass({

  render: function() {

    var width = this.props.width + " columns widget";

    return (
      <div className={width}>
        <WidgetTitle icon={this.props.icon} value={this.props.title} />
        <div className="widget-body">
          Widget {width}
        </div>
      </div>
    )
  }

});

module.exports = Widget;
