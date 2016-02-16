'use strict'

var React = require('react');
var WidgetTitle = require('./WidgetTitle.react');

var NumberAndComplement = React.createClass({

  render: function() {
    var width = this.props.width + " columns widget";
    return (
      <div className={width}>
        <WidgetTitle icon="fa fa-usd" value={this.props.title} />
        <div className="widget-body">

          <div className="row">
              <div className="six columns">
                <div className="main-number-label"><span>{this.props.lefttitle}</span></div>
                <div><span>$134&nbsp;827</span></div>
              </div>
              <div className="six columns">
                <div className="main-number-label"><span>{this.props.righttitle}</span></div>
                <div><span>103%</span></div>
                <div><span>$138&nbsp;872</span></div>
              </div>
          </div>

        </div>
      </div>
    )
  }

});

module.exports = NumberAndComplement;
