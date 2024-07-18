import { Text, SafeAreaView, View, StatusBar, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

import NavBar_c from "../../../Components/NavBar";

export default function Planos_p() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"planos"} />
            <View style={styles.cpContainer}>
                <Text style={styles.cpTitle}>Pagina de Planos</Text>
                <Text style={styles.cpSubTitle}>Onde terá informações sobre seus planos</Text>
            </View>
        </SafeAreaView>
    );
}
