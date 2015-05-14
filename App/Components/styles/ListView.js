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
            padding: 15,
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
};

module.exports = Styles;