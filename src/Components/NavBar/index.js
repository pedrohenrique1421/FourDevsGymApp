import { View, Text, TouchableWithoutFeedback, Dimensions, Animated, TouchableOpacity } from "react-native";
import Menulateral_c from "../MenuLateral";
import styles from "./style";
import { useState, useRef } from "react";

import Lista from "../../../assets/Components/NavBar_sb/Lista.svg";
import Logo from "../../../assets/Components/NavBar_sb/Logo.svg";

export default function NavBar_c() {
    const [showMenu, setShowMenu] = useState(false);
    const { width, height } = Dimensions.get("window");
    const slideAnim = useRef(new Animated.Value((width / 1.5) * -1)).current;
    //#region
    // Função para iniciar a animação
    const startSliding = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 1000, // A duração da animação
            useNativeDriver: true, // Usa a API de driver nativo para melhor desempenho
        }).start();
        setShowMenu(true);
    };

    // Função para resetar a animação
    const resetSliding = () => {
        Animated.timing(slideAnim, {
            toValue: (width / 1.5) * -1, // O componente deslizará para fora da tela
            duration: 1000, // A duração da animação
            useNativeDriver: true, // Usa a API de driver nativo para melhor desempenho
        }).start();
        setShowMenu(false);
    };
    //#endregion
    return (
        <View style={styles.container}>
            <View style={styles.nvContainer}>
                <TouchableOpacity
                    style={{ width: 300 }}
                    onPress={() => {
                        console.log("clickado");
                        !showMenu ? startSliding() : resetSliding();
                    }}
                >
                    <Lista height={25} />
                </TouchableOpacity>
                <Logo height={30} width={30} />
            </View>
            <Animated.View style={{ transform: [{ translateX: slideAnim }], zIndex: 1000 }}>
                <Menulateral_c />
            </Animated.View>
        </View>
    );
}
