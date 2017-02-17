var ReactRouter = require('react-router');
var React = require('react');
var Main = require('./Main');
var About = require('./About');
var Base = require('./layouts/Base');

if(typeof window === 'object'){
  var createElement = function(Component,props){
    return <Component {...props} custom={window.PROPS} />;
  }
}

module.exports = (
  <ReactRouter.Router history={ReactRouter.browserHistory} createElement={createElement}>
    <ReactRouter.Route path="/" component={Base}>
      <ReactRouter.IndexRoute component={Main} />
      <ReactRouter.Route path="/about" component={About}/>
    </ReactRouter.Route>
  </ReactRouter.Router>
);
