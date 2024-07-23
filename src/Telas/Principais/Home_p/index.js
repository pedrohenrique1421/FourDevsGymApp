import { Text, SafeAreaView, View, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";

import NavBar_c from "../../../Components/NavBar";
import Alerta from "../../../Components/ALerta";
import { useState, useEffect } from "react";
import Home from "../../../../assets/Components/MenuLateral/User.svg";
import Avisos from "../../../../assets/Components/MenuLateral/Avisos.svg";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home_p({ chave }) {
    const navigation = useNavigation();
    const [showAlerta, setShowAlerta] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [userName, setUserName] = useState('Loading...');
    const [avisos, setAvisos] = useState([]);

    const HandleOnEnd = () => {
        setShowAlerta(!showAlerta);
        console.log("alerta desfeito");
    };

    //pra navegação
    const [key, setKey] = useState(0);
    const NavegarPara = (paginaPara) => {
        setKey((prevKey) => prevKey + 1); // Atualiza a chave para forçar remontagem
        navigation.navigate(paginaPara, { chave: key }); // Passa a chave como parâmetro
    };

    useEffect(() => {
        // Função assíncrona para buscar os dados do AsyncStorage
        const fetchData = async () => {
            try {
                const value1 = await AsyncStorage.getItem('userId');
                const value2 = await AsyncStorage.getItem('userToken');

                if (value1 !== null) {
                    setUserId(value1);
                }
                if (value2 !== null) {
                    setUserToken(value2);
                }

                // Fetch user data
                if (userId && userToken) {
                    const userResponse = await fetch(`https://apigym-fourdevs.vercel.app/student/${userId}`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${userToken}`,
                        },
                    });
                    const userData = await userResponse.json();
                    console.log(userData)
                    if (userData.success) {
                        setUserName(userData.conteudoJson.nome);
                    }
                }

                // Fetch notices
                if (userToken) {
                    const noticesResponse = await fetch('https://apigym-fourdevs.vercel.app/notice', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${userToken}`,
                        },
                    });
                    const noticesData = await noticesResponse.json();
                    if (noticesData.success) {
                        setAvisos(noticesData.conteudoJson);
                    }
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userId, userToken]);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
            <StatusBar barStyle={"light-content"} backgroundColor={Global_Colors.PRIMARY_COLOR} />
            {showAlerta ? <Alerta type={"sucesso"} tempo={2000} onEnd={HandleOnEnd} /> : <View />}
            {/* NavBar */}
            <NavBar_c page={"Home_p"} />
            <View style={[styles.cpContainer, { backgroundColor: Global_Colors.BW_PRIMARY_COLOR }]}>
                <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>Bem vindo!</Text>


                <View style={styles.containUser}>
                    <Home width={20} height={20} style={styles.iconUser} />
                    <Text style={styles.cpTitle}>{userName}</Text>
                </View>

                <Text style={[styles.cpSubTitle, { color: Global_Colors.BW_SECONDARY_COLOR }]}>Top 3 Avisos</Text>

                <View style={styles.Avisos}>
                    {avisos.slice(0, 3).map((aviso) => (
                        <View style={styles.containAvisos}>
                            <Avisos width={20} height={20} style={styles.iconUser} />
                            <Text style={styles.cpTitleAvisos}>{aviso.titulo}</Text>
                        </View>
                    ))}

                    <TouchableOpacity
                        onPress={() => {

                            NavegarPara("Avisos_p");
                        }}
                    >
                        <View style={styles.buttonMaisAvisos}>
                            <Text style={styles.textButtonAvisos}>Todos Avisos +</Text>

                        </View>
                    </TouchableOpacity>

                    {/* Botão para limpar informações */}

                    <TouchableOpacity onPress={() => setShowAlerta(!showAlerta)}>
                        <Text>Exibir alerta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
