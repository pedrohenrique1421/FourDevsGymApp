import { Text, SafeAreaView, View, StatusBar, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

import NavBar_c from "../../../Components/NavBar";

export default function Treino_p({ chave }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"Treinos_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>

                {/* <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>Onde terá treinos</Text> */}

                <View style={styles.treino}>
                <Text style={styles.nomeTreino}>Treino 1</Text>
                    <View style={styles.dia}>
                        <Text style={styles.nomeDia}>Dia 1</Text>
                        <View style={styles.exercicio}>
                        <Image
                source={{ uri: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/09/smith-bench-press.gif' }}
                style={styles.imageExercicio}
            />
                            <Text style={styles.nomeExercicio}>Supino Retoo</Text>
                            <Text style={styles.series}>3</Text>
                            <Text>X</Text>
                            <Text style={styles.rep}>12</Text>
                        </View>
                    </View>
                </View>
            </View>


        </SafeAreaView>
    );
}
