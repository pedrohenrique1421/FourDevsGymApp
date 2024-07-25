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
        marginTop:10,
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
        marginTop:"3%",
        marginBottom:"4%",
    },
    planoAtual: {
        backgroundColor: Global_Colors.BW_SECONDARY_COLOR, // Cor para o plano atual
        borderColor:Global_Colors.PRIMARY_COLOR,
        borderWidth:1,
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
        color:Global_Colors.BW_SECONDARY_COLOR,
        backgroundColor:Global_Colors.BW_PRIMARY_COLOR,
        padding:10,
        borderRadius:5,
        marginTop:20,
        width:"100%",
        fontWeight:"600",
        textAlign:"center",
    },
    ScrollView:{
        width:"100%",
         marginTop:"15%"
    },
        // Add styles for paymentInfoContainer and paymentText
        paymentInfoContainer: {
            padding: 20,
            backgroundColor: Global_Colors.BW_SECONDARY_COLOR,
            borderRadius: 10,
            margin: 20,
        },
        paymentText: {
            fontSize: 16,
            color: Global_Colors.BW_PRIMARY_COLOR,
        },
        paymentCode: {
            fontSize: 14,
            color: Global_Colors.BW_TERTIARY_COLOR,
            marginVertical: 10,
        },
        containerPagamentos:{
            backgroundColor:Global_Colors.BW_PRIMARY_COLOR,
            width:"100%",
            alignItems:"center",
            borderTopWidth:1,
            borderTopColor:Global_Colors.QUARTENARY_COLOR
        },
        pixContainer:{
            width:"90%",
            padding:20
        },
        inputCopiaCola:{
            padding:10,
            borderWidth:1,
            borderColor:Global_Colors.BW_SECONDARY_COLOR,
            width:"100%",
            borderRadius:5
        },
        copyText:{
            backgroundColor:Global_Colors.PRIMARY_COLOR,
            color:Global_Colors.BW_PRIMARY_COLOR,
            padding:10,
            width:"30%",
            textAlign:"center",
            borderRadius:4,
            marginTop:"2%"
        },
        vencimento:{
            color:Global_Colors.BW_PRIMARY_COLOR,
            paddingTop:5,
            borderRadius:1,
            textAlign:"center",
            width:"100%",
            fontSize:12,
        },
        text:{
            marginBottom:"2%"
        }
});

export default styles;
