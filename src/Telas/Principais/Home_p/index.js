import { Text, SafeAreaView, View, StatusBar, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

import NavBar_c from "../../../Components/NavBar";

import User from "../../../../assets/Components/MenuLateral/User.svg";
import Avisos from "../../../../assets/Components/MenuLateral/Avisos.svg";

export default function Home_p() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"dashboard"} />
            <View style={styles.cpContainer}>
                <Text style={styles.bemVindoText}>Bem Vindo!</Text>

                <View style={styles.usuarioContain}>
                    <User style={styles.iconContain} width={30} height={30} />
                    <Text style={styles.cpTitle}>   Wilkenio</Text>
                </View>

                <Text style={styles.bemVindoText}>Avisos:</Text>

                <View style={styles.avisosContain}>
                    <Avisos style={styles.iconContainAvisos} width={15} height={15} />
                    <Text style={styles.cpTitleAvisos}>   Promoção no Plano Mensal</Text>
                </View>

                <View style={styles.avisosContain}>
                    <Avisos style={styles.iconContainAvisos} width={15} height={15} />
                    <Text style={styles.cpTitleAvisos}>   Promoção no Plano Mensal</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
