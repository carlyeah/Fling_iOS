/**
 * Created by Carlyeah on 5/25/15.
 */
var React = require("react-native");
var Styles = require("../Styles/fl-presentation");
var RNTAnimation = require("react-native-tween-animation");

var {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
    } = React;

var styles = StyleSheet.create(Styles);

class Presentation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: this.props.imageHeight,
        }
    }

    animateDoorSign() {
        var animation = new RNTAnimation({

            // Start state
            start: {
                height: this.state.height,
            },

            // End state
            end: {
                height: this.state.height * 2
            },

            // Animation duration
            duration: 500,

            // Tween function
            tween: 'easeOutBack',

            // Update the component's state each frame
            frame: (tweenFrame) => {
                this.setState({
                    height: tweenFrame
                });
            },

            // Optional callback
            done: () => {

                console.log('All done!');

                // Optionally reverse the animation
                animation.reverse(() => {
                });
            }
        });
    }

    render() {

        var style = {
            marginTop: 200,
            height: this.state.height
        };

        return (
            <TouchableHighlight
                onPress={this.animateDoorSign.bind(this)}
                underlayColor="#88D4F5">
                <View style={styles.container}>
                    <Image style={style}
                           resizeMode="contain"
                           source={require('image!intro_ic_doorsign')}/>
                </View>
            </TouchableHighlight>
        )
    }
}

Presentation.defaultProps = {
    imageHeight: 100,
};

module.exports = Presentation;
