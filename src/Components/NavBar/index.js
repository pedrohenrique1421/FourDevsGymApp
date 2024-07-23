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
                <Logo height={30} width={30} />
            </View>
            <Animated.View style={{ transform: [{ translateX: slideAnim }], zIndex: 1000, width: width }}>
                <TouchableOpacity onPress={() => resetSliding()} style={styles.backgroundBtn} />
                <Menulateral_c page={page} resetSlide={resetSliding} />
            </Animated.View>
        </View>
    );
}
