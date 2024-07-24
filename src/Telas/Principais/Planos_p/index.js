import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StatusBar, ScrollView, TouchableOpacity, StyleSheet, Clipboard, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";
import NavBar_c from "../../../Components/NavBar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import PoupUpSet from '../../../Components/PopUp/';
import ALerta from '../../../Components/ALerta';

export default function Planos_p() {
    const [studentDetails, setStudentDetails] = useState(null);
    const [plans, setPlans] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState(null); // State for payment info
    const [pixQRCode, setPixQRCode] = useState(null); // State for PIX QR Code
    const [refreshKey, setRefreshKey] = useState(0); // State to trigger refresh
    const navigation = useNavigation();

    useEffect(() => {
        const fetchStudentDetails = async () => {
            try {
                const userId = await AsyncStorage.getItem('userId');
                const tokenAdm = await AsyncStorage.getItem('userToken');
                console.log('Fetching student details with userId:', userId, 'and tokenAdm:', tokenAdm);
                const response = await fetch(`https://apigym-fourdevs.vercel.app/student/${userId}`, {
                    headers: { Authorization: `Bearer ${tokenAdm}` }
                });
                const data = await response.json();
                console.log('Student details response:', data);
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
                console.log('Fetching plans with tokenAdm:', tokenAdm);
                const response = await fetch('https://apigym-fourdevs.vercel.app/plan', {
                    headers: { Authorization: `Bearer ${tokenAdm}` }
                });
                const data = await response.json();
                console.log('Plans response:', data);
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
    }, [refreshKey]);

    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split(' ')[0].split('/'); // Extrai partes da data
        return `${year}-${month}-${day}`; // Formata para YYYY-MM-DD
    };

    const changePlan = async (planId) => {
        try {
            const tokenAdm = await AsyncStorage.getItem('userToken');
            const userId = await AsyncStorage.getItem('userId');
            console.log('Creating payment for planId:', planId, 'and userId:', userId);

            // Request to create payment
            const paymentResponse = await fetch('https://apigym-fourdevs.vercel.app/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenAdm}`
                },
                body: JSON.stringify({
                    id_aluno: userId,
                    id_plano: planId
                })
            });

            const paymentData = await paymentResponse.json();
            console.log('Payment response:', paymentData);
            if (paymentData.success) {
                setPaymentInfo(paymentData.conteudoJson);
                // Start checking payment status
                checkPaymentStatus(paymentData.conteudoJson.id_pagamento);
            } else {
                console.error('Erro ao criar pagamento:', paymentData);
            }
        } catch (error) {
            console.error('Erro ao criar pagamento:', error);
        }
    };

    const checkPaymentStatus = async (paymentId) => {
        try {
            const tokenAdm = await AsyncStorage.getItem('userToken');
            console.log('Checking payment status for paymentId:', paymentId);
            const intervalId = setInterval(async () => {
                const response = await fetch(`https://apigym-fourdevs.vercel.app/payment/${paymentId}`, {
                    headers: { Authorization: `Bearer ${tokenAdm}` }
                });
                const data = await response.json();
                console.log('Payment status response:', data);
                console.log("||"+data.conteudoJson.status)
                if (data.success) {
                    if (data.conteudoJson.status === 'approved') {
                        clearInterval(intervalId);
                        alert('Pagamento confirmado!');
                        
                        // Exibir o QR Code do PIX
                        setPixQRCode(data.conteudoJson.pix_qr_code);
                        
                        // Clear payment info after successful update
                        setPaymentInfo(null); // Clear payment info
                        
                        // Trigger a refresh
                        setRefreshKey(prevKey => prevKey + 1);
                    }
                } else {
                    console.error('Erro ao verificar status do pagamento:', data);
                }
            }, 7000); // Check every 7 seconds
        } catch (error) {
            console.error('Erro ao verificar status do pagamento:', error);
        }
    };

    const handleSelectPlan = (planId) => {
        console.log('Plan selected:', planId);
        setSelectedPlan(planId);
        setShowPopup(true);
    };

    const confirmChangePlan = () => {
        console.log('Confirming plan change for selected plan:', selectedPlan);
        changePlan(selectedPlan);
        setShowPopup(false);
    };

    const cancelChangePlan = () => {
        console.log('Plan change canceled.');
        setSelectedPlan(null);
        setShowPopup(false);
    };

    const copyToClipboard = async (text) => {
        await Clipboard.setString(text);
        alert('Texto copiado para a área de transferência!');
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

                {paymentInfo && (
                      <View style={styles.containerPagamentos}>
                    <View style={styles.pixContainer}>
                    
                        <TextInput placeholder="Matricula" style={styles.inputCopiaCola} value={paymentInfo.copia_cola} />
                        <TouchableOpacity onPress={() => copyToClipboard(paymentInfo.copia_cola)}>
                            <Text style={styles.copyText}>Copiar!</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                )}


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
                    textsStyle={popupStyles.popupText}
                />
            )}
        </SafeAreaView>
    );
}

const popupStyles = StyleSheet.create({
    confirmButton: {
        backgroundColor: 'green',
    },
    cancelButton: {
        backgroundColor: 'red',
    },
    popupText: {
        fontSize: 16,
        color: 'black',
    },
});
