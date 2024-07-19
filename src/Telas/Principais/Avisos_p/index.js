import { Text, SafeAreaView, View, StatusBar, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

import NavBar_c from "../../../Components/NavBar";

export default function Avisos_p({ chave }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"Avisos_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <Text style={styles.cpTitle}>Pagina de Avisos</Text>
                <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>
                    Onde terá Avisos e ou informações de eventos
                </Text>
            </View>
        </SafeAreaView>
    );
}
