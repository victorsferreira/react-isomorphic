var express = require('express');
var router = express.Router();
var React = require('react');
var ReactRouter = require('react-router');
var ReactDOMServer = require('react-dom/server');
var Main = require('./components/Main');
var About = require('./components/About');
var routes = require('./components/router');

router.get('*', function (req, res, next) {
  var props = { title: 'My Title' };
  // banco de dados
  routing(req,res,props,next);
});

function routing(req,res,serverProps,next){
  ReactRouter.match({
    routes : routes,
    location: req.url
  }, function (error, redirect, props) {
    if (props) {

      var html = ReactDOMServer.renderToString(
        <ReactRouter.RouterContext {...props}
          createElement={function(Component, props) {
            return <Component {...props} custom={serverProps} />;
          }}
          />
      );

      res.send(html);
    } else {
      res.status(404).send('Not found');
    }
  });
}

module.exports = router;
