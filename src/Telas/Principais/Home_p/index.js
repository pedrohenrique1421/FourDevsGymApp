import { Text, SafeAreaView, View, StatusBar, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

import NavBar_c from "../../../Components/NavBar";
import Alerta from "../../../Components/ALerta";
import { useState } from "react";

export default function Home_p({ chave }) {
    const navigation = useNavigation();
    const [showAlerta, setShowAlerta] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {showAlerta ? <Alerta type={"sucesso"} tempo={2000} /> : <View />}
            {/* NavBar */}
            <NavBar_c page={"Home_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <Text style={styles.cpTitle}>Pagina inicial ou Dashboard</Text>
                <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>
                    Onde terá informações suas
                </Text>
                <TouchableOpacity
                    onPressIn={() => setShowAlerta(!showAlerta)}
                    onPressOut={() => setShowAlerta(!showAlerta)}
                >
                    <Text>Exibir alerta</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
