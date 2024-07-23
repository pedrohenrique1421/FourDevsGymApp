import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, StatusBar, TouchableOpacity } from 'react-native';
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

        getUserData();
        getEvaluations();
    }, [userId, userToken]);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {/* NavBar */}
            <NavBar_c page={"Aulas_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <View style={styles.accordionTotal}>
                    <Text style={styles.title}>Avaliações</Text>
                    {evaluations.map((evaluation) => (
                        <View key={evaluation.id_avaliacao} style={styles.accordionCard}>
                            <TouchableOpacity 
                                onPress={() => toggleExpand(evaluation.id_avaliacao)} 
                                style={styles.accordionHeader}
                            >
                                <Text style={styles.accordionTitle}>Avaliação {evaluation.data_criacao}</Text>
                            </TouchableOpacity>

                            {/* Accordion Content */}
                            <Collapsible collapsed={expandedId !== evaluation.id_avaliacao}>
                                <View style={styles.accordionContent}>
                                    <Text>Braco Direito Contraído: {evaluation.braco_direito_contraido}</Text>
                                    <Text>Braco Direito Relaxado: {evaluation.braco_direito_relaxado}</Text>
                                    <Text>Braco Esquerdo Contraído: {evaluation.braco_esquerdo_contraido}</Text>
                                    <Text>Braco Esquerdo Relaxado: {evaluation.braco_esquerdo_relaxado}</Text>
                                    <Text>Água Corporal: {evaluation.agua_corporal}</Text>
                                    <Text>Tórax: {evaluation.torax}</Text>
                                    <Text>Altura: {evaluation.altura}</Text>
                                    <Text>Peso: {evaluation.peso}</Text>
                                    <Text>Gordura Visceral: {evaluation.gordura_visceral}</Text>
                                    <Text>Massa Óssea: {evaluation.massa_ossea}</Text>
                                    <Text>Cintura: {evaluation.cintura}</Text>
                                    <Text>Abdômen: {evaluation.abdomen}</Text>
                                    <Text>Quadril: {evaluation.quadril}</Text>
                                    <Text>Coxa Esquerda: {evaluation.coxa_esquerda}</Text>
                                    <Text>Coxa Direita: {evaluation.coxa_direita}</Text>
                                    <Text>Antebraço Direito: {evaluation.antebraco_direito}</Text>
                                    <Text>Panturrilha Esquerda: {evaluation.panturrilha_esquerda}</Text>
                                    <Text>Panturrilha Direita: {evaluation.panturrilha_direita}</Text>
                                    <Text>Antebraço Esquerdo: {evaluation.antebraco_esquerdo}</Text>
                                </View>
                            </Collapsible>
                        </View>
                    ))}
                </View>
                {/* Add more Accordion items here if needed */}
            </View>
        </SafeAreaView>
    );
}

export default Aulas_p;
