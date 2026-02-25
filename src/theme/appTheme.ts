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
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#CFCFCF',
        borderRadius: 10,
        borderStyle:'solid',
        marginBottom: 15
    },
    titleCard: {
        fontWeight: 'bold',
        fontSize: 16
    },
    imageCard: {
        width: 80,
        height: 80
    },
    iconCart:{
        flex:1,
        alignItems:'flex-end'
    }
})