var React = require('react-native');
var ParallaxView = require("react-native-parallax-view");

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

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 65
    },
    bottomContainer: {
        marginTop: -65,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    rowContainer: {
        paddingRight: 16,
        paddingLeft: 16,
        flexDirection: 'row',
        flex: 2
    },
    header: {
        paddingTop: 12,
        paddingBottom: 12,
        color: "white",
        fontFamily: "BlissPro-ExtraLight",
        fontSize: 11
    },
    serviceTitle: {
        paddingTop: 8,
        paddingBottom: 8,
        color: "white",
        fontFamily: "BlissPro-ExtraLight",
        fontSize: 16,
        flex: 1
    },
    motelPrice: {
        paddingTop: 8,
        paddingBottom: 8,
        color: "white",
        fontFamily: "BlissPro-Bold",
        fontSize: 18,
        flex: 1,
        textAlign: "right"
    }
});

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
