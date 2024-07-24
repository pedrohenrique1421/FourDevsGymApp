import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, StatusBar, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import Global_Colors from '../../../Scripts/GLobal/Global_Colors';
import NavBar_c from '../../../Components/NavBar';
// Function to fetch data
const fetchEvaluations = async (token) => {
    try {
        const response = await fetch('https://apigym-fourdevs.vercel.app/evaluation/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (data.conteudoJson.message === "Não autorizado.") {
            NavegarPara("Sair_p")
        }
        return data;
    } catch (error) {
        console.error("Error fetching evaluations:", error);
        return { conteudoJson: [] };
    }
};

const Aulas_p = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [evaluations, setEvaluations] = useState([]);
    const [userId, setUserId] = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [loading, setLoading] = useState(true); // State for loading

    // Pra navegação
    const [key, setKey] = useState(0);
    const NavegarPara = (paginaPara) => {
        setKey((prevKey) => prevKey + 1); // Atualiza a chave para forçar remontagem
        navigation.navigate(paginaPara, { chave: key }); // Passa a chave como parâmetro
    };

    useEffect(() => {
        const getUserData = async () => {
            try {
                const storedUserId = await AsyncStorage.getItem('userId');
                const storedUserToken = await AsyncStorage.getItem('userToken');
                setUserId(storedUserId);
                setUserToken(storedUserToken);
            } catch (error) {
                console.error("Error retrieving user data:", error);
            }
        };

        const getEvaluations = async () => {
            if (userToken) {
                const data = await fetchEvaluations(userToken);
                if (userId) {
                    const userEvaluations = data.conteudoJson.filter(e => e.id_aluno.toString() === userId);
                    setEvaluations(userEvaluations);
                }
            }
        };

        const fetchData = async () => {
            await getUserData();
            await getEvaluations();
            setLoading(false); // Set loading to false after fetching data
        };

        fetchData();
    }, [userId, userToken]);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    if (loading) {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
                <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR, justifyContent: 'center', alignItems: 'center', height: '100%' }]}>
                    <ActivityIndicator size="large" color={Global_Colors.PRIMARY_COLOR} />
                    <Text style={styles.loading}>Carregando...</Text>
                </View>
            </SafeAreaView>
        );
    }
    const formatDate = (datetime) => {
        const match = datetime.match(/^(\d{2}\/\d{2}\/\d{4})/);
        return match ? match[1] : datetime;
    };

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"Avaliacao_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.accordionTotal}>
                        <Text style={styles.title}>Avaliações</Text>
                        {evaluations.map((evaluation) => (
                            <View key={evaluation.id_avaliacao} style={styles.accordionCard}>
                                <TouchableOpacity
                                    onPress={() => toggleExpand(evaluation.id_avaliacao)}
                                    style={styles.accordionHeader}
                                >
                                    <Text style={styles.accordionTitle}>Avaliação {formatDate(evaluation.data_criacao)}</Text>
                                </TouchableOpacity>

                                {/* Accordion Content */}
                                <Collapsible collapsed={expandedId !== evaluation.id_avaliacao}>
                                    <View style={styles.accordionContent}>
                                        <Text style={styles.titleTexto}>🎯 Análise</Text>
                                        <Text style={styles.dado}>Objetivo da avaliação: <Text style={styles.dadoNegrito}>{evaluation.obj}</Text></Text>
                                        <Text style={styles.titleTexto}>📊  Composição Corporal</Text>
                                        <Text style={styles.dado}>Peso: <Text style={styles.dadoNegrito}>{evaluation.peso} Kg</Text></Text>
                                        <Text style={styles.dado}>Altura: <Text style={styles.dadoNegrito}>{evaluation.altura} Cm</Text></Text>
                                        <Text style={styles.titleTexto}>📏 Métricas</Text>
                                        <Text style={styles.dado}>Braço Direito Contraído: <Text style={styles.dadoNegrito}>{evaluation.braco_direito_contraido} Cm</Text></Text>
                                        <Text style={styles.dado}>Braço Direito Relaxado: <Text style={styles.dadoNegrito}>{evaluation.braco_direito_relaxado} Cm</Text></Text>
                                        <Text style={styles.dado}>Braço Esquerdo Contraído: <Text style={styles.dadoNegrito}>{evaluation.braco_esquerdo_contraido} Cm</Text></Text>
                                        <Text style={styles.dado}>Braço Esquerdo Relaxado: <Text style={styles.dadoNegrito}>{evaluation.braco_esquerdo_relaxado} Cm</Text></Text>
                                        <Text style={styles.dado}>Tórax: <Text style={styles.dadoNegrito}>{evaluation.torax} Cm</Text></Text>
                                        <Text style={styles.dado}>Cintura: <Text style={styles.dadoNegrito}>{evaluation.cintura} Cm</Text></Text>
                                        <Text style={styles.dado}>Abdômen: <Text style={styles.dadoNegrito}>{evaluation.abdomen} Cm</Text></Text>
                                        <Text style={styles.dado}>Quadril: <Text style={styles.dadoNegrito}>{evaluation.quadril} Cm</Text></Text>
                                        <Text style={styles.dado}>Coxa Esquerda: <Text style={styles.dadoNegrito}>{evaluation.coxa_esquerda} Cm</Text></Text>
                                        <Text style={styles.dado}>Coxa Direita: <Text style={styles.dadoNegrito}>{evaluation.coxa_direita} Cm</Text></Text>
                                        <Text style={styles.dado}>Antebraço Direito: <Text style={styles.dadoNegrito}>{evaluation.antebraco_direito} Cm</Text></Text>
                                        <Text style={styles.dado}>Panturrilha Esquerda: <Text style={styles.dadoNegrito}>{evaluation.panturrilha_esquerda} Cm</Text></Text>
                                        <Text style={styles.dado}>Panturrilha Direita: <Text style={styles.dadoNegrito}>{evaluation.panturrilha_direita} Cm</Text></Text>
                                        <Text style={styles.dado}>Antebraço Esquerdo: <Text style={styles.dadoNegrito}>{evaluation.antebraco_esquerdo} Cm</Text></Text>
                                        <Text style={styles.titleTexto}>🔍 Bioimpedância</Text>
                                        <Text style={styles.dado}>Água Corporal: <Text style={styles.dadoNegrito}>{evaluation.agua_corporal} %</Text></Text>
                                        <Text style={styles.dado}>Relação cintura quadril: <Text style={styles.dadoNegrito}>{evaluation.rcq} WHR</Text></Text>
                                        <Text style={styles.dado}>Taxa metabolismo Basal: <Text style={styles.dadoNegrito}>{evaluation.tmb} kcal/dia</Text></Text>
                                        <Text style={styles.dado}>Gordura Visceral: <Text style={styles.dadoNegrito}>{evaluation.gordura_visceral}</Text></Text>
                                        <Text style={styles.dado}>Massa Óssea: <Text style={styles.dadoNegrito}>{evaluation.massa_ossea} Kg</Text></Text>
                                        <Text style={styles.dado}>Idade Metabólica: <Text style={styles.dadoNegrito}>{evaluation.idademeta}</Text></Text>
                                    </View>

                                </Collapsible>
                            </View>
                        ))}
                    </View>
                    {/* Add more Accordion items here if needed */}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default Aulas_p;
