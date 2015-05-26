'use strict';
var React = require('react-native');
var Main = require("./App/Components/Main");
var Details = require("./App/Components/Details");
var Presentation = require("./App/Components/Presentation");

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
    } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    }
});

class FlingiOS extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={
                {
                title: "Fling",
                component: Presentation
                }
                }/>
        );
    }
}

AppRegistry.registerComponent('FlingiOS', () => FlingiOS);
