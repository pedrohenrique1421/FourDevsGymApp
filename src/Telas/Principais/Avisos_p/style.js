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
        backgroundColor:"red"
    },
    cpTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: Global_Colors.PRIMARY_COLOR,
    },
    cpSubTitle: {
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "italic",
    },
    containAviso:{
        marginTop:15,
        borderRadius:5,
        width:"90%",
        marginLeft:"5%",
        marginBottom:8,
        shadowColor: "#00000014",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 7,
        flexDirection:"row",
        alignItems:"center",
    },
    avisosTotal:{
        marginTop:80
    },
    containIconAvisos:{
        backgroundColor:Global_Colors.PRIMARY_COLOR,
        width:"10%",
        alignItems:"center",
        justifyContent:"center",
        paddingBottom:"10%",
        paddingTop:"10%",
        borderTopLeftRadius:7,
        borderBottomLeftRadius:7,
        marginTop:5

    },
    textAviso:{
        marginLeft:"5%",
        width:"80%"
    }
});

export default styles;
