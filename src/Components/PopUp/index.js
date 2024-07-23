import { View, Text, TouchableOpacity, Animated } from "react-native";
import styles from "./style";
import { useCallback, useRef, useEffect } from "react";

// Ajeitar a animacao

export default function PopUp({ texts, btn1F, btn2F, Alerta }) {
    const slideAnim = useRef(new Animated.Value(0)).current;
    const HandleExecutarFuncao = useCallback((funcao) => {
        if (typeof funcao === "function") {
            Animated.sequence([
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 1500,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                funcao();
            });
        }
    }, []);

    const animationEnter = () => {
        Animated.sequence([
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }),
        ]).start();
    };

    useEffect(() => {
        animationEnter();
    });

    return (
        <>
            <Animated.View style={[styles.container, { transform: [{ scale: slideAnim }] }]}>
                <View style={{ gap: 12 }}>
                    <Text style={styles.title}>{texts.titulo}</Text>
                    <Text style={styles.text}>{texts.texto}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => HandleExecutarFuncao(btn1F)}>
                        <Text style={styles.btnText}>{texts.btn1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btn, { borderRightWidth: 0 }]}
                        onPress={() => HandleExecutarFuncao(btn2F)}
                    >
                        <Text style={styles.btnText}>{texts.btn2}</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
            {Alerta}
        </>
    );
}
