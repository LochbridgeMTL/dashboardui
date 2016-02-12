'use strict'

var React = require('react');

var WidgetTitle = React.createClass({

  render: function() {
    return (
      <div className="widget-title">
        <div style={{"float":"right"}}>
          <a href="#" style={{"color":"#333333"}}><i className="fa fa-cog"></i></a>
        </div>
        <i className={this.props.icon}></i>&nbsp;{this.props.value}
      </div>
    )
  }

});

module.exports = WidgetTitle;
