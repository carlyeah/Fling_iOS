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
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    title: {
        fontFamily: "BlissPro-Bold",
        flex: 1,
        flexDirection: 'row',
        fontSize: 14,
        textAlign: 'left',
        color: "white"
    },
    reviewNumber: {
        marginRight: 5,
        fontSize: 14,
        textAlign: 'left',
        color: "red",
    },
    star: {
        height: 10,
        width: 10,
        alignSelf: 'center',
    },
    topContainer: {
        flexDirection: 'row',
    },
    bottomContainer: {
        flexDirection: 'row',
    },
    listView: {
        //FIXME this shouldn't have a marginTop to fix the space between the top and the bottom. We need to keep an eye on this
        marginTop: -64,
        backgroundColor: 'green',
    }
});

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
            <View style={styles.container}>
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
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Text style={styles.title}>Kuboz</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.reviewNumber}>4</Text>
                    <Image style={styles.star} source={require('image!list_ic_star_active')}/>
                    <Image style={styles.star} source={require('image!list_ic_star_active')}/>
                    <Image style={styles.star} source={require('image!list_ic_star_active')}/>
                    <Image style={styles.star} source={require('image!list_ic_star_active')}/>
                    <Image style={styles.star} source={require('image!list_ic_star_active')}/>
                    <Image style={styles.star} source={require('image!list_ic_price')}/>
                </View>
            </View>
        );
    }

    renderStars(number){
        var stars;
        for(i = 0; i < number; i=i+1){

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
                style={styles.listView}
                />
        );
    }


    render() {
        return (
            <ParallaxView
                style={styles.mainContainer}
                windowHeight={200}
                backgroundSource={require('image!intro_ic_heart')}>
                {this.footer()}
            </ParallaxView>
        )
    }
}

module.exports = Main;
