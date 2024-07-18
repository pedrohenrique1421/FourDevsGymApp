import { View, Image, TouchableOpacity, Text, Animated, TouchableWithoutFeedback } from "react-native";
import styles from "./style";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";
import Global_Vars from "../../Scripts/GLobal/Global_Var";
import { useNavigation } from "@react-navigation/native";

import Aulas from "../../../assets/Components/MenuLateral/Aulas.svg";
import Avisos from "../../../assets/Components/MenuLateral/Avisos.svg";
import Config from "../../../assets/Components/MenuLateral/Config.svg";
import Dark_Mode from "../../../assets/Components/MenuLateral/Dark_Mode.svg";
import Home from "../../../assets/Components/MenuLateral/Home.svg";
import Perfil from "../../../assets/Components/MenuLateral/Perfil.svg";
import Planos from "../../../assets/Components/MenuLateral/Planos.svg";
import Produtos from "../../../assets/Components/MenuLateral/Produtos.svg";
import Treinos from "../../../assets/Components/MenuLateral/Treinos.svg";

export default function Menulateral_c({ page, resetSlide }) {
    const navigation = useNavigation();
    return (
        <View style={styles.Container}>
            <View>
                <View>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            resetSlide();
                            navigation.navigate("Home_p");
                        }}
                        style={[
                            styles.Item,
                            page === "dashboard" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Image />
                        <Text style={styles.ItemText}>Dashboard</Text>
                    </TouchableOpacity>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            resetSlide();
                            navigation.navigate("Treinos_p");
                        }}
                        style={[
                            styles.Item,
                            page === "treinos" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Image />
                        <Text style={styles.ItemText}>Meus Treinos</Text>
                    </TouchableOpacity>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            resetSlide();
                            navigation.navigate("Aulas_p");
                        }}
                        style={[
                            styles.Item,
                            page === "aulas" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Image />
                        <Text style={styles.ItemText}>Horarios de aulas</Text>
                    </TouchableOpacity>
                </View>
                {/* Espaco */}
                <View style={{ height: 24 }} />
                <View>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            resetSlide();
                            navigation.navigate("Planos_p");
                        }}
                        style={[
                            styles.Item,
                            page === "planos" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Image />
                        <Text style={styles.ItemText}>Planos</Text>
                    </TouchableOpacity>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            resetSlide();
                            navigation.navigate("Avisos_p");
                        }}
                        style={[
                            styles.Item,
                            page === "avisos" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Image />
                        <Text style={styles.ItemText}>Avisos</Text>
                    </TouchableOpacity>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            resetSlide();
                            navigation.navigate("Suporte_p");
                        }}
                        style={[
                            styles.Item,
                            page === "suporte" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Image />
                        <Text style={styles.ItemText}>Suporte</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.BarraDePerfil}>
                {/* Elemento de desenvolvimento */}
                <TouchableOpacity
                    onPress={() => {
                        resetSlide();
                        navigation.navigate("Perfil_p");
                    }}
                >
                    <Image />
                </TouchableOpacity>
                <Text style={styles.BDPText}>
                    {Global_Vars.NOME.length > 14
                        ? String(Global_Vars.NOME.substring(0, 14) + "...")
                        : String(Global_Vars.NOME)}
                </Text>
                {/* Elemento de desenvolvimento */}
                <TouchableOpacity style={styles.BDPImageContainer}>
                    <Image />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.BDPImageContainer}
                    onPress={() => {
                        resetSlide();
                        navigation.navigate("Config_p");
                    }}
                >
                    <Image />
                </TouchableOpacity>
            </View>
        </View>
    );
}
