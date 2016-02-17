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
      <div className="widget number-widget u-pull-left" style={{"width": "400px", "marginRight":"12px"}}>
        <WidgetTitle icon="fa fa-hashtag" value={this.props.title} bg={this.props.bg}/>
        <div className="widget-body">

          <div style={{"width": "370px", "height": "200px"}}>
            <div className="number-widget-value" style={{"backgroundColor":this.props.bg1}}>
              <h3>{this.props.value1}</h3>
            </div>
            <div className="number-widget-value" style={{"backgroundColor":this.props.bg2, "float":"right"}}>
              <h3>{this.props.value2}</h3>
            </div>
          </div>
          <div style={{"width": "350px", "height": "5px"}}>
            <h5 style={{"float":"left", "margin-top":"-25px", "margin-left":"50px"}}>{this.props.label1}</h5>
            <h5 style={{"float":"right", "margin-top":"-25px", "margin-right":"40px"}}>{this.props.label2}</h5>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = NumberWidget;
