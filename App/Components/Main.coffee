'use strict'

React = require('react-native')
ParallaxView = require("react-native-parallax-view")
Styles = require("../Styles/fl-main")
MotelCell = require("./MotelCell")
MotelDetails = require("./Details")

{
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  ListView,
  Image
  } = React

styles = StyleSheet.create(Styles)

REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'

class Main extends React.Component

  constructor: (props) ->
    super props
    @state =
      dataSource: new ListView.DataSource (
        rowHasChanged: (row1, row2) ->
          row1 != row2)
      loaded: false

  componentDidMount: ->
    @fetchData()

  renderLoadingView: ->
    <View style={Styles.container}>
      <Text style={Styles.title}>
        Loading motels...
      </Text>
    </View>

  fetchData: =>
    fetch(REQUEST_URL).then((response) =>
      response.json()
    ).then((responseData) =>
      @setState
        dataSource: @state.dataSource.cloneWithRows(responseData.movies)
        loaded: true
    ).done()

  selectMotel: (motel) ->
    @props.navigator.push
      title: 'Details'
      component: MotelDetails

  renderRow: (motel) =>
    <MotelCell
      onSelect={ => @selectMotel(motel)}
      key={motel.id}
      motel={motel}
      />

  footer: =>
    unless @state.loaded
      return @renderLoadingView()
    #automaticallyAdjustContentInsets - false remove an awkard space in the table parallax control
    <ListView
      automaticallyAdjustContentInsets={false}
      dataSource={@state.dataSource}
      renderRow={@renderRow}
      style={Styles.listView}
      />

  render: ->
    <ParallaxView
      style={Styles.mainContainer}
      windowHeight={200}
      backgroundSource={require('image!motel_demo')}>
      {@footer()}
    </ParallaxView>

module.exports = Main
