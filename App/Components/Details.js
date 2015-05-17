var React = require('react-native');
var ParallaxView = require("react-native-parallax-view");
var Separator = require("./Helpers/Separator");
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
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        HABITACIONES Y PRECIOS
                    </Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.serviceTitle}>
                        Sencilla sin cochera
                    </Text>
                    <Text style={styles.motelPrice}>
                        $300
                    </Text>
                </View>
                <Separator/>
                <View style={styles.rowContainer}>
                    <Text style={styles.serviceTitle}>
                        Sencilla con cochera
                    </Text>
                    <Text style={styles.motelPrice}>
                        $300
                    </Text>
                </View>
                <Separator/>
                <View style={styles.rowContainer}>
                    <Text style={styles.serviceTitle}>
                        Suite
                    </Text>
                    <Text style={styles.motelPrice}>
                        $300
                    </Text>
                </View>
                <Separator/>
                <View style={styles.rowContainer}>
                    <Text style={styles.serviceTitle}>
                        Junior Suite
                    </Text>
                    <Text style={styles.motelPrice}>
                        $300
                    </Text>
                </View>
                <Separator/>
                <View style={styles.rowContainer}>
                    <Text style={styles.serviceTitle}>
                        Master Suite
                    </Text>
                    <Text style={styles.motelPrice}>
                        $300
                    </Text>
                </View>
                <Separator/>
                <View style={styles.rowContainer}>
                    <Text style={styles.serviceTitle}>
                        Master Suite (2 pisos)
                    </Text>
                    <Text style={styles.motelPrice}>
                        $300
                    </Text>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        RATING
                    </Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.serviceTitle}>
                        Limpieza
                    </Text>
                    <View style={Styles.starsContainer}>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                    </View>
                </View>
                <Separator/>
                <View style={styles.rowContainer}>
                    <Text style={styles.serviceTitle}>
                        Seguridad
                    </Text>
                    <View style={Styles.starsContainer}>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                    </View>
                </View>
                <Separator/>
                <View style={styles.rowContainer}>
                    <Text style={styles.serviceTitle}>
                        Servicio a la habitación
                    </Text>
                    <View style={Styles.starsContainer}>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.starImg} source={require('image!list_ic_star_active')}/>
                    </View>
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
