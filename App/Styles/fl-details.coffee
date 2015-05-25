Styles = require("../Utils/globalvariables")

module.exports =
  mainContainer:
    flex: 1
    marginTop: 65
    backgroundColor: Styles.detailRowBackground

  bottomContainer:
    marginTop: -65
    flex: 1
    flexDirection: 'column'
    backgroundColor: Styles.detailRowBackground

  rowContainer:
    paddingRight: 16
    paddingLeft: 16
    flexDirection: 'row'
    flex: 2

  headerContainer:
    backgroundColor: Styles.detailHeaderBackground
    paddingRight: 16
    paddingLeft: 16
    flexDirection: 'row'
    flex: 1

  header:
    paddingTop: 6
    paddingBottom: 6
    color: "white"
    fontFamily: "BlissPro-ExtraLight"
    fontSize: 11

  serviceTitle:
    paddingTop: 8
    paddingBottom: 8
    color: "white"
    fontFamily: "BlissPro-ExtraLight"
    fontSize: 16
    flex: 1

  motelPrice:
    paddingTop: 8
    paddingBottom: 8
    color: "white"
    fontFamily: "BlissPro-Bold"
    fontSize: 18
    flex: 1
    textAlign: "right"

  starImg:
    height: 12
    width: 12
    marginLeft: 3

  starsContainer:
    alignSelf: 'center'
    flex: 1
    justifyContent: "flex-end"
    flexDirection: 'row'
