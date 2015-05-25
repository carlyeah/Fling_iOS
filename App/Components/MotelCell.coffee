'use strict'

React = require('react-native')
Styles = require("../Styles/fl-main")

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

class MotelCell extends React.Component

  render: ->
    <TouchableHighlight underlayColor={'#fafafa'} activeOpacity={0.9} onPress={@props.onSelect}>
      <View style={Styles.container}>
        <View style={Styles.topContainer}>
          <Text style={Styles.title}>Kuboz</Text>
          <View style={Styles.favContainer}>
            <Image style={Styles.favImg} source={require('image!list_fav')}/>
          </View>
        </View>
        <View style={Styles.bottomContainer}>
          <View style={Styles.starsContainer}>
            <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
            <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
            <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
            <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
            <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
          </View>
          <View style={Styles.pricesContainer}>
            <Image style={Styles.pricesImg} source={require('image!list_ic_price')}/>
            <Text style={Styles.pricesText}>300 a 400</Text>
          </View>
          <View style={Styles.distanceContainer}>
            <Image style={Styles.distanceImg} source={require('image!list_ic_distance')}/>
            <Text style={Styles.pricesText}>2km</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>

module.exports = MotelCell
