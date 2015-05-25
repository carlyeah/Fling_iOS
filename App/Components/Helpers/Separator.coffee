'use strict'

React = require('react-native')

{
  View,
  StyleSheet
} = React

styles = StyleSheet.create
  separator:
    height: 1.0
    backgroundColor: "#4E4E53"
    flex: 1
    marginLeft: 15

class Separator extends React.Component
  render: ->
    <View style={styles.separator}/>

module.exports = Separator
