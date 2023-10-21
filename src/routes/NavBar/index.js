import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import VisualilzarAluno from "../../components/VisualizarUsuario/VisualizarAluno";
import Botao from "../../components/Header/Botao";
import Logo from "../../components/Header/Logo";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={BarraDeNavegacao}>
        <Tab.Screen name='Visualizar' component={VisualilzarAluno} options={{
           headerLeft: Botao,
           headerTitle: Logo,
           headerTitleAlign: 'center'
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}