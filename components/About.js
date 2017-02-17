var React = require('react');

module.exports = React.createClass({
  _handleClick: function(){
    alert('Ok about!');
  },
  render: function(){
    return (
        <div>
          <h1>Olá about</h1>
          <button onClick={ this._handleClick }>Olá mundo</button>
        </div>
    );
  }
});
