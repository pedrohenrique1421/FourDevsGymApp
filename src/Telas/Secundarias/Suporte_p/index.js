import { Text, SafeAreaView, View, StatusBar, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

import NavBar_c from "../../../Components/NavBar";

export default function Suporte_p() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"suporte"} />
            <View style={styles.cpContainer}>
                <Text style={styles.cpTitle}>Pagina Suporte</Text>
                <Text style={styles.cpSubTitle}>Suporte ao usuário</Text>
            </View>
        </SafeAreaView>
    );
}
