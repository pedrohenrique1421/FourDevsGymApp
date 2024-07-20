import { StyleSheet, Dimensions } from "react-native";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

// Pegando o tamanho da tela
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    // Containers globais
    scrollContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        width: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20%",
    },
    // Logo Container
    lgContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "20%",
    },
    lgContainerText: {
        fontSize: 30,
        top: 10,
    },
    // Inputs Container
    ipContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "3%",
    },
    ipInput: {
        borderColor: Global_Colors.PRIMARY_COLOR,
        borderWidth: 1,
        borderRadius: 5,
        padding: 18,
        width: "90%",
        fontSize: 20,
        backgroundColor: Global_Colors.BW_PRIMARY_COLOR,
        marginBottom: "3%",
    },
    // View btn entrar
    btContainer: {
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    btBtn: {
        backgroundColor: Global_Colors.PRIMARY_COLOR,
        padding: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        borderRadius: 7,
    },
    btImage: {
        width: 25,
        height: 25,
        marginRight: 20,
    },
    btText: {
        color: Global_Colors.BW_PRIMARY_COLOR,
        fontSize: 15,
        paddingLeft: 20,
    },
});

export default styles;
