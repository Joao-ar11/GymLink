import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import Inicio from "../Stacks/Inicio";
import Treinos from "../Stacks/Treinos";
import Vinculos from "../Stacks/Vinculos";
import Usuario from "../Stacks/Usuario";
import TabNotificacoes from "../Stacks/TabNotificacoes";
import TabMontar from "../Stacks/TabMontar";
import User from "../../components/User";
import { useContext } from "react";

const Tab = createBottomTabNavigator();

export default function Main() {
  const usuario = useContext(User);
  const tipo = usuario.user.tipo;

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={({ navigation }) => <BarraDeNavegacao navigation={navigation}/>} screenOptions={{tabBarHideOnKeyboard: true, tabBarHideOnKeyboard: true}}>
        <Tab.Screen name='Inicio'
          component={Inicio}
          options={{headerShown: false}}
        />
        <Tab.Screen name={tipo === 'aluno' ? 'TabTreinos' : 'TabMontar'}
          component={tipo === 'aluno' ? Treinos : TabMontar}
          options={{headerShown: false}}
        />
        <Tab.Screen name='TabVinculos'
          component={Vinculos}
          options={{headerShown: false}}
        />
        <Tab.Screen name='TabUsuario'
          component={Usuario}
          options={{headerShown: false}}
        />
        <Tab.Screen name='TabNotificacoes'
          component={TabNotificacoes}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}