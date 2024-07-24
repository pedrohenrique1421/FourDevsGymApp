import { StyleSheet, Dimensions } from "react-native";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        padding: "5%",
        paddingBottom: "3%",
        paddingRight: 0,
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        position: "absolute",
        zIndex: 10000,
        width: width / 1.1,
        borderRadius: 6,
        justifyContent: "space-between",
        gap: height / 16,
        top: "30%",
        marginLeft:"4.3%",
        borderWidth:1,
        borderColor:Global_Colors.BW_QUARTIARY_COLOR
    },
    title: {
        color: Global_Colors.BW_QUARTIARY_COLOR,
        fontSize: 28,
        fontWeight: "800",
    },
    text: {
        color: Global_Colors.BW_QUARTIARY_COLOR,
        fontSize: 18,
        fontWeight: "500",
        width: width / 1.25,
    },
    btnContainer: {
        flexDirection: "row",
        alignSelf: "flex-end",
        marginRight: "2%",
    },
    btn: {
        minWidth: width / 4.5,
        paddingVertical: "1%",
        borderColor: Global_Colors.BW_QUARTIARY_COLOR,
        borderRightWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: Global_Colors.BW_QUARTIARY_COLOR,
        fontSize: 18,
        fontWeight: "600",
    },
});

export default styles;
