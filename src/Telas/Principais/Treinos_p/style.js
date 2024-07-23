import { StyleSheet, Dimensions, Image } from "react-native";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    
    // Conteudo da pagina
    cpContainer: {
        width: "100%",
        height:"100%",
        position:"absolute",
    },
    cpTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: Global_Colors.PRIMARY_COLOR,
        marginTop:90
    },
    cpSubTitle: {
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "italic",
    },
    nomeDia:{
        backgroundColor:Global_Colors.PRIMARY_COLOR,
        color:Global_Colors.BW_PRIMARY_COLOR,
        textAlign:"center",
        fontWeight:"700",
        borderTopLeftRadius:5,
        borderTopRightRadius: 5,
        padding:10
    },
    treino:{
        width:"100%",
        alignItems:"center"
    },
    nomeTreino:{
        marginTop:100,
        marginBottom:20,
        fontSize:20,
        color:Global_Colors.BW_SECONDARY_COLOR,
        fontWeight:"900",
        marginLeft:"7%"
    },
    dia:{
        width:"85%",
        marginTop:5,
        marginLeft:"7.5%",
        marginBottom:30,
    },
    exercicio:{
        padding:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderColor:Global_Colors.QUARTENARY_COLOR,
    },
    imageExercicio:{
        width:100,
        height:70
    },
    rep:{
        marginRight:5
    },
    nomeExercicio:{},
    series:{},
    division:{},
    rep:{}
});

export default styles;
