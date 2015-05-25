'use strict'

React = require 'react-native'

Main = require './Components/Main'

{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
  } = React

styles = StyleSheet.create
  container:
    flex: 1
    backgroundColor: '#111111'

class App extends React.Component
  render: ->
    <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: "Fling",
        component: Main
        }}/>

module.exports = App
