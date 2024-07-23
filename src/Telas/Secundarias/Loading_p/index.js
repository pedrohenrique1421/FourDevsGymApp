import { View, Text, TouchableOpacity } from "react-native";
import Global_Colors from "../../../Scripts/GLobal/Global_Colors";
import { useNavigation } from "@react-navigation/native";

export default function Loading_p() {
    const navigation = useNavigation();
    return (
        <View
            style={{
                backgroundColor: Global_Colors.PRIMARY_COLOR,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={{ color: "#f1f1f1", fontSize: 24 }}>Carregando...</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home_p")}
                style={{ padding: 24, backgroundColor: "#f1f1f1" }}
            >
                <Text>Clique para avancar</Text>
            </TouchableOpacity>
        </View>
    );
}
