var React = require('react-native');
var ParallaxView = require("react-native-parallax-view");
var Styles = require("./styles/ListView")

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
            //<Image style={Styles.star} source={require('image!list_ic_price')}/>
            <View style={Styles.container}>
                <View style={Styles.topContainer}>
                    <Text style={Styles.title}>Kuboz</Text>
                </View>
                <View style={Styles.bottomContainer}>
                    <View style={Styles.starsContainer}>
                        <Image style={Styles.star} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.star} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.star} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.star} source={require('image!list_ic_star_active')}/>
                        <Image style={Styles.star} source={require('image!list_ic_star_active')}/>
                    </View>
                    <View style={Styles.pricesContainer}>
                        <Image style={Styles.prices} source={require('image!list_ic_price')}></Image>
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
