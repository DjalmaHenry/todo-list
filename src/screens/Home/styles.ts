import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131016",
        alignItems: "center",
        padding: 24
    },

    logo: {
        marginTop: 48
    },

    inputContainer: {
        marginTop: 24,
        width: "100%",
        flexDirection: "row",
    },

    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        color: "#fff",
        padding: 16,
        fontSize: 16,
        marginRight: 8,
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#1E6F9F",
        justifyContent: "center",
        alignItems: "center"
    },

    infoContainer:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 24
    },
    info:{
        flexDirection: "row",
        alignItems: "center",   
    },
    createdInfo:{
        color: "#4EA8DE",
        fontSize: 16,
        fontWeight: "bold",
    },
    completedInfo:{
        color: "#8284FA",
        fontSize: 16,
        fontWeight: "bold",
    },
    counterContainer:{
        width: 30,
        height: 30,
        borderRadius: 10,
        backgroundColor: "#1F1E25",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5
    },
    counter:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});