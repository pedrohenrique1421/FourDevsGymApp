import { Text, SafeAreaView, View, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"; // Certifique-se de importar useEffect e useState
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBar_c from "../../../Components/NavBar";

export default function Suporte_p({ chave }) {
    const navigation = useNavigation();
    const [key, setKey] = useState(0);

    // Função para navegação
    const NavegarPara = (paginaPara) => {
        setKey((prevKey) => prevKey + 1); // Atualiza a chave para forçar remontagem
        navigation.navigate(paginaPara, { chave: key }); // Passa a chave como parâmetro
    };

    useEffect(() => {
        const handleAsyncOperations = async () => {
            try {
                await AsyncStorage.removeItem('userId');
                await AsyncStorage.removeItem('userToken');
                NavegarPara("Login_p");
            } catch (error) {
                console.error("Erro ao remover itens do AsyncStorage: ", error);
            }
        };

        handleAsyncOperations();
    }, []); // O array vazio faz com que o useEffect seja executado apenas uma vez, quando o componente é montado

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"Suporte_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <Text style={styles.cpTitle}>Pagina Suporte</Text>
                <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>Suporte ao usuário</Text>
            </View>
        </SafeAreaView>
    );
}
