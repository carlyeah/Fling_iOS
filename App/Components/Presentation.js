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
            position: {
                top: 200,
                left: 0,
                height: 100
            }
        }
    }

    animateDoorSign() {
        var animation = new RNTAnimation({

            // Start state
            start: {
                top: this.state.position.top,
                left: this.state.position.left,
                height: this.state.position.height
            },

            // End state
            end: {
                top: this.state.position.top,
                left: this.state.position.left,
                height: 500
            },

            // Animation duration
            duration: 300,

            // Tween function
            tween: 'easeOutBack',

            // Update the component's state each frame
            frame: (tweenFrame) => {
                this.setState({
                    position: tweenFrame
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
            top: this.state.position.top,
            left: this.state.position.left,
            height: this.state.position.height
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
