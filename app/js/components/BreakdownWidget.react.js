'use strict'

var React = require('react');

var BreakdownWidget = React.createClass({

  render: function() {
    return (
      <div className="widget" style={{"width":"41%"}}>
        <div className="widget-body breakdown-widget">
          <div className="breakdown-widget-top">Sales</div>
          <div className="breakdown-widget-middle">
            <h3>$12,364.85</h3>
            <ul>
              <li><i className="fa fa-plus-circle"></i>&nbsp;4% From Last Week</li>
              <li><i className="fa fa-minus-circle"></i>&nbsp;12% From 4 Weeks Ago</li>
              <li><i className="fa fa-plus-circle"></i>&nbsp;6% From 6 Months Ago</li>
            </ul>
          </div>
          <div className="breakdown-widget-bottom">1,274 Transactions</div>
        </div>
      </div>
    )
  }

});

module.exports = BreakdownWidget;
