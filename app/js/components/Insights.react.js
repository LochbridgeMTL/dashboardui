'use strict'

var React = require('react');

var Insights = React.createClass({

  render: function() {
    if(this.props.visible == true) {
      return (
        <div>
          <h5 style={{"margin":"0px", "padding":"0px"}}>Customer insights</h5>
        </div>
      )
    } else {
      return null;
    }
  }

});

module.exports = Insights;
