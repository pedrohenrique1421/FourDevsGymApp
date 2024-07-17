import { StyleSheet, Dimensions, Image } from "react-native";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");
// deixar a logo responsivas
const styles = StyleSheet.create({
    // Containers globais
    container: {
        flex: 1,
    },
    // NavBar
    nvContainer: {
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        padding: "3%",
        paddingRight: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 11,
    },
    nvImage: {
        height: 34,
    },
    //Menu Lateral
    mlContainer: {
        width: width,
        height: "100%",
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        position: "absolute",
        zIndex: 10,
    },
    // Conteudo da pagina
    cpContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: -1,
    },
    cpTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: Global_Colors.PRIMARY_COLOR,
    },
    cpSubTitle: {
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "italic",
    },
});

export default styles;
