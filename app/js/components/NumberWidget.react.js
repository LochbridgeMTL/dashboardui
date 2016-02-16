'use strict'

var React = require('react');
var WidgetTitle = require('./WidgetTitle.react');
var $ = require('jquery');

var NumberWidget = React.createClass({

  getInitialState: function() {
    return {value: 0, label:"", title: ""};
  },

  render: function() {

    return (
      <div className="widget number-widget" style={{"width": "400px"}}>
        <WidgetTitle icon="fa fa-hashtag" value={this.props.title} />
        <div className="widget-body">

          <div style={{"width": "150px", "height": "200px"}}>
            <div className="number-widget-value" style={{"backgroundColor":this.props.bg}}>
              <h3>{this.props.value}</h3>
            </div>
            <div><span>{this.props.label}</span></div>
          </div>

        </div>
      </div>
    )
  }

});

module.exports = NumberWidget;
