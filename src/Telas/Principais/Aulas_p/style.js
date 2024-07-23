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
        alignItems: "center",
        position: "absolute",
        zIndex: 10,
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
    accordionTotal:{
        width:"100%",
        alignItems:"center",
        marginTop:100,
    },
    accordionCard:{
        width:"80%"
    },
    accordionTitle:{
        backgroundColor:Global_Colors.PRIMARY_COLOR,
        color:Global_Colors.BW_PRIMARY_COLOR,
        padding:20,
    },
    title:{
        fontSize:20,
        color:Global_Colors.BW_SECONDARY_COLOR,
        marginBottom:20
    }
});

export default styles;
