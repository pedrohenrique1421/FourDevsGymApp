import {
    Text,
    TouchableOpacity,
    Image,
    View,
    ImageBackground,
    TextInput,
    ScrollView,
    Alert,
    StatusBar,
    ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HandleNext, checkToken } from "./scripts";
import styles from "./style";
import { useState, useEffect } from "react";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

export default function Login_p() {
    const navigation = useNavigation();
    const [matricula, setMatricula] = useState("");
    const [dtNasc, setDtNasc] = useState("");
    const [height, setHeight] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const verifyToken = async () => {
            const tokenExists = await checkToken();
            if (tokenExists) {
                navigation.navigate("Home_p");
            }
        };

        verifyToken();
    }, []);

    const onLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        setHeight(height);
    };

    const HandleLogin = async () => {
        setLoading(true);
        const isLoggedIn = await HandleNext(matricula, dtNasc);
        setLoading(false);

        if (isLoggedIn) {
            navigation.navigate("Home_p");
        } else {
            Alert.alert("Erro no login", "Matricula ou data de nascimento errados");
        }
    };

    return (
        <ScrollView style={styles.scrollContainer} onLayout={onLayout}>
            <ImageBackground
                source={require("../../../../assets/Telas/Secundarias/Login/Backgrounds/Bg_Login.png")}
                style={[styles.container, { height: height }]}
            >
                <StatusBar backgroundColor={Global_Colors.PRIMARY_COLOR} barStyle={"light-content"} />
                {/* Logo Container */}
                <View style={styles.lgContainer}>
                    <Image source={require("../../../../assets/Telas/Secundarias/Login/CrownSimbol.png")} />
                    <Text style={styles.lgContainerText}>FourDevsGym</Text>
                </View>
                {/*  Inputs Container */}
                <View style={styles.ipContainer}>
                    <TextInput
                        placeholder="Matricula"
                        style={styles.ipInput}
                        value={matricula}
                        onChangeText={setMatricula}
                    />
                    <TextInput
                        placeholder="Data Nascimento"
                        style={styles.ipInput}
                        value={dtNasc}
                        onChangeText={setDtNasc}
                    />
                </View>
                {/* View btn entrar */}
                <View style={styles.btContainer}>
                    <TouchableOpacity style={styles.btBtn} onPress={HandleLogin} disabled={loading}>
                        {loading ? (
                            <ActivityIndicator size="small" color={Global_Colors.BW_PRIMARY_COLOR} />
                        ) : (
                            <>
                                <Text style={styles.btText}>Entrar</Text>
                                <Image
                                    source={require("../../../../assets/Telas/Secundarias/Login/entrar_sb.png")}
                                    style={styles.btImage}
                                />
                            </>
                        )}
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}
