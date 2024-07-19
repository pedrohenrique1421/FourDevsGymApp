import { Dimensions, StyleSheet } from "react-native";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    nvContainer: {
        width: width,
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingRight: "3%",
        zIndex: 100,
    },
    backgroundBtn: {
        width: width,
        height: "100%",
        position: "absolute",
    },
    menuBtn: {
        width: 150,
        paddingLeft: "3%",
        height: height / 12,
        justifyContent: "center",
    },
});

export default styles;
