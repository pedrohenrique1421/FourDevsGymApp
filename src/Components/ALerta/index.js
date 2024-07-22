import { View, Animated, Text, TouchableOpacity, Dimensions } from "react-native";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";
import styles from "./style";
import { useCallback, useRef, useEffect } from "react";

export default function Alerta({ tempo, type, funcaoDeRetorno, onEnd }) {
    const { width, height } = Dimensions.get("window");
    const slideAnim = useRef(new Animated.Value(width / 2)).current;

    useEffect(() => {
        animation();
        console.log("animacao");
    }, []);

    const animation = () => {
        Animated.sequence([
            Animated.timing(slideAnim, {
                toValue: width / 2,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 1500, //
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true,
                delay: tempo,
            }),
            Animated.timing(slideAnim, {
                toValue: width / 2,
                duration: 1500, //
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
                { backgroundColor: type == "sucesso" ? "#28a745" : type == "alerta" ? "#ffc107" : "#dc3545" },
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
                                    ? Global_Colors.BW_QUARTIARY_COLOR
                                    : type == "alerta"
                                    ? Global_Colors.BW_QUINTERNARY_COLOR
                                    : Global_Colors.BW_QUARTIARY_COLOR,
                        },
                    ]}
                >
                    {type == "sucesso" ? "Sucesso" : type == "alerta" ? "Cuidado" : "Error"}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
}
