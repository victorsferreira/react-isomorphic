var React = require('react');

module.exports = React.createClass({
  _handleClick: function(){
    alert('Ok!');
  },
  render: function(){
    return (
        <div>
          <button onClick={ this._handleClick }>Olá mundo</button>
        </div>
    );
  }
});
