import { StyleSheet, Dimensions, Image } from "react-native";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // Conteudo da pagina
    cpContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 10,
        backgroundColor: "red",
    },
    cpTitle: {
        fontSize: 20,
        fontWeight: "800",
        color: Global_Colors.BW_PRIMARY_COLOR,
    },
    cpSubTitle: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "italic",
        color:Global_Colors.QUINTERNARY_COLOR
    },
    containAviso: {
        marginTop: 15,
        borderRadius: 5,
        width: "90%",
        marginLeft: "5%",
        marginBottom: 8,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 7,
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        backgroundColor: Global_Colors.PRIMARY_COLOR,
    },
    avisosTotal: {
        marginTop: 80,
    },
    containIconAvisos: {
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        padding: 5,
    },
    textAviso: {
        marginLeft: "5%",
        width: "80%",
    },
});

export default styles;
