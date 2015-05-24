React = require 'react-native'

MyCustomView = require './views/MyCustomView'

class App extends React.Component
  render: ->
    <MyCustomView myCustomProp={'!'}>
    </MyCustomView>

module.exports = App