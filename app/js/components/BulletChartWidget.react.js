'use strict'

var React = require('react');
var WidgetTitle = require('./WidgetTitle.react');

var BulletChartWidget = React.createClass({

  render: function() {
    return (
      <div className="twelve columns widget">
        <WidgetTitle icon="fa fa-line-chart" value="Bullet chart" />
        <div className="widget-body">
          <img src="images/goals.png" width="100%" />
        </div>
      </div>
    )
  }

});

module.exports = BulletChartWidget;
