import { View, Image, TouchableOpacity, Text, Animated } from "react-native";
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

export default function Menulateral_c({ page }) {
    const navigation = useNavigation();
    return (
        <View style={styles.mlContainer}>
            <View>
                <View>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Home_p");
                        }}
                        style={[
                            styles.mlItem,
                            page === "dashboard" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Image />
                        <Text style={styles.mlItemText}>Dashboard</Text>
                    </TouchableOpacity>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Treinos_p");
                        }}
                        style={[
                            styles.mlItem,
                            page === "treinos" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Image />
                        <Text style={styles.mlItemText}>Meus Treinos</Text>
                    </TouchableOpacity>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Planos_p");
                        }}
                        style={[
                            styles.mlItem,
                            page === "planos" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Image />
                        <Text style={styles.mlItemText}>Planos</Text>
                    </TouchableOpacity>
                    {/* Item */}
                </View>
                {/* Espaco */}
                <View style={{ height: 24 }} />
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Produtos_p");
                        }}
                        style={[
                            styles.mlItem,
                            page === "produtos" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Image />
                        <Text style={styles.mlItemText}>Produtos</Text>
                    </TouchableOpacity>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Aulas_p");
                        }}
                        style={[
                            styles.mlItem,
                            page === "aulas" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Image />
                        <Text style={styles.mlItemText}>Horarios de aulas</Text>
                    </TouchableOpacity>
                    {/* Item */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Avisos_p");
                        }}
                        style={[
                            styles.mlItem,
                            page === "avisos" ? { backgroundColor: Global_Colors.BW_TERTIARY_COLOR } : {},
                        ]}
                    >
                        <Image />
                        <Text style={styles.mlItemText}>Avisos</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mlBarraDePerfil}>
                {/* Elemento de desenvolvimento */}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Perfil_p");
                    }}
                >
                    <Image />
                </TouchableOpacity>
                <Text style={styles.mlBDPText}>
                    {Global_Vars.NOME.length > 14
                        ? String(Global_Vars.NOME.substring(0, 14) + "...")
                        : String(Global_Vars.NOME)}
                </Text>
                {/* Elemento de desenvolvimento */}
                <TouchableOpacity style={styles.mlBDPImageContainer}>
                    <Image />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.mlBDPImageContainer}
                    onPress={() => {
                        navigation.navigate("Config_p");
                    }}
                >
                    <Image />
                </TouchableOpacity>
            </View>
        </View>
    );
}
