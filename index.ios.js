'use strict';
var React = require('react-native');
var Main = require("./App/Components/Main");
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
                component: Main
                }
                }/>
        );
    }
}

AppRegistry.registerComponent('FlingiOS', () => FlingiOS);
