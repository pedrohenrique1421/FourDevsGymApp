import { View, Image, TouchableOpacity, Text, Animated } from "react-native";
import styles from "./style";
import Global_Colors from "../../Scripts/GLobal/Global_Colors";
import Global_Vars from "../../Scripts/GLobal/Global_Var";
import { useNavigation } from "@react-navigation/native";

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
                        <Image
                            source={require("../../../assets/Components/MenuLateral/home_sb.png")}
                            resizeMode="contain"
                            style={styles.mlItemImage}
                        />
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
                        <Image
                            source={require("../../../assets/Components/MenuLateral/treinos_sb.png")}
                            resizeMode="contain"
                            style={styles.mlItemImage}
                        />
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
                        <Image
                            source={require("../../../assets/Components/MenuLateral/planos_sb.png")}
                            resizeMode="contain"
                            style={styles.mlItemImage}
                        />
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
                        <Image
                            source={require("../../../assets/Components/MenuLateral/produtos_sb.png")}
                            resizeMode="contain"
                            style={styles.mlItemImage}
                        />
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
                        <Image
                            source={require("../../../assets/Components/MenuLateral/horarios_sb.png")}
                            resizeMode="contain"
                            style={styles.mlItemImage}
                        />
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
                        <Image
                            source={require("../../../assets/Components/MenuLateral/avisos_sb.png")}
                            resizeMode="contain"
                            style={styles.mlItemImage}
                        />
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
                    <Image
                        source={require("../../../assets/Components/MenuLateral/perfil_sb.png")}
                        resizeMode="contain"
                        style={styles.mlBDPImage}
                    />
                </TouchableOpacity>
                <Text style={styles.mlBDPText}>
                    {Global_Vars.NOME.length > 14
                        ? String(Global_Vars.NOME.substring(0, 14) + "...")
                        : String(Global_Vars.NOME)}
                </Text>
                {/* Elemento de desenvolvimento */}
                <TouchableOpacity style={styles.mlBDPImageContainer}>
                    <Image
                        source={require("../../../assets/Components/MenuLateral/dark_mode_sb.png")}
                        resizeMode="contain"
                        style={[styles.mlBDPImage]}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.mlBDPImageContainer}
                    onPress={() => {
                        navigation.navigate("Config_p");
                    }}
                >
                    <Image
                        source={require("../../../assets/Components/MenuLateral/configuracoes_sb.png")}
                        resizeMode="contain"
                        style={styles.mlBDPImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
