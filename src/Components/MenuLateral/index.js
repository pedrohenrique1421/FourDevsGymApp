import { View, Image, TouchableOpacity, Text, Animated, TouchableWithoutFeedback } from "react-native";
import { styles, widthSvg, heightSvg } from "./style";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";
import Global_Vars from "../../Scripts/GLobal/Global_Var";
import Dark_Mode_Set from "../../Scripts/Dark_Mode";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

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

// Falta navegar com o parametro chave: key e definir o backgroundColor das outras paginas

export default function Menulateral_c({ page, resetSlide }) {
    const navigation = useNavigation();
    const [key, setKey] = useState(0);
    const resetAndNavigate = () => {
        Dark_Mode_Set();
        setKey((prevKey) => prevKey + 1); // Atualiza a chave para forçar remontagem
        navigation.navigate(page, { chave: key }); // Passa a chave como parâmetro
    };

    const NavegarPara = (paginaPara) => {
        setKey((prevKey) => prevKey + 1); // Atualiza a chave para forçar remontagem
        navigation.navigate(paginaPara, { chave: key }); // Passa a chave como parâmetro
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
                            NavegarPara("Aulas_p");
                        }}
                        style={[
                            styles.Item,
                            page === "Aulas_p" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
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
                            NavegarPara("Suporte_p");
                        }}
                        style={[
                            styles.Item,
                            page === "Suporte_p" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
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
                <Text style={styles.BDPText}>
                    {Global_Vars.NOME.length > 14
                        ? String(Global_Vars.NOME.substring(0, 14) + "...")
                        : String(Global_Vars.NOME)}
                </Text>
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
