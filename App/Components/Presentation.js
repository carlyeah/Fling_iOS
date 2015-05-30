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
        this.animateDoorSign = this.animateDoorSign.bind(this);
        this.state = {
            position: {
                height: 100
            }
        }
    }

    animateDoorSign(animationCountDown) {
        console.log(animationCountDown);
        var animation = new RNTAnimation({

            // Start state
            start: {
                height: this.state.position.height
            },

            // End state
            end: {
                height: 300
            },

            // Animation duration
            duration: 150,

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
                // Optionally reverse the animation
                var delayTime = 0;
                animation.reverse(() => {
                    animationCountDown++;
                    if (animationCountDown > 1) {
                        animationCountDown = 0;
                        delayTime = 1000;
                    } else {
                        delayTime = 0;
                    }
                    setTimeout(()=> {
                            this.animateDoorSign(animationCountDown)
                        }, delayTime
                    )

                });
            }
        });
    }

    render() {

        var style = {
            backgroundColor: "transparent",
            width: this.state.position.height,
            height: this.state.position.height
        };

        return (
            <TouchableHighlight
                style={styles.container}
                onPress={() => this.animateDoorSign(0)}
                underlayColor="#88D4F5">
                <View style={styles.container}>
                    <Image style={style}
                           resizeMode="contain"
                           source={require('image!intro_ic_heart')}/>
                </View>
            </TouchableHighlight>)

    }
}

Presentation.defaultProps = {
    imageHeight: 100,
};

module.exports = Presentation;
