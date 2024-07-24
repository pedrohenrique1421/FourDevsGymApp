import { View, Text, TouchableOpacity, Animated } from "react-native";
import styles from "./style";
import { useCallback, useRef, useEffect } from "react";

export default function PopUp({ texts, btn1F, btn2F, Alerta, btn1Style, btn2Style, btn1TextStyle, btn2TextStyle }) {
    const slideAnim = useRef(new Animated.Value(0)).current;
    const HandleExecutarFuncao = useCallback((funcao) => {
        if (typeof funcao === "function") {
            Animated.sequence([
                Animated.timing(slideAnim, {
                    toValue: 0,
<<<<<<< HEAD
                    duration: 500,
=======
                    duration: 800,
>>>>>>> e5531e23f0523625722f56371f0ed939c73e639b
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
<<<<<<< HEAD
                duration: 500,
=======
                duration: 800,
>>>>>>> e5531e23f0523625722f56371f0ed939c73e639b
                useNativeDriver: true,
            }),
        ]).start();
    };

    useEffect(() => {
        animationEnter();
    }, []);

    return (
        <>
            <Animated.View style={[styles.container, { transform: [{ scale: slideAnim }] }]}>
                <View style={{ gap: 12 }}>
                    <Text style={styles.title}>{texts.titulo}</Text>
                    <Text style={styles.text}>{texts.texto}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={[styles.btn, { borderRightWidth: 0 }, btn2Style]} onPress={() => HandleExecutarFuncao(btn2F)}>
                        <Text style={[styles.btnText, btn2TextStyle]}>{texts.btn2}</Text>
                    </TouchableOpacity>
<<<<<<< HEAD
                    <TouchableOpacity style={[styles.btn, btn1Style]} onPress={() => HandleExecutarFuncao(btn1F)}>
                        <Text style={[styles.btnText, btn1TextStyle]}>{texts.btn1}</Text>
=======
                    <TouchableOpacity style={[styles.btn, { borderRightWidth: 0 }]} onPress={() => HandleExecutarFuncao(btn2F)}>
                        <Text style={styles.btnText}>{texts.btn2}</Text>
>>>>>>> e5531e23f0523625722f56371f0ed939c73e639b
                    </TouchableOpacity>
                </View>
            </Animated.View>
            {Alerta}
        </>
    );
}
