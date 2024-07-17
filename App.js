import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//import de paginas
import Cadastro_p from "./src/Telas/Secundarias/Cadastro_p";
import Login_p from "./src/Telas/Secundarias/Login_p";
import Home_p from "./src/Telas/Principais/Home_p";
import Treinos_p from "./src/Telas/Principais/Treinos_p";
import Aulas_p from "./src/Telas/Principais/Aulas_p";
import Planos_p from "./src/Telas/Principais/Planos_p";
import Produtos_p from "./src/Telas/Principais/Produtos_p";
import Avisos_p from "./src/Telas/Principais/Avisos_p";
import Config_p from "./src/Telas/Secundarias/Config_p";
import Perfil_p from "./src/Telas/Secundarias/Perfil_p";

const Stack = createStackNavigator();

const config = {
    animation: "spring",
    config: {
        stiffness: 450,
        damping: 500,
        mass: 15,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login_p"
                screenOptions={{
                    headerShown: false,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}
            >
                <Stack.Screen name="Login_p" component={Login_p} />
                <Stack.Screen name="Cadastro_p" component={Cadastro_p} />
                <Stack.Screen name="Home_p" component={Home_p} />
                <Stack.Screen name="Treinos_p" component={Treinos_p} />
                <Stack.Screen name="Aulas_p" component={Aulas_p} />
                <Stack.Screen name="Planos_p" component={Planos_p} />
                <Stack.Screen name="Produtos_p" component={Produtos_p} />
                <Stack.Screen name="Config_p" component={Config_p} />
                <Stack.Screen name="Avisos_p" component={Avisos_p} />
                <Stack.Screen name="Perfil_p" component={Perfil_p} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}