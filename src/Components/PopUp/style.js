import { StyleSheet, Dimensions } from "react-native";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        padding: "5%",
        paddingBottom: 0,
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        position: "absolute",
        zIndex: 10000,
        width: width / 1.1,
        borderRadius: 6,
        borderColor: Global_Colors.PRIMARY_COLOR,
        borderWidth:1,
        justifyContent: "space-between",
        gap: height / 16,
        top: "30%",
        marginLeft:"4.3%",
        borderColor:Global_Colors.BW_QUARTIARY_COLOR
    },
    title: {
        color: Global_Colors.BW_QUINTERNARY_COLOR,
        fontSize: 25,
        alignItems:"center",
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
        alignSelf: "center",
    },
    btn: {
        width: width / 1.1 / 2,
        paddingVertical: "3%",
        borderColor: Global_Colors.SECONDARY_COLOR,
        borderRightWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: Global_Colors.BW_QUINTERNARY_COLOR,
        fontSize: 18,
        fontWeight: "600",
    },
    btnText1: {
        color: Global_Colors.PRIMARY_COLOR,
        fontSize: 18,
        fontWeight: "600",
        backgroundColor:Global_Colors.BW_PRIMARY_COLOR,
        padding:5,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:5,
    },
    btnText2: {
        color: Global_Colors.BW_PRIMARY_COLOR,
        fontSize: 18,
        fontWeight: "600",
    },
});

export default styles;
