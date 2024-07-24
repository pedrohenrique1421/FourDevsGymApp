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
        borderWidth: 2,
        borderColor: Global_Colors.PRIMARY_COLOR,
        justifyContent: "space-between",
        gap: height / 16,
        top: "30%",
<<<<<<< HEAD
        marginLeft:"4.3%",
        borderWidth:1,
        borderColor:Global_Colors.BW_QUARTIARY_COLOR
=======
        opacity: 0.95,
>>>>>>> e5531e23f0523625722f56371f0ed939c73e639b
    },
    title: {
        color: Global_Colors.BW_QUINTERNARY_COLOR,
        fontSize: 28,
        fontWeight: "800",
    },
    text: {
<<<<<<< HEAD
        color: Global_Colors.BW_QUARTIARY_COLOR,
        fontSize: 18,
        fontWeight: "500",
=======
        color: Global_Colors.BW_QUINTERNARY_COLOR,
        fontSize: 16,
        fontWeight: "600",
>>>>>>> e5531e23f0523625722f56371f0ed939c73e639b
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
        borderTopWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: Global_Colors.BW_QUINTERNARY_COLOR,
        fontSize: 18,
        fontWeight: "600",
    },
});

export default styles;
