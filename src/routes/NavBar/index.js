import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import VisualizarUsuario from "../../components/VisualizarUsuario";
import InicioAluno from "../../components/TelaInicial/InicioAluno";
import Botao from "../../components/Header/Botao";
import Logo from "../../components/Header/Logo";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={BarraDeNavegacao} screenOptions={{tabBarHideOnKeyboard: true}}>
        <Tab.Screen name='Inicio' component={InicioAluno} options={{
           headerTitle: Logo,
           headerTitleAlign: 'center'
        }}
        initialParams={{
          tipo: 'aluno'
        }}/>
        <Tab.Screen name='Visualizar' component={VisualizarUsuario} options={{
           headerLeft: Botao,
           headerTitle: Logo,
           headerTitleAlign: 'center'
        }}
        initialParams={{
          tipo: 'aluno'
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}