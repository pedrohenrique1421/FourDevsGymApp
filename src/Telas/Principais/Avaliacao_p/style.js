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
        color:Global_Colors.BW_QUARTIARY_COLOR,
        padding:20,
        borderRadius:7,
        marginBottom:5,
    },
    title:{
        fontSize:20,
        color:Global_Colors.BW_SECONDARY_COLOR,
        marginBottom:20
    },
    titleTexto:{
        backgroundColor:Global_Colors.PRIMARY_COLOR,
        color:Global_Colors.BW_QUARTIARY_COLOR,
        padding:5,
        borderRadius:3,
        marginTop:10,
    },
    ScrollView:{
        width:"100%"
    },
    accordionContent:{
        borderLeftWidth:1,
        borderRightWidth:1,
        borderLeftColor:Global_Colors.QUARTENARY_COLOR,
        borderRightColor:Global_Colors.QUARTENARY_COLOR,
        padding:10,
        borderRadius:7,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        borderTopWidth:0,
        marginBottom:10
    },
    dadoNegrito:{
        fontWeight:"800"
    },
    dado:{
        color:Global_Colors.TERTIARY_COLOR,
    }
});

export default styles;
