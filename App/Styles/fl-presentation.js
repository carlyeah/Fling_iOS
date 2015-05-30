/**
 * Created by Carlyeah on 5/25/15.
 */

var Styles = require("../Utils/globalvariables");

module.exports = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: Styles.introBackground,
        alignItems: "center"
    },
    doorsign: {
        width: 350,
        height: 350
    },
    heart:{
        backgroundColor: "transparent",
        width: 100,
        height: 100,
        position: "absolute",
        left: 130,
        top: 330
    }
};