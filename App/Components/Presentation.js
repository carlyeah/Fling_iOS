/**
 * Created by Carlyeah on 5/25/15.
 */
var React = require("react-native");
var Styles = require("../Styles/fl-presentation");
var tweenAnimation = require("react-native-tween-animation");

var {
    View,
    Text,
    StyleSheet,
    Image
    } = React;

var styles = StyleSheet.create(Styles);

class Presentation extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={Styles.doorsign} source={require('image!intro_ic_doorsign')}/>
            </View>
        )
    }
}

module.exports = Presentation;
