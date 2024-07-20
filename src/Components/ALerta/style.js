import { StyleSheet, Dimensions } from "react-native";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width / 3,
        height: height / 16,
        position: "absolute",
        right: "2%",
        top: "10%",
        zIndex: 100000,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
    },
    text: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
    },
    btn: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
