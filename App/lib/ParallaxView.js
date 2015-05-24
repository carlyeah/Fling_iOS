/**
 * Created by Carlyeah on 5/21/15.
 */
var React = require('react-native');

var {
    StyleSheet,
    View,
    Image,
    ScrollView,
    } = React;

var BlurView = require('react-native-blur').BlurView;
var screen = require('Dimensions').get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'transparent',
    },
    blur: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'transparent',
    },
    content: {
        shadowColor: '#222',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        backgroundColor: '#fff'
    }
});

class ParallaxView extends React.Component {

    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
        this.renderBackground = this.renderBackground.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.state = {
            offset: 0,
            marginTop: 0,
            height: this.props.windowHeight + 64 * screen.scale,
            opacity : 1,
            windowIsInView: true
        }
    }

    onScroll(event) {
        if (!this.props.windowHeight) {
            return;
        }
        var offset = event.nativeEvent.contentOffset.y + event.nativeEvent.contentInset.top;
        var windowIsInView = offset <= this.props.windowHeight;

        if (windowIsInView || this.state.windowIsInView) {

            var pullingDown = offset <= 0;
            var srcHeight = this.props.windowHeight + this.props.contentInset.top * screen.scale;
            var marginTop = pullingDown ? 0 : -offset / 3;
            var height = srcHeight + (pullingDown ? -offset : 0);
            var opacity = (1 - Math.min(1, 1.3 * Math.max(0, offset) / this.props.windowHeight));

            this.setState({
                offset,
                marginTop,
                height,
                opacity,
                windowIsInView
            });
        }
    }

    renderBackground() {
        if (!this.props.windowHeight) {
            return null;
        }
        if (!this.props.backgroundSource) {
            return null;
        }

        var style = {
            position: 'absolute',
            backgroundColor: '#2e2f31',
            marginTop: this.state.marginTop,
            width: screen.width,
            height: this.state.height
        };

        return (
            <Image ref="background" style={style} resizeMode="cover" source={this.props.backgroundSource}>
                {
                    !!this.props.blur &&
                    (BlurView || (BlurView = require('react-native-blur').BlurView)) &&
                    <BlurView blurType={this.props.blur} style={styles.blur} />
                }
            </Image>
        );
    }

    renderHeader() {
        if (!this.props.windowHeight) {
            return null;
        }
        if (!this.props.backgroundSource) {
            return null;
        }
        return (
            <View ref="header" style={{
                position: 'relative',
                height: this.props.windowHeight,
                opacity: this.state.opacity,
            }}>
                {this.props.header}
            </View>
        );
    }

    render() {
        var { style, ...props } = this.props;
        return (
            <View style={[styles.container, style, {offset: 'hidden'}]}>
                {this.renderBackground()}
                <ScrollView
                    {...props}
                    style={styles.scrollView}
                    onScroll={this.onScroll}
                    scrollEventThrottle={16}>
                    {this.renderHeader()}
                    <View style={styles.content}>
                        {this.props.children}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

ParallaxView.propTypes = {
    windowHeight: React.PropTypes.number,
    backgroundSource: React.PropTypes.object,
    header: React.PropTypes.node,
    blur: React.PropTypes.string,
    contentInset: React.PropTypes.object,
};

ParallaxView.defaultProps = {
    windowHeight: 300,
    contentInset: {
        top: 64
    }
};

module.exports = ParallaxView;