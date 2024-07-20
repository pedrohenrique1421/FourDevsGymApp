import { Text, SafeAreaView, View, StatusBar, Dimensions, Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

import NavBar_c from "../../../Components/NavBar";
import Alerta from "../../../Components/ALerta";
import User from "../../../../assets/Components/MenuLateral/User.svg";

export default function Home_p({ chave }) {
    //navigation.navigate("Login_p")
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"Home_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>Bem vindo!</Text>
                <Text style={styles.cpTitle}><User/> Wilkenio</Text>

            </View>
        </SafeAreaView>
    );
}
