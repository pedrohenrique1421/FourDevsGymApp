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
    plano:{
        backgroundColor:Global_Colors.PRIMARY_COLOR,
        width:"80%",
        flexDirection:"row",
        flexWrap:"wrap",
        borderRadius:7,
        padding:20,
        marginLeft:"10%",
        marginTop:"5%"
    },
    titlePlano:{
        width:"70%",
        fontSize:30,
        fontWeight:"700",
        color:Global_Colors.BW_QUARTIARY_COLOR
    },
    precoPlano:{
        fontSize:15,
        fontWeight:"700",
        color:Global_Colors.BW_QUARTIARY_COLOR,
        marginTop:13,
    },
    descricaoPlano:{
        fontSize:15,
        fontWeight:"600",
        color:Global_Colors.BW_QUARTIARY_COLOR,
        marginTop:7,
    },
    clickMudarPlano:{
        width:"100%"
    },
    bttPlano:{
        color:Global_Colors.BW_QUARTIARY_COLOR,
        padding:10,
        borderWidth:1,
        borderColor:Global_Colors.BW_QUARTIARY_COLOR,
        borderRadius:5,
        marginTop:20,
        width:"100%",
        textAlign:"center"
    },
    bttPlanoAtual:{
        color:Global_Colors.BW_QUARTIARY_COLOR,
        padding:10,
        borderRadius:5,
        marginTop:20,
        width:"100%",
        textAlign:"center",
    },
    ScrollView:{
        width:"100%",
         marginTop:"15%"
    }
});

export default styles;
