import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View, StatusBar, Image, ScrollView, ActivityIndicator } from 'react-native';
import styles from './style';
import Global_Colors from '../../../Scripts/GLobal/Global_Colors';
import NavBar_c from '../../../Components/NavBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Treino_p() {
    const [treinoData, setTreinoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


       // Pra navegação
       const [key, setKey] = useState(0);
       const NavegarPara = (paginaPara) => {
           setKey((prevKey) => prevKey + 1); // Atualiza a chave para forçar remontagem
           navigation.navigate(paginaPara, { chave: key }); // Passa a chave como parâmetro
       };
       

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                const id = await AsyncStorage.getItem('userId');

                if (!token || !id) {
                    setError('Token ou ID do usuário não encontrado.');
                    setLoading(false);
                    return;
                }

                // Requisição para a API para obter os dados do aluno
                const studentResponse = await fetch(`https://apigym-fourdevs.vercel.app/student/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!studentResponse.ok) {
                    throw new Error('Erro ao obter dados do aluno.');
                }

                const studentData = await studentResponse.json();
                const treinoID = studentData.conteudoJson.id_treino;

                // Requisição para a segunda API usando id_aluno
                const treinoResponse = await fetch(`https://apigym-fourdevs.vercel.app/training/${treinoID}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
             
                if (!treinoResponse.ok) {
                    throw new Error('Erro ao obter dados do treino.');
                }
             
                const treinoData = await treinoResponse.json();
                setTreinoData(treinoData.conteudoJson);
                console.log(treinoData)
                if (treinoData.conteudoJson.message === "Não autorizado.") {
                    NavegarPara("Sair_p")
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
                <NavBar_c page={"Treinos_p"} />
                <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR, justifyContent: 'center', alignItems: 'center', height: '100%' }]}>
                    <ActivityIndicator size="large" color={Global_Colors.PRIMARY_COLOR} />
                    <Text style={styles.loading}>Carregando...</Text>
                </View>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
                <NavBar_c page={"Treinos_p"} />
                <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                    <Text style={styles.error}>Erro: {error}</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container} backgroundColor={Global_Colors.BW_PRIMARY_COLOR}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            <NavBar_c page={"Treinos_p"} />
            <View style={styles.cpContainer}>
                <ScrollView width={"100%"}>
                    <Text style={styles.nomeTreino}>{treinoData?.treino.nome || "Nome do Treino"}</Text>
                    {treinoData?.dias.map(dia => (
                        <View key={dia.id_dia} style={styles.dia}>
                            <Text style={styles.nomeDia}     color={Global_Colors.BW_PRIMARY_COLOR}>Dia {dia.id_dia}</Text>
                            {dia.exercicios.map(exercicio => (
                                <View key={exercicio.id_exercicio} style={styles.exercicio} backgroundColor={Global_Colors.BW_PRIMARY_COLOR}>
                                    <Image
                                        source={{ uri: `${exercicio.gif_url}` }} // Ajuste a URL conforme necessário
                                        style={styles.imageExercicio}
                                    />
                                    <Text style={styles.nomeExercicio}>{exercicio.exercicio_nome}</Text>
                                    <Text style={styles.series}>{exercicio.series}</Text>
                                    <Text style={styles.division}>X</Text>
                                    <Text style={styles.rep}>{exercicio.repeticoes}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
