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
    #HEADSUP
    #We need to bind the functions to let the components use them
    #Check MotelCell component onSelect attribute
    #http://stackoverflow.com/questions/29532926/this-value-is-null-in-function-react-native
    @renderRow = @renderRow.bind(this)
    @selectMotel = @selectMotel.bind(this)
    @state =
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 isnt row2
      }),
      loaded: no

  componentDidMount: ->
    @fetchData()

  renderLoadingView: ->
    <View style={Styles.container}>
      <Text>
        Loading movies...
      </Text>
    </View>

  fetchData: =>
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        @setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: yes
        })
      }).done()

  selectMotel: (motel) =>
    @props.navigator.push
      title: "Details",
      component: MotelDetails

  renderRow: (motel) =>
    <MotelCell
      onSelect={@selectMotel(motel)}
      key={motel.id}
      motel={motel}
      />

  footer: =>
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
