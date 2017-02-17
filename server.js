require('babel-register')({
    presets: ['react','es2015']
});

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var express = require('express');
var app = express();

app.use(express.static('./public'));

app.use(require('./routes'));

app.listen(3000,function(){
    console.log('Started at 3000');
});
