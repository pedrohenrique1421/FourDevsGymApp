import { StyleSheet, Dimensions } from "react-native";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        padding: "5%",
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        position: "absolute",
        zIndex: 10000,
        backgroundColor:"rgba(0, 0, 0, 0.896)",
        width:width,
        height:height,
        alignItems:"center",
        justifyContent:"center"
    },
    title: {
        color: Global_Colors.BW_PRIMARY_COLOR,
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
        // alignSelf: "center",
        justifyContent:"",
        margin:"2%"
    },
    btn: {
        width: width / 1.1/1.6,
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
        color: Global_Colors.BW_PRIMARY_COLOR,
        fontSize: 18,
        fontWeight: "400",
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        padding:10,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:4,
    },
    btnText2: {
        backgroundColor:Global_Colors.QUARTENARY_COLOR,
        color: Global_Colors.BW_PRIMARY_COLOR,
        fontSize: 18,
        fontWeight: "600",
        padding:10,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:4,
    },
});

export default styles;
