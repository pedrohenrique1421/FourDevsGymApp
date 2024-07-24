import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StatusBar, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";
import NavBar_c from "../../../Components/NavBar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import PoupUpSet from '../../../Components/PopUp/index';

export default function Planos_p() {
    const [studentDetails, setStudentDetails] = useState(null);
    const [plans, setPlans] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
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
        const [day, month, year] = dateString.split(' ')[0].split('/'); // Extrai partes da data
        return `${year}-${month}-${day}`; // Formata para YYYY-MM-DD
    };

    const changePlan = async (planId) => {
        try {
            const tokenAdm = await AsyncStorage.getItem('userToken');
            const { nascimento } = studentDetails;
            const formattedDate = formatDate(nascimento); // Formata a data

            const response = await fetch(`https://apigym-fourdevs.vercel.app/student/${studentDetails.id_aluno}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenAdm}`
                },
                body: JSON.stringify({
                    id_plano: planId,
                    nascimento: formattedDate // Usa a data formatada
                })
            });

            const data = await response.json();
            if (data.success) {
                setStudentDetails({ ...studentDetails, id_plano: planId });
            } else {
                console.error('Erro ao mudar de plano:', data);
            }
        } catch (error) {
            console.error('Erro ao mudar de plano:', error);
        }
    };

    const handleSelectPlan = (planId) => {
        setSelectedPlan(planId);
        setShowPopup(true);
    };

    const confirmChangePlan = () => {
        changePlan(selectedPlan);
        setShowPopup(false);
    };

    const cancelChangePlan = () => {
        setSelectedPlan(null);
        setShowPopup(false);
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

    const userHasPlan = studentDetails.id_plano !== null && studentDetails.id_plano !== undefined;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            <NavBar_c page={"Planos_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <ScrollView style={styles.ScrollView}>
                    {plans.map((plan) => (
                        <View 
                            key={plan.id_plano} 
                            style={[
                                styles.plano, 
                                studentDetails.id_plano === plan.id_plano && styles.planoAtual
                            ]}
                        >
                            <Text style={styles.titlePlano}>{plan.tipo}</Text>
                            <Text style={styles.precoPlano}>R$ {plan.valor}</Text>
                            <Text style={styles.descricaoPlano}>Plano dedicado para pessoas com foco...</Text>
                            {!userHasPlan || plan.id_plano !== studentDetails.id_plano ? (
                                <TouchableOpacity 
                                    style={styles.clickMudarPlano} 
                                    onPress={() => handleSelectPlan(plan.id_plano)}
                                >
                                    <Text style={styles.bttPlano}>Mudar para esse plano ✓</Text>
                                </TouchableOpacity>
                            ) : (
                                <Text style={styles.bttPlanoAtual}>Meu Plano Atual</Text>
                            )}
                        </View>
                    ))}
                </ScrollView>
            </View>
            {showPopup && (
                <PoupUpSet
                    texts={{
                        titulo: "Mudança de Plano",
                        texto: "Você realmente deseja mudar para este plano?",
                        btn1: "Confirmar",
                        btn2: "Cancelar",
                    }}
                    btn1F={confirmChangePlan}
                    btn2F={cancelChangePlan}
                    btn1Style={popupStyles.confirmButton}
                    btn2Style={popupStyles.cancelButton}
                    btn1TextStyle={popupStyles.confirmButtonText}
                    btn2TextStyle={popupStyles.cancelButtonText}
                    Alerta={null}
                />
            )}
        </SafeAreaView>
    );
    
}

const popupStyles = StyleSheet.create({
    confirmButton: {
        backgroundColor: Global_Colors.BW_QUARTIARY_COLOR,
        padding: 10,
        borderRadius: 3,
    },
    cancelButton: {
        padding: 10,
        borderRadius: 3,
    },
    confirmButtonText: {
        color: Global_Colors.PRIMARY_COLOR,
    },
    cancelButtonText: {
        color: Global_Colors.BW_PRIMARY_COLOR,
    },
});
