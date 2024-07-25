import { StyleSheet, Dimensions, Image } from "react-native";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    // Conteudo da pagina
    cpContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    cpTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: Global_Colors.PRIMARY_COLOR,
        marginTop: 90
    },
    cpSubTitle: {
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "italic",
    },
    nomeDia: {
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        color: Global_Colors.BW_PRIMARY_COLOR,
        textAlign: "center",
        fontWeight: "700",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 10
    },
    treino: {
        width: "100%",
        alignItems: "center"
    },
    nomeTreino: {
        marginTop: 5,
        fontSize: 18,
        color: Global_Colors.BW_SECONDARY_COLOR,
        fontWeight: "400",
        marginLeft: "7%",
        fontWeight:"500"
    },
    dia: {
        width: "85%",
        marginTop: 5,
        marginLeft: "7.5%",
        marginBottom: 30,
        backgroundColor: Global_Colors.senario_COLOR
    },
    exercicio: {
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: Global_Colors.QUARTENARY_COLOR,
    },
    imageExercicio: {
        width: 100,
        height: 70,
        borderRadius: 2
    },
    rep: {
        marginRight: 5,
        color: Global_Colors.BW_SECONDARY_COLOR,
    },
    nomeExercicio: {
        color: Global_Colors.BW_SECONDARY_COLOR,
    },
    series: {
        color: Global_Colors.BW_SECONDARY_COLOR,
    },
    division: {
        color: Global_Colors.BW_SECONDARY_COLOR,
    },
    title: {
        fontSize: 25,
        width: "100%",
        marginTop: "24%",
        marginLeft: "7%",
        fontWeight:"500",
        marginBottom:"5%"
    },
    noTreinoMessage:{
        marginLeft:"7%",
        marginTop:"2%",
        fontSize:16
    },
    descricao:{
        marginLeft:"7%",
        marginBottom:"7%"
    }
});

export default styles;
