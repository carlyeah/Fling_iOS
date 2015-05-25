module.exports =
    mainContainer:
        flex: 1,
        marginTop: 65,
        backgroundColor: 'black',

    container:
        flex: 1,
        paddingLeft: 14,
        flexDirection: 'column',
        backgroundColor: 'black',
        marginBottom: 1

    title:
        fontFamily: "BlissPro",
        flex: 1,
        flexDirection: 'row',
        fontSize: 20,
        textAlign: 'left',
        color: "white",
        paddingTop: 14

    reviewNumber:
        marginRight: 5,
        fontSize: 14,
        textAlign: 'left',
        color: "red"

    starImg:
        height: 12,
        width: 12,
        marginRight: 3,
        alignSelf: 'center'

    pricesImg:
        marginTop: 4,
        marginRight: 3

    distanceImg:
        marginTop: -6

    pricesText:
        fontFamily: "BlissPro-ExtraLight",
        fontSize: 16,
        color: "#88888c"

    topContainer:
        flexDirection: 'row'

    bottomContainer:
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 14

    starsContainer:
        flex: 1,
        flexDirection: 'row'

    pricesContainer:
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'

    distanceContainer:
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
        
    listView:
        #FIXME this shouldn't have a marginTop to fix the space between the top and the bottom. We need to keep an eye on this
        marginTop: -64,
        backgroundColor: '#3C3C41'
