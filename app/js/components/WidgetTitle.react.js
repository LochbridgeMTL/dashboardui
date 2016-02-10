'use strict'

var React = require('react');

var WidgetTitle = React.createClass({

  render: function() {
    return (
      <div className="widget-title">
        <i className={this.props.icon}></i>&nbsp;{this.props.value}
      </div>
    )
  }

});

module.exports = WidgetTitle;
