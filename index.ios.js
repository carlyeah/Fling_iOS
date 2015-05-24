'use strict';
var App, AppRegistry, React;

React = require('react-native');

AppRegistry = React.AppRegistry;

App = require('./App/dist/App');

AppRegistry.registerComponent('FlingiOS', function() {
  return App;
});
