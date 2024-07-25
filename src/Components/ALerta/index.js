import { View, Animated, Text, TouchableOpacity, Dimensions } from "react-native";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";
import styles from "./style";
import { useCallback, useRef, useEffect } from "react";

export default function Alerta({ tempo, type, funcaoDeRetorno, onEnd }) {
    const { width, height } = Dimensions.get("window");
    const slideAnim = useRef(new Animated.Value(width / 2.5)).current;

    useEffect(() => {
        animation();
    }, []);

    const animation = () => {
        Animated.sequence([
            Animated.timing(slideAnim, {
                toValue: width / 2.5,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 500, //
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
                delay: tempo,
            }),
            Animated.timing(slideAnim, {
                toValue: width / 2.5,
                duration: 500, //
                useNativeDriver: true,
            }),
        ]).start(HandleFuncaoEnd);
    };

    const HandleFuncao = useCallback(() => {
        if (typeof funcaoDeRetorno === "function") {
            funcaoDeRetorno();
        }
    }, [funcaoDeRetorno]);

    const HandleFuncaoEnd = useCallback(() => {
        if (typeof onEnd === "function") {
            onEnd();
        }
    }, [funcaoDeRetorno]);
    return (
        <Animated.View
            style={[
                styles.container,
                { borderLeftColor: type == "sucesso" ? "#28a745" :type == "copiado" ? "#28a745" :type == "pago" ? "#28a745" : type == "alerta" ? "#ffc107" : "#dc3545" },
                { transform: [{ translateX: slideAnim }] },
            ]}
        >
            <TouchableOpacity style={styles.btn} onPress={HandleFuncao}>
                <Text
                    style={[
                        styles.text,
                        {
                            color:
                                type == "sucesso"
                                    ? Global_Colors.BW_SECONDARY_COLOR
                                    : type == "alerta"
                                    ? Global_Colors.BW_SECONDARY_COLOR
                                    : Global_Colors.BW_SECONDARY_COLOR,
                        },
                    ]}
                >
                    {type == "sucesso" ? "Sucesso" :type == "copiado" ? "Copiado!" :type == "pago" ? "Pago!" : type == "alerta" ? "Cuidado" : "Erro"}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
}
