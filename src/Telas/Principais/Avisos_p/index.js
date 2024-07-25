import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StatusBar, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";
import NavBar_c from "../../../Components/NavBar";
import Avisos from "../../../../assets/Components/MenuLateral/Avisos.svg";

export default function Avisos_p({ chave }) {
    const [avisos, setAvisos] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para o carregamento
    const navigation = useNavigation();

    // Pra navegação
    const [key, setKey] = useState(0);
    const NavegarPara = (paginaPara) => {
        setKey((prevKey) => prevKey + 1); // Atualiza a chave para forçar remontagem
        navigation.navigate(paginaPara, { chave: key }); // Passa a chave como parâmetro
    };

    useEffect(() => {
        const fetchAvisos = async () => {
            try {
                const userToken = await AsyncStorage.getItem("userToken");
                if (!userToken) {
                    console.error("Token não encontrado");
                    setLoading(false);
                    return;
                }

                const response = await fetch("https://apigym-fourdevs.vercel.app/notice", {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();
                if (data.success) {
                    setAvisos(data.conteudoJson);
                } else if (data.conteudoJson.message === "Não autorizado.") {
                    NavegarPara("Sair_p");
                }
            } catch (error) {
                console.error("Erro ao buscar avisos:", error);
            } finally {
                setLoading(false); // Define o carregamento como falso após a conclusão da busca
            }
        };

        fetchAvisos();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
                <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR, justifyContent: "center", alignItems: "center", height: "100%" }]}>
                    <ActivityIndicator size="large" color={Global_Colors.PRIMARY_COLOR} />
                    <Text style={styles.loading}>Carregando...</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"Avisos_p"} />

            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <View style={styles.avisosTotal}>
                    <ScrollView style={styles.scrollView}>
                        {avisos.map((aviso) => (
                            <View key={aviso.id_aviso} style={[styles.containAviso, { shadowColor: String(`${Global_Colors.BW_SECONDARY_COLOR}50`) }]}>
                                <View style={styles.containIconAvisos}>
                                    <Avisos style={styles.avisosIcon}></Avisos>
                                </View>

                                <View style={styles.textAviso}>
                                    <Text style={styles.cpTitle}>{aviso.titulo}</Text>
                                    <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>{aviso.descricao}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}
