import { StyleSheet, Dimensions, Image } from "react-native";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // Conteudo da pagina
    cpContainer: {
        width: "90%",
        margin: 30,
        position: "absolute",
        zIndex: 10,
        marginTop: 100,
    },
    cpTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "white",
        backgroundColor:Global_Colors.PRIMARY_COLOR,
        padding:20,
        borderRadius:7,
    },
    cpSubTitle: {
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "italic",
    },
    usuarioContain: {
        fontSize: 24,
        fontWeight: "700",
        display: "flex",
        flexDirection: "row",
        padding: 20,
        paddingLeft: 50,
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        borderRadius: 20,
        marginBottom: 10,
    },
    bemVindoText: {
        marginBottom: 10,
        fontSize: 20,
    },
    iconContain: {
        width: 30
    },
    avisosContain: {
        fontSize: 5,
        fontWeight: "700",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        paddingLeft: 20,
        backgroundColor: Global_Colors.TERTIARY_COLOR,
        borderRadius: 10,
        marginTop:7
    },
    cpTitleAvisos: {
        fontSize: 14,
        fontWeight: "700",
        color: "white",
    },
    iconContainAvisos: {
        width: 1, // Ajuste o tamanho conforme necessário
    },
});

export default styles;
