import { View, Text, TouchableWithoutFeedback, Dimensions, Animated, TouchableOpacity } from "react-native";
import Menulateral_c from "../MenuLateral";
import PopUp from "../PopUp";
import Alerta from "../ALerta";
import styles from "./style";
import { useState, useRef } from "react";

import Lista from "../../../assets/Components/NavBar_sb/Lista.svg";
import Logo from "../../../assets/Components/NavBar_sb/Logo.svg";

export default function NavBar_c({ page }) {
    const [showMenu, setShowMenu] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const { width, height } = Dimensions.get("window");
    const slideAnim = useRef(new Animated.Value(width * -1)).current;
    //#region
    // Função para iniciar a animação
    const startSliding = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 1500, // A duração da animação
            useNativeDriver: true, // Usa a API de driver nativo para melhor desempenho
        }).start();
        setShowMenu(true);
    };

    // Função para resetar a animação
    const resetSliding = () => {
        Animated.timing(slideAnim, {
            toValue: width * -1, // O componente deslizará para fora da tela
            duration: 1500, // A duração da animação
            useNativeDriver: true, // Usa a API de driver nativo para melhor desempenho
        }).start();
        setShowMenu(false);
    };
    //#endregion

    const HandleFecharPopUp = () => {
        setPopUp(!popUp);
    };
    return (
        <View style={styles.container}>
            <View style={styles.nvContainer}>
                <TouchableOpacity
                    style={styles.menuBtn}
                    onPress={() => {
                        console.log("clickado");
                        !showMenu ? startSliding() : resetSliding();
                    }}
                >
                    <Lista height={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPopUp(!popUp)}>
                    <Logo height={30} width={30} />
                </TouchableOpacity>
            </View>
            <Animated.View style={{ transform: [{ translateX: slideAnim }], zIndex: 1000, width: width }}>
                <TouchableOpacity onPress={() => resetSliding()} style={styles.backgroundBtn} />
                <Menulateral_c page={page} resetSlide={resetSliding} />
            </Animated.View>
            {popUp ? (
                <PopUp
                    texts={{
                        titulo: "Conexão falha",
                        texto: "Não foi possível estabelecer uma conexão com o servidor. Texnte novamente em alguns instantes ou experimente fechar o aplicativo e abrir novamente.",
                        btn1: "cancelar",
                        btn2: "ok",
                    }}
                    Alerta={<Alerta type={"error"} tempo={3000} />}
                    btn1F={() => HandleFecharPopUp()}
                    btn2F={() => HandleFecharPopUp()}
                />
            ) : (
                <View />
            )}
        </View>
    );
}
