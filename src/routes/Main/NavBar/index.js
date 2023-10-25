import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BarraDeNavegacao from "../../../components/BarraDeNavegacao";
import Logo from "../../../components/Header/Logo";
import TelaInicial from "../../../components/TelaInicial";
import Treinos from "../Stacks/Treinos";
import Vinculos from "../Stacks/Vinculos";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={BarraDeNavegacao} screenOptions={{tabBarHideOnKeyboard: true}}>
        <Tab.Screen name='Inicio'
          component={TelaInicial}
          options={{
            headerTitle: Logo,
            headerTitleAlign: 'center'
          }}
          initialParams={{
            tipo: 'aluno'
          }}
        />
        <Tab.Screen name='TabTreinos'
          component={Treinos}
          options={{headerShown: false}}
        />
        <Tab.Screen name='TabVinculos'
          component={Vinculos}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}