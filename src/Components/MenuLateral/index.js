import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles, widthSvg, heightSvg } from "./style";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";
import Global_Vars from "../../Scripts/GLobal/Global_Var";
import { Dark_Mode_Set } from "../../Scripts/Dark_Mode";
import Dark_Mode_Set from "../../Scripts/Dark_Mode";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Aulas from "../../../assets/Components/MenuLateral/Aulas.svg";
import Avisos from "../../../assets/Components/MenuLateral/Avisos.svg";
import Config from "../../../assets/Components/MenuLateral/Config.svg";
import Dark_Mode from "../../../assets/Components/MenuLateral/Dark_Mode.svg";
import Home from "../../../assets/Components/MenuLateral/Home.svg";
import Perfil from "../../../assets/Components/MenuLateral/Perfil.svg";
import Planos from "../../../assets/Components/MenuLateral/Planos.svg";
import Produtos from "../../../assets/Components/MenuLateral/Produtos.svg";
import Treinos from "../../../assets/Components/MenuLateral/Treinos.svg";
import Avaliacao from "../../../assets/Components/MenuLateral/Avaliacao.svg";
import Sair from "../../../assets/Components/MenuLateral/Sair.svg";

export default function Menulateral_c({ page, resetSlide }) {
    const navigation = useNavigation();
    const [nome, setNome] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Recupera o token do AsyncStorage
                const token = await AsyncStorage.getItem("userToken");
                const id = await AsyncStorage.getItem("userId");
                if (!token) {
                    console.error("Token não encontrado.");
                    return;
                }

                // Faz a requisição à API
                const response = await fetch("https://apigym-fourdevs.vercel.app/student/" + id, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                // Processa a resposta da API
                const data = await response.json();
                if (data.success) {
                    setNome(data.conteudoJson.nome);
                } else {
                    console.error("Erro ao obter dados:", data);
                }
            } catch (error) {
                console.error("Erro ao buscar dados do aluno:", error);
            }
        };

        fetchData();
    }, []);

    const resetAndNavigate = () => {
        Dark_Mode_Set();
        navigation.navigate(page); // Atualiza a navegação
    };

    const NavegarPara = (paginaPara) => {
        navigation.navigate(paginaPara); // Atualiza a navegação
    };

    return (
        <View style={styles.Container}>
            <View>
                <View>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            resetSlide();
                            NavegarPara("Home_p");
                        }}
                        style={[
                            styles.Item,
                            page === "Home_p" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Home width={widthSvg} height={heightSvg} />
                        <Text style={styles.ItemText}>Dashboard</Text>
                    </TouchableOpacity>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            resetSlide();
                            NavegarPara("Treinos_p");
                        }}
                        style={[
                            styles.Item,
                            page === "Treinos_p" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Treinos width={widthSvg} height={heightSvg} />
                        <Text style={styles.ItemText}>Ficha de Treino</Text>
                    </TouchableOpacity>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            resetSlide();
                            NavegarPara("Avaliacao_p");
                        }}
                        style={[
                            styles.Item,
                            page === "Avaliacao_p" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Avaliacao width={widthSvg} height={heightSvg} />
                        <Text style={styles.ItemText}>Minhas avaliações</Text>
                    </TouchableOpacity>
                </View>
                {/* Espaco */}
                <View style={{ height: 24 }} />
                <View>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            resetSlide();
                            NavegarPara("Planos_p");
                        }}
                        style={[
                            styles.Item,
                            page === "Planos_p" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Planos width={widthSvg} height={heightSvg} />
                        <Text style={styles.ItemText}>Meu Plano</Text>
                    </TouchableOpacity>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            resetSlide();
                            NavegarPara("Avisos_p");
                        }}
                        style={[
                            styles.Item,
                            page === "Avisos_p" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Avisos width={widthSvg} height={heightSvg} />
                        <Text style={styles.ItemText}>Avisos</Text>
                    </TouchableOpacity>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            resetSlide();
                            NavegarPara("Sair_p");
                        }}
                        style={[
                            styles.Item,
                            page === "Sair_p" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Sair width={widthSvg} height={heightSvg} />
                        <Text style={styles.ItemText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.BarraDePerfil}>
                {/* Elemento de desenvolvimento */}
                <TouchableOpacity
                    onPress={() => {
                        resetSlide();
                        NavegarPara("Perfil_p");
                    }}
                >
                    <Perfil width={widthSvg + 12} height={heightSvg + 12} />
                </TouchableOpacity>
                <Text style={styles.BDPText}>{nome}</Text>
                {/* Elemento de desenvolvimento */}
                <TouchableOpacity style={styles.BDPImageContainer} onPress={() => resetAndNavigate()}>
                    <Dark_Mode width={widthSvg * 0.8} height={heightSvg * 0.8} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.BDPImageContainer}
                    onPress={() => {
                        resetSlide();
                        NavegarPara("Config_p");
                    }}
                >
                    <Config width={widthSvg * 0.8} height={heightSvg * 0.8} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
