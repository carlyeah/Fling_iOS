/**
 * Created by Carlyeah on 5/17/15.
 */
var Styles = require("../../globalvariables");

module.exports = {
    mainContainer: {
        flex: 1,
        marginTop: 65,
        backgroundColor: Styles.rowBackground,
    },
    bottomContainer: {
        marginTop: -65,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Styles.rowBackground,
    },
    rowContainer: {
        paddingRight: 16,
        paddingLeft: 16,
        flexDirection: 'row',
        flex: 2
    },
    headerContainer:{
        backgroundColor: Styles.headerBackground,
        paddingRight: 16,
        paddingLeft: 16,
        flexDirection: 'row',
        flex: 1
    },
    header: {
        paddingTop: 6,
        paddingBottom: 6,
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
    },
    star: {
        height: 10,
        width: 10,
    },
    starsContainer: {
        alignSelf: 'center',
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: 'row',
    }
};