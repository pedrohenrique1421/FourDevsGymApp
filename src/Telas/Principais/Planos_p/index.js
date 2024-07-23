import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";
import NavBar_c from "../../../Components/NavBar";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Planos_p() {
    const [studentDetails, setStudentDetails] = useState(null);
    const [plans, setPlans] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchStudentDetails = async () => {
            try {
                const userId = await AsyncStorage.getItem('userId');
                const tokenAdm = await AsyncStorage.getItem('userToken');
                const response = await fetch(`https://apigym-fourdevs.vercel.app/student/${userId}`, {
                    headers: { Authorization: `Bearer ${tokenAdm}` }
                });
                const data = await response.json();
                if (data.success) {
                    setStudentDetails(data.conteudoJson);
                } else {
                    console.error('Erro ao buscar detalhes do aluno:', data);
                }
            } catch (error) {
                console.error('Erro ao buscar detalhes do aluno:', error);
            }
        };

        const fetchPlans = async () => {
            try {
                const tokenAdm = await AsyncStorage.getItem('userToken');
                const response = await fetch('https://apigym-fourdevs.vercel.app/plan', {
                    headers: { Authorization: `Bearer ${tokenAdm}` }
                });
                const data = await response.json();
                if (data.success) {
                    setPlans(data.conteudoJson);
                } else {
                    console.error('Erro ao buscar planos:', data);
                }
            } catch (error) {
                console.error('Erro ao buscar planos:', error);
            }
        };

        fetchStudentDetails();
        fetchPlans();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    };

    const changePlan = async (planId) => {
        try {
            const tokenAdm = await AsyncStorage.getItem('userToken');
            const { id_aluno, dtNascimento } = studentDetails;

            const response = await fetch(`https://apigym-fourdevs.vercel.app/student/${id_aluno}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenAdm}`
                },
                body: JSON.stringify({
                    ...studentDetails,
                    id_plano: planId,
                    nascimentooo: formatDate(dtNascimento) // Formatar a data para YYYY-MM-DD
                })
            });

            const data = await response.json();
            if (data.success) {
                setStudentDetails({ ...studentDetails, id_plano: planId });
            } else {
                console.error('Errro ao mudar de plano:', data);
            }
        } catch (error) {
            console.error('Erro ao mudar de plano:', error);
        }
    };

    if (!studentDetails || !plans || plans.length === 0) {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
                <NavBar_c page={"Planos_p"} />
                <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                    <Text>Carregando...</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            <NavBar_c page={"Planos_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <ScrollView style={styles.ScrollView}>
                    {plans.map((plan) => (
                        <View key={plan.id_plano} style={styles.plano}>
                            <Text style={styles.titlePlano}>{plan.tipo}</Text>
                            <Text style={styles.precoPlano}>R$ {plan.valor}</Text>
                            <Text style={styles.descricaoPlano}>Plano dedicado para pessoas com foco...</Text>
                            {plan.id_plano !== studentDetails.id_plano ? (
                                <TouchableOpacity onPress={() => changePlan(plan.id_plano)}>
                                    <Text style={styles.bttPlano}>Mudar para esse plano ✓</Text>
                                </TouchableOpacity>
                            ) : (
                                <Text style={styles.bttPlano}>Plano Atual ✓</Text>
                            )}
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
