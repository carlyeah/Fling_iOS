var React = require('react-native');
var ParallaxView = require("react-native-parallax-view");
var Styles = require("../Styles/fl-details");

var {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS,
    ListView,
    Image
    } = React;

var styles = StyleSheet.create(Styles);

class Details extends React.Component {

    footer() {
        return (
            //automaticallyAdjustContentInsets - false remove an awkard space in the table parallax control
            <View style={styles.bottomContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.header}>
                        HABITACIONES Y PRECIOS
                    </Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.groupElement}>
                        Sencilla sin cochera
                    </Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.groupElement}>
                        Sencilla con cochera
                    </Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.serviceTitle}>
                        Suite
                    </Text>
                    <Text style={styles.motelPrice}>
                        $300
                    </Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ParallaxView
                style={styles.mainContainer}
                windowHeight={200}
                backgroundSource={require('image!details_example')}>
                {this.footer()}
            </ParallaxView>
        )
    }
}

module.exports = Details;
