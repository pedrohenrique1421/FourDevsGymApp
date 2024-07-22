import { Text, SafeAreaView, View, StatusBar, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

import NavBar_c from "../../../Components/NavBar";
import Alerta from "../../../Components/ALerta";
import { useState } from "react";
import Home from "../../../../assets/Components/MenuLateral/User.svg";
import Avisos from "../../../../assets/Components/MenuLateral/Avisos.svg";

export default function Home_p({ chave }) {
    const navigation = useNavigation();
    const [showAlerta, setShowAlerta] = useState(false);
    const HandleOnEnd = () => {
        setShowAlerta(!showAlerta);
        console.log("alerta desfeito");
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {showAlerta ? <Alerta type={"sucesso"} tempo={2000} onEnd={HandleOnEnd} /> : <View />}
            {/* NavBar */}
            <NavBar_c page={"Home_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>Bem vindo!</Text>

                <View style={styles.containUser}>
                    <Home width={20} height={20} style={styles.iconUser} />
                    <Text style={styles.cpTitle}>Wilkenio</Text>
                </View>

                <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>Avisos</Text>

                <View style={styles.Avisos}>
                    <View style={styles.containAvisos}>
                        <Avisos width={20} height={20} style={styles.iconUser} />
                        <Text style={styles.cpTitleAvisos}>Promoção no plano Trimestral !</Text>
                    </View>

                    <View style={styles.containAvisos}>
                        <Avisos width={20} height={20} style={styles.iconUser} />
                        <Text style={styles.cpTitleAvisos}>Promoção no plano Trimestral !</Text>
                    </View>
                    <TouchableOpacity onPress={() => setShowAlerta(!showAlerta)}>
                        <Text>Exibir alerta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
