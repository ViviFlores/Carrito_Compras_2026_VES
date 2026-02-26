import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, QUATERNARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

export const stylesGlobal = StyleSheet.create({
    title: {
        color: SECONDARY_COLOR,
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingTop: 73
    },
    containerBody: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 40
    },
    titleWelcome: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: QUATERNARY_COLOR,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 7
    },
    containerInput: {
        marginVertical: 15
    },
    button: {
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        borderRadius: 8
    },
    buttonText: {
        color: SECONDARY_COLOR,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    iconPassword: {
        position: 'absolute',
        bottom: 15,
        right: 10
    },
    textRedirect: {
        marginTop: 20,
        fontSize: 15,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerCard: {
        //flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: SECONDARY_COLOR,
        borderRadius: 3,
        borderStyle: 'solid',
        margin: 7,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 2.65,
        elevation: 2
    },
    titleCard: {
        fontWeight: 'bold',
        fontSize: 16
    },
    imageCard: {
        width: 80,
        height: 80
    },
    iconCart: {
        marginTop: 2,
        flex: 1,
        alignItems: 'flex-end'
    },
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    bodyModal: {
        padding: 20,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#CfCfCf',
        borderBottomWidth: 1,
        padding: 10
    },
    titleModal: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    imageModal: {
        height: 200,
        width: 200
    },
    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        backgroundColor: TERTIARY_COLOR,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        margin: 15
    },
    buttonQuantityText: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textTotalPrice: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 13
    },
    textStock: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#B52D10',
        textAlign: 'center'
    },
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconHome: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 30,
        paddingTop: 35
    },
    textIconCart: {
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 5
    }
})