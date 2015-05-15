/**
 * Created by carlos on 5/14/15.
 */

var Styles = {
    mainContainer: {
        flex: 1,
        marginTop: 65
    },
    container: {
        flex: 1,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 15,
        flexDirection: 'column',
        backgroundColor: 'black',
        margin: 1,
    },
    title: {
        fontFamily: "BlissPro",
        flex: 1,
        flexDirection: 'row',
        fontSize: 20,
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
    prices: {

    },
    topContainer: {
        flexDirection: 'column',
        marginBottom: 5,
    },
    bottomContainer: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    starsContainer: {
        flexDirection: 'row',
    },
    pricesContainer: {
        flexDirection: 'row',
    },
    listView: {
        //FIXME this shouldn't have a marginTop to fix the space between the top and the bottom. We need to keep an eye on this
        marginTop: -64,
            backgroundColor: 'green',
    }
};

module.exports = Styles;