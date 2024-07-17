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
        height: height / 12,
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: "3%",
        zIndex: 100,
    },
});

export default styles;
