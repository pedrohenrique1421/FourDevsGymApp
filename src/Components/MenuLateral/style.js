import { StyleSheet, Dimensions, Image } from "react-native";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");
// deixar a logo responsivas
const styles = StyleSheet.create({
    //Menu Lateral
    mlContainer: {
        width: width / 1.5,
        height: "100%",
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        paddingTop: "10%",
        paddingBottom: "20%",
        justifyContent: "space-between",
    },
    mlItem: {
        width: "90%",
        paddingVertical: 12,
        paddingLeft: "4%",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 12,
        alignItems: "center",
        borderBottomRightRadius: 12,
        borderTopRightRadius: 12,
    },
    mlItemText: {
        color: Global_Colors.BW_PRIMARY_COLOR,
        fontSize: 20,
        fontWeight: "700",
    },
    mlItemImage: {
        height: 24,
    },
    mlBarraDePerfil: {
        paddingHorizontal: "4%",
        paddingRight: "6%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    mlBDPText: {
        fontSize: 20,
        color: Global_Colors.BW_PRIMARY_COLOR,
    },
    mlBDPImage: {
        height: 32,
    },
    mlBDPImageContainer: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Global_Colors.BW_TERTIARY_COLOR,
        borderRadius: 10,
    },
});

export default styles;
