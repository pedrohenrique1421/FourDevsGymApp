import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StatusBar, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";
import NavBar_c from "../../../Components/NavBar";

export default function Avisos_p({ chave }) {
    const [avisos, setAvisos] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchAvisos = async () => {
            try {
                const userToken = await AsyncStorage.getItem('userToken');
                if (!userToken) {
                    console.error("Token não encontrado");
                    return;
                }

                const response = await fetch("https://apigym-fourdevs.vercel.app/notice", {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();
                if (data.success) {
                    setAvisos(data.conteudoJson);
                } else {
                    console.error("Falha ao buscar avisos:", data);
                }
            } catch (error) {
                console.error("Erro ao buscar avisos:", error);
            }
        };

        fetchAvisos();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"Avisos_p"} />

            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <View style={styles.avisosTotal}>
                    <ScrollView style={styles.scrollView}>
                        {avisos.map((aviso) => (
                            <View key={aviso.id_aviso} style={styles.containAviso}>
                                <Text style={styles.cpTitle}>{aviso.titulo}</Text>
                                <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>
                                    {aviso.descricao}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}
