import { StyleSheet, Dimensions } from "react-native";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    },
    cpSubTitle: {
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "italic",
        marginBottom: 10,
        marginTop:15,
    },
    containUser:{
        backgroundColor:Global_Colors.PRIMARY_COLOR,
        padding: 20,
        borderRadius: 7,
        flexDirection: "row",
        alignItems:"center"
    },
    iconUser: {
        marginRight: 10, // Adiciona margem direita para espaçamento
    },

    containAvisos:{
        backgroundColor:Global_Colors.TERTIARY_COLOR,
        padding: 10,
        paddingLeft:22,
        borderRadius: 7,
        flexDirection: "row",
        alignItems:"center",
        marginTop:5,
        fontSize:10
    },
    cpTitleAvisos: {
        fontSize: 14,
        fontWeight: "500",
        color: "white",
    },
    buttonMaisAvisos:{
        alignItems:"center",
        marginTop:20
    },
    textButtonAvisos:{
        padding:7,
        paddingLeft:30,
        paddingRight:30,
        borderRadius:5,
        backgroundColor:Global_Colors.PRIMARY_COLOR,
        color:Global_Colors.BW_QUARTIARY_COLOR,
        fontWeight:"600",
    }
});

export default styles;
