import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import Inicio from "../Stacks/Inicio";
import Treinos from "../Stacks/Treinos";
import Vinculos from "../Stacks/Vinculos";
import Usuario from "../Stacks/Usuario";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={BarraDeNavegacao} screenOptions={{tabBarHideOnKeyboard: true}}>
        <Tab.Screen name='Inicio'
          component={Inicio}
          options={{headerShown: false}}
        />
        <Tab.Screen name='TabTreinos'
          component={Treinos}
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}