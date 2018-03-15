var React = require('react');

module.exports = React.createClass({
  _handleClick: function(){
    alert('Ok about!');
    alert('Server Props: '+JSON.stringify(this.props.custom))
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
