var React = require('react-native');
var ParallaxView = require("../lib/ParallaxScroller");
var Styles = require("../Styles/fl-main");
var MotelCell = require("./MotelCell");
var MotelDetails = require("./Details");
var screen = require('Dimensions').get('window');

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

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class Main extends React.Component {

    constructor(props) {
        super(props);
        //HEADSUP
        //We need to bind the functions to let the components use them
        //Check MotelCell component onSelect attribute
        //http://stackoverflow.com/questions/29532926/this-value-is-null-in-function-react-native
        this.renderRow = this.renderRow.bind(this);
        this.selectMotel = this.selectMotel.bind(this);
        this.testView = this.testView.bind(this);
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
        var loading = {
            height: 1000
        }
        return (
            <View style={loading}>
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

    selectMotel(motel) {
        this.props.navigator.push({
            title: "Details",
            component: MotelDetails
        });
    }

    renderRow(motel) {
        return (
            <MotelCell
                onSelect={() => this.selectMotel(motel)}
                key={motel.id}
                motel={motel}
                />
        );
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
                renderRow={this.renderRow}
                style={Styles.listView}
                />
        );
    }

    testView(){
        var testStyle={
            backgroundColor: 'red',
            color: "white",
            width: screen.width,
            height: 500
        };
        return(
            <View style={testStyle}></View>
        )
    }


    render() {
        var style = {

            backgroundColor: 'red',
            color: "white"
        };
        return (
            <ParallaxView
                style={Styles.mainContainer}
                topHeader={this.testView()}
                windowHeight={200}>
                {this.footer()}
            </ParallaxView>
        )
    }
}

module.exports = Main;
