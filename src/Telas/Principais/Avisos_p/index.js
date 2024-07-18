import { Text, SafeAreaView, View, StatusBar, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

import NavBar_c from "../../../Components/NavBar";

export default function Avisos_p() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"avisos"} />
            <View style={styles.cpContainer}>
                <Text style={styles.cpTitle}>Pagina de Avisos</Text>
                <Text style={styles.cpSubTitle}>Onde terá Avisos e ou informações de eventos</Text>
            </View>
        </SafeAreaView>
    );
}
