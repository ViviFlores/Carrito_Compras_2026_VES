import { StyleSheet } from "react-native";
import { QUATERNARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

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
        paddingTop: 40
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
    }
})