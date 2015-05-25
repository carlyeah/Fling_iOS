'use strict';
var App, AppRegistry, React;

React = require('react-native');

App = require('./App/dist/App');

AppRegistry = React.AppRegistry;

AppRegistry.registerComponent('FlingiOS', function() {
  return App;
});
