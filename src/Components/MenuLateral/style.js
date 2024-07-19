import { StyleSheet, Dimensions, Image } from "react-native";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");

const widthSvg = 22.5; // largura das svgs
const heightSvg = 22.5; // altura das svgs

const styles = StyleSheet.create({
    Container: {
        width: width / 1.5,
        height: "100%",
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        paddingTop: "10%",
        paddingBottom: "24%",
        justifyContent: "space-between",
        zIndex: 1000,
    },
    Item: {
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
    ItemText: {
        color: Global_Colors.BW_PRIMARY_COLOR,
        fontSize: 20,
        fontWeight: "700",
    },
    ItemImage: {
        height: 24,
    },
    BarraDePerfil: {
        paddingHorizontal: "4%",
        paddingRight: "6%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    BDPText: {
        fontSize: 20,
        color: Global_Colors.BW_PRIMARY_COLOR,
    },
    BDPImage: {
        height: 32,
    },
    BDPImageContainer: {
        width: widthSvg + 12,
        height: heightSvg + 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Global_Colors.BW_TERTIARY_COLOR,
        borderRadius: 10,
    },
});

export { styles, widthSvg, heightSvg };
