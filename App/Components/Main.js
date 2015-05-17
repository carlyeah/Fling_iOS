var React = require('react-native');
var ParallaxView = require("react-native-parallax-view");
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

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    renderLoadingView() {
        return (
            <View style={Styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true
                });
            }).done();
    }

    renderMotel(motel) {
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

    renderStars(number) {
        var stars;
        for (i = 0; i < number; i = i + 1) {

        }
        return stars;
    }

    footer() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            //automaticallyAdjustContentInsets - false remove an awkard space in the table parallax control
            <ListView
                automaticallyAdjustContentInsets={false}
                dataSource={this.state.dataSource}
                renderRow={this.renderMotel}
                style={Styles.listView}
                />
        );
    }


    render() {
        return (
            <ParallaxView
                style={Styles.mainContainer}
                windowHeight={200}
                backgroundSource={require('image!motel_demo')}>
                {this.footer()}
            </ParallaxView>
        )
    }
}

module.exports = Main;
