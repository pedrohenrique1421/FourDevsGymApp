import { Text, TouchableOpacity, Image, View, ImageBackground, TextInput, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HandleNext } from "./scripts";
import styles from "./style";
import { useState } from "react";

export default function Login_p() {
    const navigation = useNavigation();
    const [matricula, setMatricula] = useState("");
    const [dtNasc, setDtNasc] = useState("");
    const [height, setHeight] = useState(0);
    const onLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        setHeight(height);
    };
    return (
        <ScrollView style={styles.scrollContainer} onLayout={onLayout}>
            <ImageBackground
                source={require("../../../../assets/Telas/Secundarias/Login/Backgrounds/Bg_Login.png")}
                style={[styles.container, { height: height }]}
            >
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
                    <TouchableOpacity
                        style={styles.btBtn}
                        onPress={() => {
                            HandleNext(matricula, dtNasc)
                                ? navigation.navigate("Home_p")
                                : Alert.alert("Erro no login", "Matricula ou data de nascimento errados");
                        }}
                    >
                        <Text style={styles.btText}>Entrar</Text>
                        <Image
                            source={require("../../../../assets/Telas/Secundarias/Login/entrar_sb.png")}
                            style={styles.btImage}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}
