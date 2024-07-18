import { Text, SafeAreaView, View, StatusBar, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

import NavBar_c from "../../../Components/NavBar";

export default function Cadastro_p() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c />
            <View style={styles.cpContainer}>
                <Text style={styles.cpTitle}>Pagina de Cadastro</Text>
                <Text style={styles.cpSubTitle}>Pagina para fazer um cadastro no app</Text>
            </View>
        </SafeAreaView>
    );
}
