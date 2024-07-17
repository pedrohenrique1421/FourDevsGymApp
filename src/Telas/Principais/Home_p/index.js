import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    View,
    StatusBar,
    Image,
    Animated,
    Dimensions,
    TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";
import { useState } from "react";
import { useRef } from "react";

import Menulateral_c from "../../../Components/MenuLateral";

export default function Home_p() {
    const navigation = useNavigation();
    const [showMenu, setShowMenu] = useState(false);
    const { width, height } = Dimensions.get("window");
    const slideAnim = useRef(new Animated.Value(width * -1)).current;
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
            toValue: width * -1, // O componente deslizará para fora da tela
            duration: 1000, // A duração da animação
            useNativeDriver: true, // Usa a API de driver nativo para melhor desempenho
        }).start();
        setShowMenu(false);
    };
    //#endregion
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <View style={styles.nvContainer}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        !showMenu ? startSliding() : resetSliding();
                    }}
                >
                    <Image
                        source={require("../../../../assets/Telas/Principais/Home/menu_sb.png")}
                        style={styles.nvImage}
                        resizeMode="contain"
                    />
                </TouchableWithoutFeedback>
                {!showMenu ? (
                    <Image
                        source={require("../../../../assets/Telas/Principais/Home/CrownNegative_sb.png")}
                        resizeMode="contain"
                        style={styles.nvImage}
                    />
                ) : (
                    <View />
                )}
            </View>
            {/* Menu Lateral */}
            <Animated.View style={(styles.mlContainer, { transform: [{ translateX: slideAnim }] })}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        !showMenu ? startSliding() : resetSliding();
                    }}
                >
                    <Menulateral_c page={"dashboard"} />
                </TouchableWithoutFeedback>
            </Animated.View>
            <View style={styles.cpContainer}>
                <Text style={styles.cpTitle}>Pagina inicial ou Dashboard</Text>
                <Text style={styles.cpSubTitle}>Onde terá informações suas</Text>
            </View>
        </SafeAreaView>
    );
}
