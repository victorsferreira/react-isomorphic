var React = require('react');

module.exports = React.createClass({
  render: function(){
    var custom = this.props.custom;
    return (
      <html>
        <head>
          <title>{custom.title}</title>
        </head>
        <body>
          {this.props.children}
          <script dangerouslySetInnerHTML={ {
              __html: 'window.PROPS='+JSON.stringify(custom)
            } } />
            <script src='/bundle.js'></script>
          </body>
        </html>
      );
    }
  });
