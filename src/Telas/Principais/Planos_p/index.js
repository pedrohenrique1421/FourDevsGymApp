import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StatusBar, ScrollView, TouchableOpacity, StyleSheet, Clipboard, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";
import NavBar_c from "../../../Components/NavBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PopUp from "../../../Components/PopUp/";
import Alerta from "../../../Components/ALerta/";

export default function Planos_p() {
    const [studentDetails, setStudentDetails] = useState(null);
    const [plans, setPlans] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState(null); // State for payment info
    const [pixQRCode, setPixQRCode] = useState(null); // State for PIX QR Code
    const [refreshKey, setRefreshKey] = useState(0); // State to trigger refresh
    const [alerta, setAlerta] = useState(null); // State for alert type (null, 'copiado', 'pago')
    const navigation = useNavigation();
    // Fetch student details and plans
    useEffect(() => {
        const fetchStudentDetails = async () => {
            try {
                const userId = await AsyncStorage.getItem("userId");
                const tokenAdm = await AsyncStorage.getItem("userToken");
                const response = await fetch(`https://apigym-fourdevs.vercel.app/student/${userId}`, {
                    headers: { Authorization: `Bearer ${tokenAdm}` },
                });
                const data = await response.json();
                if (data.success) {
                    setStudentDetails(data.conteudoJson);
                } else {
                    console.error("Erro ao buscar detalhes do aluno:", data);
                }
            } catch (error) {
                console.error("Erro ao buscar detalhes do aluno:", error);
            }
        };

        const fetchPlans = async () => {
            try {
                const tokenAdm = await AsyncStorage.getItem("userToken");
                const response = await fetch("https://apigym-fourdevs.vercel.app/plan", {
                    headers: { Authorization: `Bearer ${tokenAdm}` },
                });
                const data = await response.json();
                if (data.success) {
                    setPlans(data.conteudoJson);
                } else {
                    console.error("Erro ao buscar planos:", data);
                }
            } catch (error) {
                console.error("Erro ao buscar planos:", error);
            }
        };

        fetchStudentDetails();
        fetchPlans();
    }, [refreshKey]);

    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split(" ")[0].split("/"); // Extrai partes da data
        return `${year}-${month}-${day}`; // Formata para YYYY-MM-DD
    };

    const changePlan = async (planId) => {
        try {
            const tokenAdm = await AsyncStorage.getItem("userToken");
            const userId = await AsyncStorage.getItem("userId");

            // Request to create payment
            const paymentResponse = await fetch("https://apigym-fourdevs.vercel.app/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenAdm}`,
                },
                body: JSON.stringify({
                    id_aluno: userId,
                    id_plano: planId,
                }),
            });

            const paymentData = await paymentResponse.json();
            console.log(paymentData)
            if (paymentData.success) {
                setPaymentInfo(paymentData.conteudoJson);
                // Start checking payment status
                checkPaymentStatus(paymentData.conteudoJson.id_pagamento);
            } else {
                console.error("Erro ao criar pagamento:", paymentData);
            }
        } catch (error) {
            console.error("Erro ao criar pagamento:", error);
        }
    };

    const checkPaymentStatus = async (paymentId) => {
        try {
            const tokenAdm = await AsyncStorage.getItem("userToken");
            const intervalId = setInterval(async () => {
                const response = await fetch(`https://apigym-fourdevs.vercel.app/payment/${paymentId}`, {
                    headers: { Authorization: `Bearer ${tokenAdm}` },
                });
                const data = await response.json();
                console.log(data)
                if (data.success) {
                    if (data.conteudoJson.status === "approved") {
                        clearInterval(intervalId);
                        setAlerta("pago"); // Set alert type to 'pago'
                        setPixQRCode(data.conteudoJson.pix_qr_code);

                        // Clear payment info after successful update
                        setPaymentInfo(null); // Clear payment info

                        // Trigger a refresh
                        setRefreshKey((prevKey) => prevKey + 1);
                    }
                } else {
                    console.error("Erro ao verificar status do pagamento:", data);
                }
            }, 7000); // Check every 7 seconds
        } catch (error) {
            console.error("Erro ao verificar status do pagamento:", error);
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

    const copyToClipboard = async (text) => {
        await Clipboard.setString(text);
        setAlerta("copiado"); // Atualize o estado para exibir o alerta
        //alert("Texto copiado para a área de transferência!");
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
    function calcularDiasParaVencer(dataInicioStr, diasValidade) {
        // Converter a string de data no formato dd/mm/yyyy hh:mm:ss para um objeto Date
        const [day, month, year, hour, minute, second] = dataInicioStr.split(/[/ :]/).map(Number);
        const dataInicio = new Date(year, month - 1, day, hour, minute, second);
      
        // Calcular a data de vencimento
        const dataVencimento = new Date(dataInicio);
        dataVencimento.setDate(dataInicio.getDate() + diasValidade);
      
        // Obter a data atual
        const dataAtual = new Date();
      
        // Calcular a diferença em dias
        const diferencaDias = Math.ceil((dataVencimento - dataAtual) / (1000 * 60 * 60 * 24));
      console.log("||"+diferencaDias)
        // Retornar a diferença
        return diferencaDias;
      }
    
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            <NavBar_c page={"Planos_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <ScrollView style={styles.ScrollView}>
                <Text style={styles.title}>Meu Plano</Text>
                {plans.map((plan) => {
    // Calcular os dias para vencer antes do JSX
    const diasParaVencer = studentDetails.id_plano === plan.id_plano ? calcularDiasParaVencer(studentDetails.data_inicio_plano, plan.dias_validade) : null;

    return (
        <View key={plan.id_plano} style={[styles.plano, studentDetails.id_plano === plan.id_plano && styles.planoAtual]}>
            <Text style={styles.titlePlano}>{plan.tipo}</Text>
            <Text style={styles.precoPlano}>R$ {plan.valor}</Text>
            <Text style={styles.descricaoPlano}>{plan.descricao}</Text>
            {!userHasPlan || plan.id_plano !== studentDetails.id_plano ? (
                <TouchableOpacity style={styles.clickMudarPlano} onPress={() => handleSelectPlan(plan.id_plano)}>
                    <Text style={styles.bttPlano}>Mudar para esse plano ✓</Text>
                </TouchableOpacity>
            ) : (
                <>
                    <Text style={styles.bttPlanoAtual}>Meu Plano Atual</Text>
                    <Text style={styles.vencimento}>{diasParaVencer !== null ? `${diasParaVencer} dia(s) restante(s) para vencimento!` : 'Calculando...'}</Text>
                </>
            )}
        </View>
    );
})}

                </ScrollView>

                {paymentInfo && (
                    <View style={styles.containerPagamentos}>
                        <View style={styles.pixContainer}>
                        <Text style={styles.text}>Copie o Pix e faça o pagemento!</Text>
                            <TextInput placeholder="Matricula" style={styles.inputCopiaCola} value={paymentInfo.copia_cola} />
                            <TouchableOpacity onPress={() => copyToClipboard(paymentInfo.copia_cola)}>
                                <Text style={styles.copyText}>Copiar!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
            {showPopup && (
                <PopUp
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

            {alerta && (
                <Alerta type={alerta} tempo={3000} onEnd={() => setAlerta(null)} />
            )}
        </SafeAreaView>
    );
}

const popupStyles = StyleSheet.create({});
