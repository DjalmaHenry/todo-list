import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
        paddingVertical: 16,
        border: "1px solid #333333",
        marginTop: 24
    },

    checkbox: {
        flex: 1,
        marginLeft: 16,
    },

    deleteButton: {
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8
    }
});