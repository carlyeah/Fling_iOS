/**
 * Created by Carlyeah on 5/17/15.
 */
var React = require('react-native');
var Styles = require("../Styles/fl-main")

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

class MotelCell extends React.Component {

    render() {
        return (
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
        );
    }
}

module.exports = MotelCell;
