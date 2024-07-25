import { Text, TouchableOpacity, Image, View, ImageBackground, TextInput, ScrollView, Alert, StatusBar, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HandleNext, checkToken } from "./scripts";
import styles from "./style";
import { useState, useEffect } from "react";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import PopUp from "../../../Components/PopUp/";
import Alerta from "../../../Components/ALerta/";
import Logo from "../../../../assets/Components/NavBar_sb/Logo.svg";
export default function Login_p() {
    const navigation = useNavigation();
    const [matricula, setMatricula] = useState("");
    const [dtNasc, setDtNasc] = useState("");
    const [height, setHeight] = useState(0);
    const [loading, setLoading] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    // Variaveis de alerta e PopUp
    const [alerta, setAlerta] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [texto, setTexto] = useState("");
    let resposta = "";

    //#region
    // Verifica se o token de login existe
    useEffect(() => {
        const verifyToken = async () => {
            const tokenExists = await checkToken();
            if (tokenExists) {
                // Se existir
                navigation.navigate("Home_p");
            }
        };
        verifyToken();
    }, []);

    // Define a altura do componente ImageBackground
    const onLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        setHeight(height);
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dtNasc;
        setShowDatePicker(false);
        setDtNasc(currentDate.toLocaleDateString("pt-BR"));
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    //#endregion
    const HandleLogin = async () => {
        setLoading(true);
        resposta = await HandleNext(matricula, dtNasc);
        if (resposta === true) {
            setLoading(false);
            navigation.navigate("Home_p");
        } else {
            setLoading(false);
            switch (resposta.message) {
                case "data invalida":
                    setAlerta(true);
                    setTexto("data invalida");
                    break;
                case "campos invalidos":
                    setAlerta(true);
                    setTexto("campos invalidos");
                    break;
                case "matricula e/ou data de nascimento invalidas":
                    setPopUp(true);
                    setTexto("Matricula e/ou data de nascimento inválidas!");
                    break;
                default:
                    //console.log(resposta.message);
                    break;
            }
        }
    };

    return (

        <ScrollView style={styles.scrollContainer} onLayout={onLayout}>
            <ImageBackground source={require("../../../../assets/Telas/Secundarias/Login/Backgrounds/Bg_Login.png")} style={[styles.container, { height: height }]}>
                <StatusBar backgroundColor={Global_Colors.PRIMARY_COLOR} barStyle={"light-content"} />

                {alerta ? <Alerta type={"Error"} tempo={2000} onEnd={() => setAlerta(false)} /> : <View />}
                {popUp ? (
                    <PopUp texts={{ titulo: "Erro ao logar", texto: texto, btn1: " Fechar", btn2: "" }} btn1F={() => setPopUp(false)} btn2F={() => setPopUp(false)} />
                ) : (
                    <View />
                )}
                <View style={styles.lgContainer}>
                    {/* <Image source={require("../../../../assets/Telas/Secundarias/Login/CrownSimbol.png")} /> */}
                    <View style={styles.containerLogo}>
                <Logo style={styles.logo} width={65} height={65} />
                </View>
                    <Text style={styles.lgContainerText}>FourDevsGym</Text>
                </View>

                <View style={styles.ipContainer}>
                    <TextInput placeholder="Matricula" style={styles.ipInput} value={matricula} onChangeText={setMatricula} />
                    <TouchableOpacity onPress={showDatepicker} style={styles.dateInput}>
                        <View style={styles.datePickerContainer}>
                            <Text style={styles.iconCalendario}>📅</Text>
                            <Text style={styles.dateText}>{dtNasc ? dtNasc : "00/00/0000"}</Text>
                        </View>
                    </TouchableOpacity>

                    {showDatePicker && <DateTimePicker value={new Date()} mode="date" display="default" onChange={handleDateChange} />}
                </View>
                <View style={styles.btContainer}>
                    <TouchableOpacity style={styles.btBtn} onPress={HandleLogin} disabled={loading}>
                        {loading ? (
                            <ActivityIndicator size="small" color={Global_Colors.BW_PRIMARY_COLOR} />
                        ) : (
                            <>
                                <Text style={styles.btText}>Entrar</Text>
                                <Image source={require("../../../../assets/Telas/Secundarias/Login/entrar_sb.png")} style={styles.btImage} />
                            </>
                        )}
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}
